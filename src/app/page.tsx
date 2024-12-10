import Hero from "./components/Hero";
import Feature from "./featuredProducts/page";
import Card from "./Card/card";

export default function Home() {
  return (
    <div className="flex flex-wrap">
 <Hero />
 <div className="flex flex-wrap  gap-4 md:gap-10 lg:gap-14 xl:gap-16 items-center text-center ml-5 sm:ml-[40px] xl:ml-[250px]">
  <img className="h-8 " src="https://www.pointagram.com/wp-content/uploads/2018/01/zapier-logo.png"></img>
  <img className="h-14" src="https://iconape.com/wp-content/png_logo_vector/pipedrive.png"></img>
<img className="h-16" src="https://www.eurotransfer.co.uk/wp-content/uploads/2015/03/CIB-bank-logo-300x300.jpg"></img>
<img className="h-8 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3PFIbwd3oXBjWwR2VvZ-WtgadHg5vQ4eKhA&s"></img>
<img className="h-12" src="https://i.pinimg.com/originals/4f/34/6b/4f346bf4f83de665b5beaf62e5eb546b.gif"></img>

<img className="h-14" src="https://logovectordl.com/wp-content/uploads/2020/10/pandadoc-logo-vector.png"></img>
<img className="h-14" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2SvaQIIIAOS-kXrAVGev-hU72Nql94d8A_Q&s"></img>
 </div>
 <Feature />
 <img className="mt-[200px] xl:mt-[280px] items-center w-full" src="/image/main picture.png"></img>
 <Card/>
 
    </div>
  );
}
