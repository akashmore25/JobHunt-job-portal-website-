// import React from 'react';
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
// import { Button } from './ui/button';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { setSearchedQuery } from '@/redux/jobSlice';



// const CategoryCarousel = () => {

//     const dispatch = useDispatch();
// const navigate = useNavigate();

//     const category = [
//         "frontend Developer",
//         "backend Developer",
//         "Data Science",
//         "Graphic Designer",
//         "FullStack Developer"
//     ]
    
//     const searchJobHandler = (query) => {
//         dispatch(setSearchedQuery(query));
//         navigate("/browse");
//     }

//     return (
//         <div>
//             <Carousel className="w-full max-w-xl mx-auto my-20">
//                 <CarouselContent>
//                     {
//                         category.map((cat, index) => (
//                             <CarouselItem className="md:basis-1/2 lg-basis-1/3">
//                                 <Button onClick={()=>searchJobHandler(cat.toLowerCase())} variant="outline" className="rounded-full">{cat}</Button>
//                             </CarouselItem>
//                         ))
//                     }
//                 </CarouselContent>
//                 <CarouselPrevious />
//                 <CarouselNext />
//             </Carousel>
//         </div>
//     )
// }

// export default CategoryCarousel

import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'
import { setSearchedQuery } from '@/redux/jobSlice'
import { Navigate, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const CategoryCarousel = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const category =[
        "Frontend Devloper",
        "Backend Devloper",
        "Data Science",
        "Graphic Designer",
        "FullStack Devloper"
    ]


    const searchJobHandler = (query)=>{
        dispatch(setSearchedQuery(query));
        navigate(`/browse`)
      }


  return (
    <div>
        <Carousel className="w-full max-w-xl mx-auto my-20">
            <CarouselContent>
                {category.map((item,idx)=>(
 <CarouselItem className="md:basis-1/3 lg-basis-1/4">
    <Button variant="outline" className="rounded-full" onClick={()=>searchJobHandler(item.toLowerCase())}>{item}</Button>
 </CarouselItem>
                ))}

            </CarouselContent>
            <CarouselPrevious className="mr-10"/>

            <CarouselNext />
        </Carousel>
    </div>
  )
}

export default CategoryCarousel
