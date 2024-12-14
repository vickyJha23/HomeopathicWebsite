import React, { useState, useEffect, useCallback } from 'react';

// component import 
import Card from './Card';
import Button from './Button';

// static data import 
import { categories, items } from '../assets/staticData';

const Services = () => {
   const [category, setCategory] = useState("Show All");
   const [showMore, setShowMore] = useState(false);
   const [activeIndex, setActiveIndex] = useState(0);
   const [categoryItems, setCategoryItems] = useState(items); // Corrected typo

   const handleCategory = (selectedCategory, index) => {
         setCategory(selectedCategory);
         setActiveIndex(index);
         if(selectedCategory === "Show All"){
            return setShowMore(false);
         }
         setShowMore(true);
   };

   // Filter items based on the selected category
   const filterCategory = useCallback(() => {
        let filteredItems = items;
        if (category !== "Show All") { 
            filteredItems = items.filter(
                (item) => item.category.toLowerCase() === category.toLowerCase()
            );
        }
        setCategoryItems(filteredItems);
   }, [items, category]);

   // Update items when category changes
   useEffect(() => {
      filterCategory();
   }, [category, filterCategory]);

  return (
    <div id='services' className='w-[90vw] max-w-[1170px] mx-auto pb-[5rem] py-[5rem]'>
         <div className='text-center'>
             <h4 className='font-Caveat text-[#91B058] text-[1.5rem]  lg:text-[2rem] tracking-wide'>Services</h4>
             <h1 className='text-[26px] md:text-[28px] lg:text-6xl font-bold font-Times tracking-wide text-[#3E474C]'>Healthy Life</h1>
         </div>
         
         {/* Category buttons */}
         <div className='w-full text-center mt-[2.5rem] lg:mt-[4rem] flex flex-col lg:flex-row justify-start lg:justify-center items-center gap-4'>
            {categories.map((category, index) => (
                <button 
                  key={index} 
                  onClick={() => handleCategory(category, index)} 
                  className={`${activeIndex === index 
                    ? "bg-white px-[1.5rem] w-full lg:w-auto py-[0.75rem] text-[#91B058] shadow-lg shadow-[#a4a3a3] rounded-[5px]"
                    : "px-[1.5rem] py-[0.75rem] text-[#737475] hover:bg-white hover:shadow-lg hover:shadow-[#a4a3a3] hover:rounded-[5px] hover:text-[#91B058] transition-all ease-linear duration-200"} 
                    tracking-wide`}>
                    {category}
                </button>
            ))}
         </div>
         
         {/* Display category items */}
         <div className='mt-[3rem]'>
             <div className={`grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-4 ${showMore ? "h-auto" : "h-[430px]"} overflow-hidden`}>
             {categoryItems.map((item, index) => (
                <Card key={index} item={item} />
             ))}
             </div>
             
             {/* Show More button */}
             {
               categoryItems.length >=6 && (
                  <div className='flex justify-center mt-[2rem]'>
                  <Button 
                    buttonText={`${showMore ? "Show Less": "Show More"}`} 
                    parent="Services" 
                    onClick={() => setShowMore((prev) => !prev)} 
                  />
               </div>
               )
             }
         </div>
    </div>
  );
}

export default Services;