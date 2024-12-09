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
]
export default function Card(){
    return(
        
        <div className="featured flex flex-wrap gap-6 items-center mt-[150px] lg:mt-[200px] ml-[100px] xl:ml-[200px]">
            <div className="w-[100%] text-bold text-2xl lg:text-3xl"><h1><b>Our Products</b></h1></div>
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
       
    )
}
