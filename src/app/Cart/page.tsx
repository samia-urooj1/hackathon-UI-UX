type Items={
    img:string,
    title:string,
    desc1:string,
    desc2:string,
    desc:string,
    icons:string,
    icon2:string,
}

const Cart:Items[] = [{
 img:"/image/orangechair.jpeg",
 title:"Library school chair",
 desc1:"Ashen State/Cobalt Bliss",
 desc2:"MRP: $99",
 desc:"Size L    Quantity 1",
 icons:"/image/hearticon.png",
 icon2:"/image/delete.png"
},
{
    img:"/image/whitechair.jpeg",
    title:"Library school chair",
    desc1:"Ashen State/Cobalt Bliss",
    desc2:"MRP: $99",
    desc:"Size L    Quantity 1",
    icons:"/image/hearticon.png",
    icon2:"/image/delete.png"
   },
]


export default function Cart1(){
return(
    <div className="flex flex-wrap">
        <h1 className="sm:text-2xl text-xl w-[100%] font-bold m-2 sm:mt-8 sm:ml-8 ">Bag</h1>
        <div>
            {Cart.map((item,index)=>(
                <div key={index} className="flex m-2 sm:m-8 gap-2 sm:gap-10">
                    <img className="sm:h-[200px] h-[120px] " src={item.img}></img>
                    <div>
                    <h1 className="text-sm sm:text-xl mt-2">{item.title}</h1>
                    <h3 className="sm:mt-10 mt-2 text-sm text-gray-700">{item.desc1}</h3>
                    <h3 className="text-sm sm:text-lg text-gray-700 md:ml-[400px] lg:ml-[600px]">{item.desc2}</h3>
                    <h2 className="text-sm sm:text-lg text-gray-700">{item.desc}</h2>
                    <div className="flex mt-2 sm:mt-8">
                    <img className="sm:h-6 h-4" src={item.icons}></img>
                    <img className="sm:h-6 h-4" src={item.icon2}></img></div>
                    </div>
                </div>
            )
        )}
        </div>
        <div className="flex justify-center">
        <div className="sm:ml-[200px] ml-[20px] place-items-center ">
            <h1 className="text-xl font-bold mt-6"> Summary</h1>
            <p className="mt-10">Subtotal.............................................$198.00</p>
            <p className="mt-2">Estimated Delivery and Handling............Free</p><br></br>
            <hr></hr>
            <p className="my-6">Total..................................................$198.00</p>
            <hr></hr>
            <button className="mt-10 bg-sky-500 w-[300px] text-white rounded-3xl h-10">Member Checkout</button>
        </div></div>
    </div>
)
}