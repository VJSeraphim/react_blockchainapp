import React, { useEffect, useState } from "react"
import { ethers } from 'ethers'

import { contractABI, contractAddress } from '../utils/constants'

export const TransactionContext = React.createContext()

const { ethereum } = window

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer)

    return transactionContract
}

export const TransactionProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState('')
    const [formData, setFormData] = useState({addressTo: '', amount: '', keyword: '', message: ''});
    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'));
    
    const handleChange = (e, name) => {
        setFormData((prevState) => ({ ...prevState, [name]: e.target.value }))
    }

    const checkIfWalletConnected = async () => {
        try {
            if(!ethereum) return alert("Please Install Metamask Before your Contract.")
        
            const accounts = await ethereum.request({ method: 'eth_accounts'})
        
            if (accounts.length) {
                setCurrentAccount(accounts[0])

                //getAllTransactions()
            } else {
                console.log('No Accounts Found')
            }

            console.log(accounts)
        } catch (error) {
            console.log(error)
            throw new Error("No Ethereum Object Detected.")
        }   
    }

    const walletConnection = async() => {
        try {
            if(!ethereum) return alert("Please Install Metamask Before your Contract.")
            
            const accounts = await ethereum.request({ method: 'eth_requestAccounts'})
        
            setCurrentAccount(accounts[0])
        } catch (error) {
            console.log(error)
            throw new Error("No Ethereum Object Detected.")
        }
    }

    const sendTransaction = async () => {
        try {
            if(!ethereum) return alert("Please Install Metamask Before your Contract.")

            // get data from the form

            const { addressTo, amount, keyword, message } = formData
            const transactionsContract = getEthereumContract()
            const parsedAmount = ethers.utils.parseEther(amount)

            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: currentAccount,
                    to: addressTo,
                    gas: '0x5208', // 21000 GWEI
                    value: parsedAmount._hex // 0.0001~~(Decimal Number)
                }],
            })

            const transactionHash = await transactionsContract.addToBlockchain(addressTo, parsedAmount, message, keyword)

            setIsLoading(true)
            console.log(`Loading - ${transactionHash}`)
            await transactionHash.wait()
            setIsLoading(false)
            console.log(`Successfully Loaded! - ${transactionHash}`)

            const transactionsCount = await transactionsContract.getTransactionCount()

            setTransactionCount(transactionsCount.toNumber())
        } catch (error) {
            console.log(error)
            throw new Error("No Ethereum Object Detected.")
        }
    }

    useEffect(() => {
        checkIfWalletConnected()
    }, [])

    return (
        <TransactionContext.Provider value={{ walletConnection, currentAccount, formData, setFormData, handleChange, sendTransaction }}>
            {children}
        </TransactionContext.Provider>
    )
}