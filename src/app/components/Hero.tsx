export default function Hero(){
    return (
        <div className="xl:h-[400px]  xl:w-[70%] m-10 xl:mx-[200px] bg-gray-200 flex ">
            <div className="w-[30%] m-8 xl:m-20">
            <h1 className="text-sm text-gray-400">WELCOME TO CHAIRY</h1><br></br>
            <h1 className="text-lg sm:text-3xl text-bold text-black"><b>Best Furniture Collection For Your Interior.</b></h1><br></br>
            <button className="rounded-md bg-sky-500 text-white text-bold text-sm w-28 h-6">Shop Now </button></div>
            <img className="xl:m-4 mt-[60px] sm:m-2 h-[250px] sm:mt-2  sm:h-[380px] lg:ml-24" src="/image/finalChair.png"></img>
        </div>
    )
}