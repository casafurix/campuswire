export default function HeroNav() {
  return (
    <div className=''>
      <ul className='navbar-nav flex flex-row list-style-none nav-item text-sm text-gray-500 space-x-3 p-2 font-md'>
        <a className='p-2' href='#'>
          About
        </a>
        <a className='p-2 hover:text-black' href='#'>
          Syllabus
        </a>
        <a className='p-2 hover:text-black' href='#'>
          Instructor
        </a>
        <a className='p-2 hover:text-black' href='#'>
          TAs
        </a>
        <a className='p-2 hover:text-black' href='#'>
          Speakers
        </a>
        <a className='p-2 hover:text-black' href='#'>
          FAQ
        </a>
        <a className='p-2 hover:text-black' href='#'>
          Press
        </a>
      </ul>
      <hr />
    </div>
  );
}
