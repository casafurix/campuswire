import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";

function Navbar() {
  return (
    <nav className='flex md:justify-between md:flex md:items-center'>
      <p className='text-2xl font-extrabold text-gray-800 p-8 md:flex'>
        campuswire
      </p>
      <div className='md:flex p-8'>
        <a
          className='bg-white  text-blue-500 font-semibold py-2 px-4 rounded-lg'
          href='#'
        >
          Explore Courses
        </a>
        {/* -------------------Platform----------------------------- */}
        <Menu>
          {({ open }) => (
            <>
              <span className='rounded-md '>
                <Menu.Button className='text-gray-800 bg-white hover:bg-gray-100  font-semibold py-2 px-4 rounded-lg  text-m  text-center inline-flex items-center'>
                  <span>Platform</span>
                  <svg
                    className='w-5 h-5 ml-2 -mr-1'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                </Menu.Button>
              </span>

              <Transition
                show={open}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Menu.Items
                  static
                  className='absolute right-0 w-36 mt-10 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-lg shadow-lg outline-none'
                >
                  <div className='py-1'>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href='#'
                          className='block px-4 py-2 text-gray-800 font-semibold hover:bg-gray-100 dark:hover:bg-gray-200 dark:hover:text-gray-800'
                        >
                          Overview
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href='#'
                          className='block px-4 py-2 text-gray-800 font-semibold hover:bg-gray-100 dark:hover:bg-gray-200 dark:hover:text-gray-800'
                        >
                          Class feed
                        </a>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href='#'
                          className='block px-4 py-2 text-gray-800 font-semibold hover:bg-gray-100 dark:hover:bg-gray-200 dark:hover:text-gray-800'
                        >
                          Live sessions
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href='#'
                          className='block px-4 py-2 text-gray-800 font-semibold hover:bg-gray-100 dark:hover:bg-gray-200 dark:hover:text-gray-800'
                        >
                          Chatrooms
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href='#'
                          className='block px-4 py-2 text-gray-800 font-semibold hover:bg-gray-100 dark:hover:bg-gray-200 dark:hover:text-gray-800'
                        >
                          Lectures
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href='#'
                          className='block px-4 py-2 text-gray-800 font-semibold hover:bg-gray-100 dark:hover:bg-gray-200 dark:hover:text-gray-800'
                        >
                          Gradebook
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>

        <a
          className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-lg'
          href='#'
        >
          Blog
        </a>
        <p className='py-1.5'> | </p>
        <a
          className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-lg'
          href='#'
        >
          Sign in
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
