import React from "react";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
 
const testimonials = [
  {
    id: 1,
    name: "– Daniel R",
    feedback: "I found everything I needed for my home in one place. Super easy to order!",
    image: "https://i.ibb.co.com/7xGb7HPc/daniyel.png" 
    },
  {
    id: 2,
    name: "– Fatima M",
    feedback: "Quality products at unbeatable prices! I’ll definitely be shopping here again." ,
    image: "https://i.ibb.co.com/TByhKXqr/fatima.png"
  },
     {
    id: 3,
    name: "– Michael T",
    feedback: "Kitchen and household essentials delivered hassle-free. Love the service!",
    image: "https://i.ibb.co.com/XfWchGzK/michel.png"
  },
  {
    id: 4,
    name: "– Aisha K",
    feedback: "Albaia has made my grocery shopping so convenient! Great prices and fast delivery!",
    image:"https://i.ibb.co.com/Mksxh0kD/aisha.png"  
  },
  {
    id: 5,
    name: "– Michael T",
    feedback: "Kitchen and household essentials delivered hassle-free. Love the service!",
    image: "https://i.ibb.co.com/XfWchGzK/michel.png" 
  },
  {
    id: 6,
    name: "– Fatima M",
    feedback: "Quality products at unbeatable prices! I’ll definitely be shopping here again." ,
    image: "https://i.ibb.co.com/TByhKXqr/fatima.png"
  }
];
     const Testimonial = () => {
  return (
    <div id="testimonial" className=" w-full flex flex-col gap-[20px] sm:gap-[25px] px-[35px] sm:px-[50px] py-[35px] sm:py-[50px] rounded-lg text-center ">
      <h2 className="w-[90%] text-[20px] sm:text-[30px] text-center font-semibold uppercase underline underline-offset-[10px]">What Our Customers Say</h2>
      
      <Carousel
      opts={{
        align: "center",
        loop:true
      }}
      className="w-full "
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className=" md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
            <Card key={testimonial.id} className="p-4 h-[280px] outline-[#090808] hover:outline-[#fabe3d] outline outline-none border-none cursor-pointer  bg-active ">
            <CardContent className="flex flex-col items-center text-center  ">
              <div className="w-16 h-16 p-[3px] rounded-full border-[2px] border-primary mb-4 bg-[#2c97e3] ">
                <img className="w-full h-full rounded-full object-cover" src={testimonial.image} alt={testimonial.name} />
              </div>
              <p className="text-lg font-semibold">{testimonial.name}</p>
              <p className="text-gray-600 mt-2 text-primary ">{testimonial.feedback}</p>
            </CardContent>
          </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
      
       
    </div>
  );
};

export default Testimonial;
