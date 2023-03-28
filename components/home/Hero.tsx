import React from 'react';
import { HeroContentOne } from '../../types/types';

export const Hero: React.FC<HeroContentOne> = ({
  title,
  subtitle,
}) => {
  return (
    <div
      className={`flex justify-center items-center px-20`}
    >
      <div className="flex flex-col gap-8 font-bold text-center md:pt-10 px-32 ">
        <div>
          <h1 className="text-5xl  font-bold text-[#6471DD] dark:text-[#C1B0EB] mb-2">{title}</h1>
        </div>
        <div>
          <p className="text-black dark:text-white text-md md:text-xl m-4 font-normal !leading-9">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};
