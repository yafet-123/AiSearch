import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import navbarImage from '../../public/vercel.svg';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaPhone } from 'react-icons/fa';
import { useRouter } from 'next/router';

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const NavLinks = [
    { path: '/', name: 'HOME' },
    { path: '/tours', name: 'TOURS' },
    { path: '/ethiopia', name: 'ETHIOPIA' },
    { path: '/about', name: 'ABOUT' },
    { path: '/destinations', name: 'DESTINATIONS' },
    { path: '/sustainablity', name: 'SUSTAINABLITY' },
    { path: '/travel_tips', name: 'TRAVEL TIPS' },
    { path: '/contactus', name: 'CONTACT US' },
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
        colorChange ? 'md:bg-slate-200 ' : 'md:bg-transparent'
      } bg-slate-200 w-full  lg:h-[100px] top-0 fixed z-50`}
    >
      <div className="lg:justify-between justify-around lg:px-4 mx-10 items-center lg:flex lg:py-[10px] ">
        <div className="flex items-center justify-between py-3 ">
          <Link href="/" className="">
            <Image
              src={navbarImage}
              className="w-[150px] h-[60px]"
              alt="Navbar"
            />
          </Link>
          <div className="lg:hidden ">
            <button
              className="p-2  text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setOpen(!open)}
            >
              {open === true ? (
                <AiOutlineClose color="white" size={30} />
              ) : (
                <AiOutlineMenu color="white" size={30} />
              )}
            </button>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
              open ? 'flex' : 'hidden'
            }`}
          >
            <ul className="items-center justify-between space-y-8 lg:flex lg:space-x-8 lg:space-y-0">
              {NavLinks.map((link) => (
                <li key={link.name} className="md:ml-6 font-bold md:my-0 my-7">
                  <Link
                    href={link.path}
                    className={
                      router.pathname == link.path
                        ? 'border-b-4 border-secondaryColor dark:border-white  text-md font-bold text-secondaryColor dark:text-white hover:text-secondaryColor'
                        : 'text-md font-bold text-white dark:text-white hover:border-b-4 border-white  hover:text-secondaryColor'
                    }
                    // className="text-white hover:text-secondaryColor hover:underline transition duration-200 after:text-secondaryColor active:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <div className="relative"></div>

              <button
                className="animate-bounce bg-[white] text-primaryColor font-bold font-sans py-1 px-6 shadow-black items-center justify-center
                                  rounded md:ml-8 shadow-lg hover:text-secondaryColor hover:scale-105 duration-500"
              >
                <Link
                  target="_blank"
                  // className="bg-[white] text-primaryColor font-bold font-sans py-2 px-6 shadow-black
                  //                   rounded md:ml-8 shadow-lg hover:text-secondaryColor hover:scale-105 duration-500"
                  href={`tel:${+251927016060}`}
                >
                  <FaPhone size={30} />
                </Link>
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};