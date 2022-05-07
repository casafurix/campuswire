import Image from "next/image";

function Navbar() {
  return (
    <nav className='flex justify-between items-center'>
      <a className='text-2xl font-extrabold text-gray-800'>campuswire</a>
      <div className='flex'>
        <a
          className='bg-white  text-blue-500 font-bold py-2 px-4 rounded-lg'
          href='#'
        >
          Explore Courses
        </a>
        <a
          className='bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded-lg'
          href='#'
        >
          Platform
        </a>
        <a
          className='bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded-lg'
          href='#'
        >
          Blog
        </a>
        <a
          className='bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded-lg'
          href='#'
        >
          Sign in
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
