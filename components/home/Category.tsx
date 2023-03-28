import React from 'react';
import { CategoryData }  from '../../data/Category'

export const Category: React.FC<any> = () => {
  return (
    <div className="flex justify-center items-center h-full w-full lg:px-20" >
      <ul className="flex w-full h-[38rem] lg:h-[45rem] flex-col flex-wrap gap-8 font-bold">
        { CategoryData?.map((category:any, index:any)=>(
          <li key={index} className="text-center text-lg lg:text-2xl font-bold text-[#6471DD] dark:text-[#C1B0EB] lg:mb-2">{category.title}</li>
        ))}
      </ul>
    </div>
  );
};
