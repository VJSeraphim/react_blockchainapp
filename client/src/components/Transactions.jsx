import React, { useContext } from 'react'

import { TransactionContext } from '../context/TransactionContext'

import dummyData from '../utils/dummyData'
import { shortenAddress } from '../utils/shortenAddress'

const TransactionCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
    return (
        <div className="
            bg-[#181918] m-4 flex flex-1 
            2xl:min-w-[450px] 2xl:max-w-[500px]
            sm:min-w-[270px] sm:max-w-[300px]
            flex-col p-3 rounded-md hover:shadow-2xl
        ">
            <div className="flex flex-col w-full items-center mt-3">
                <div className="dieplay-flex justify-start w-full mb-6 p-2">
                    <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noopener noreferrer">
                        <p className="text-white text-base">
                            From: {shortenAddress(addressFrom)}
                        </p>
                    </a>
                    <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noopener noreferrer">
                        <p className="text-white text-base">
                            To: {shortenAddress(addressTo)}
                        </p>
                    </a>
                    <p className="text-white text-base">
                        Amount: {amount}
                    </p>
                    {message && (
                        <>
                            <br/>
                            <p className="text-white text-base">
                                Message: {message}
                            </p>
                        </>
                    )}
                    <div className="bg-black p-3 px-5 rounded-3xl w-max -mt-5 shadow-2xl">
                        <p className="text-[#37C7DA] font-bold">
                            {timestamp}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Transactions = () => {

    const { currentAccount } = useContext(TransactionContext)

    return (
        <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
            <div className="flex flex-col md:p-12 py-12 px-4">
                {currentAccount ? (
                    <h2 className="text-white text-3xl text-center my-2">
                        {/* Latest Transactions Comes Here... */}
                    </h2>
                ) : (
                    <h3 className="text-white text-3xl text-center my-2">
                        {/* Please Connect Your Account to Mees some Latest Transactions Active. */}
                    </h3>
                )}
                
                <div className="flex flex-wrap justify-center items-center mt-10">
                    {dummyData.reverse().map((trans, i) => (
                        <TransactionCard key={i} {...trans} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Transactions
