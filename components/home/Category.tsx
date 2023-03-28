import React from 'react';
import { CategoryData }  from '../../data/Category'

export const Category: React.FC<any> = () => {
  return (
    <div className="flex h-full lg:px-20" >
      <ul className="flex h-[45rem] flex-col justify-center items-center flex-wrap gap-8 font-bold break-words">
        { CategoryData?.map((category:any, index:any)=>(
          <li key={index} className="text-lg lg:text-2xl font-bold text-[#6471DD] dark:text-[#C1B0EB] lg:mb-2">{category.title}</li>
        ))}
      </ul>
    </div>
  );
};
