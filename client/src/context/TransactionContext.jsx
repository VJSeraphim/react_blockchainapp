import React, { useEffect, useState } from "react"
import { ethers } from 'ethers'

import { contractABI, contractAddress } from '../utils/constants'

export const TransactionContext = React.createContext()

const { ethereum } = window

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer)

}

export const TransactionProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState('')

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

    const connectWallet = async() => {
        try {
            if(!ethereum) return alert("Please Install Metamask Before your Contract.")
            
            const accounts = await ethereum.request({ method: 'eth_requestAccounts'})
        
            setCurrentAccount(accounts[0])
        } catch (error) {
            console.log(error)
            throw new Error("No Ethereum Object Detected.")
        }
    }

    useEffect(() => {
        checkIfWalletConnected()
    }, [])

    return (
        <TransactionContext.Provider value={{ connectWallet, currentAccount }}>
            {children}
        </TransactionContext.Provider>
    )
}