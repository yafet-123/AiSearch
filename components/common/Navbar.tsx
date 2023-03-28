import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import navbarImage from '../../public/vercel.svg';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaPhone } from 'react-icons/fa';
import { useRouter } from 'next/router';
import ThemeToggler from '../ThemeToggler';

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const NavLinks = [
    { path: '/sustainablity', name: 'Search' },
    { path: '/travel_tips', name: 'Blogs' },
    { path: '/contactus', name: 'Submit' },
  ];

  // const [navColor , setNavcolor] = useState('bg-transparent')

  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
  }, []);

  return (
    <nav
      className={` ${
        colorChange ? 'lg:bg-slate-200 ' : 'lg:bg-transparent'
      } bg-slate-200 w-full lg:h-[80px] top-0 fixed z-50`}
    >
      <div className="lg:justify-between justify-around lg:px-4 mx-2 lg:mx-10 items-center lg:flex lg:py-[10px] ">
        <div className="flex items-center justify-between py-3">
          <Link href="/" className="text-3xl font-bold text-[#6471DD] dark:text-[#C1B0EB]">
            AI Search
          </Link>
          <div className="lg:hidden">
            <button
              className="p-2  text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setOpen(!open)}
            >
              {open === true ? (
                <AiOutlineClose color="black" size={30} />
              ) : (
                <AiOutlineMenu color="black" size={30} />
              )}
            </button>
          </div>
        </div>

        <div>
          <div className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${ open ? 'flex' : 'hidden' }`} >
            <ul className="items-center justify-between space-y-8 lg:flex lg:space-x-8 lg:space-y-0">
              {NavLinks.map((link) => (
                <li key={link.name} className="md:ml-6 font-bold md:my-0 my-7">
                  <Link
                    href={link.path}
                    className={
                      router.pathname == link.path
                        ? 'border-b-4 border-secondaryColor dark:border-white  text-md font-bold text-secondaryColor dark:text-white'
                        : 'text-md font-bold text-black dark:text-white hover:border-b-4 border-white  hover:text-secondaryColor'
                    }
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="md:ml-6 font-bold md:my-0 my-7">  
                <ThemeToggler />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};