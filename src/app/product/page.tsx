type Product={
    id:number,
    title:string,
    img:string,
    price:string,
    img2:string,
}
const productData:Product[]=[
    {
   id:1,
   title:"Library stool chair",
   img:"/image/whitechair2.jpeg",
   price:"$20",
   img2:"/image/cart.png"
    },
    {
        id:1,
        title:"Library stool chair",
        img:"/image/pinkchair.jpeg",
        price:"$20",
   img2:"/image/cart.png"
         },
         {
            id:1,
            title:"Library stool chair",
            img:"/image/orangechair.jpeg",
            price:"$20",
   img2:"/image/cart.png"
             },
             {
                id:1,
                title:"Library stool chair",
                img:"/image/whitechair.jpeg",
                price:"$20",
               img2:"/image/cart.png"
                 },


                 {
                    id:1,
                    title:"Library stool chair",
                    img:"/image/wingchairs.webp",
                    price:"$20",
                   img2:"/image/cart.png"
                     },
                     {
                        id:1,
                        title:"Library stool chair",
                        img:"/image/deskchair.jpeg",
                        price:"$20",
                       img2:"/image/cart.png"
                         },
                         {
                            id:1,
                            title:"Library stool chair",
                            img:"/image/woodenchair.webp",
                            price:"$20",
                           img2:"/image/cart.png"
                             },
                             {
                                id:1,
                                title:"Library stool chair",
                                img:"/image/gray.webp",
                                price:"$20",
                               img2:"/image/cart.png"
                                 },
                                 {
                                    id:1,
                                    title:"Library stool chair",
                                    img:"/image/orangechair.jpeg",
                                    price:"$20",
                           img2:"/image/cart.png"
                                     },
                                     {
                                        id:1,
                                        title:"Library stool chair",
                                        img:"/image/pinkchair.jpeg",
                                        price:"$20",
                                   img2:"/image/cart.png"
                                         },
                                         {
                                            id:1,
                                            title:"Library stool chair",
                                            img:"/image/whitechair.jpeg",
                                            price:"$20",
                                           img2:"/image/cart.png"
                                             },
                                             {
                                                id:1,
                                                title:"Library stool chair",
                                                img:"/image/wingchairs.webp",
                                                price:"$20",
                                               img2:"/image/cart.png"
                                                 },
]
export default function Card(){
    return(
        <div>
        <div className="featured flex flex-wrap gap-6 items-center mt-[80px] lg:mt-[200px] ml-[100px] xl:ml-[200px]">
            <div className="w-[100%] text-bold text-2xl lg:text-3xl"><h1><b>All Products</b></h1></div>
     {productData.map((item,index)=>(
      <div key={index} >
         <img  className="rounded-xl w-[280px] mt-6" src={item.img}></img>
          <div className="flex">
            <div className="w-[80%] mt-4">
         <h1 >{item.title}</h1>
         <h2 className="text-bold  mt-1"><b>{item.price}</b></h2></div>

         <div className="w-[20%]">
         <img className="h-14  bg-gray-200 m-1 hover:bg-blue-500" src={item.img2}></img></div>
         
         </div>
      </div>
     )
    )}
        </div>
        
        <div className="bg-gray-200 lg:h-[600px] mt-[160px] text-center"><br></br>
            <h1 className="text-bold text-2xl lg:text-3xl mt-10 lg:mt-[80px]"><b>Or Subscribe To The Newsletter</b></h1>
            <input className="bg-gray-200 underline mt-[20px] lg:mt-[50px] text-sm lg:text-xl" type="text" placeholder="Email Address...              "></input>
            <button className="ml-8 text-gray-900 "><u>SUBMIT</u></button>
            <h1 className="text-bold text-2xl lg:text-3xl mt-[40px] mt-4"><b>Follow Products And Discounts On Instagram</b></h1>
           
           
            <div className="flex gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4   lg:grid-cols-6  xl:ml-[180px] mt-8">
            <img className="h-[200px] w-[200px]" src="/image/pinkchair.jpeg"></img>   
            <img className="h-[200px] w-[200px]" src="/image/deskchair.jpeg"></img>
            <img className="h-[200px] w-[200px]" src="/image/woodenchair.webp"></img>  
             <img className="h-[200px] w-[200px]" src="/image/wingchairs.webp"></img>
             <img className="h-[200px] w-[200px]" src="/image/orangechair.jpeg"></img>
             <img className="h-[200px] w-[200px]" src="/image/whitechair.jpeg"></img>
            </div>
        </div>
        </div>
       
    )
}