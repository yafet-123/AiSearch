import Link from 'next/link';

const Header = () => {
  return ( 
    <header className='header'>
      <div className='container font-bold text-xl'>
        <div className='logo'>
          <Link href='/'>Yafet Addisu</Link>
        </div>
        <div className='links'>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/about/team'>Our Team</Link>
          <Link href='/code/repos'>Code</Link>
        </div>
      </div>
    </header>
  );
};
export default Header;