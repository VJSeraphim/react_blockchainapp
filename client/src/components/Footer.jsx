import logo from '../../images/logo.png'

const Footer = () => {
    return (
        <div className="w-full flex flex-col md:justify-center justify-between items-center p-4 gradient-bg-footer">
            <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
                <div className="flex flex-[0.5] justify-center items-center">
                    <img 
                        src={logo}
                        alt="logo"
                        className="w-32"
                    />
                </div>
                <div className="flex flex-1 justify-evenly items-cetner flex-wrap sm:mt-0 mt-5 w-full">
                    <p className="text-white text-base text-center mx-2 cursor-pointer">
                        Market
                    </p>
                    <p className="text-white text-base text-center mx-2 cursor-pointer">
                        Tutorials
                    </p>
                    <p className="text-white text-base text-center mx-2 cursor-pointer">
                        Exchange
                    </p>
                    <p className="text-white text-base text-center mx-2 cursor-pointer">
                        Wallets
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-5">
                <p className="text-white text-sm text-center">
                    Come and join us!
                </p>
                <p className="text-white text-sm text-center">
                    MoongTangYee@korypto.ko
                </p>
            </div>
            <div 
                className="sm:w-[90%] w-full h=[0.25px] bg-gray-400 mt-5"
            />
            <div className="sm:w-[90%] w-full flex justify-between items-center mt-3 ">
                <p className="text-white text-sm text-center">
                    @Krypto-MoongTangYee
                </p>
                <p className="text-white text-sm text-center">
                    All rights An-reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer
