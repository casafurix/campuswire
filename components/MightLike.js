import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";

export default function MightLike() {
  return (
    <>
      <h1 className='text-2xl font-black text-center'>You might also like:</h1>
      <h2 className='text-lg text-center py-2'>
        Choose the course that is right for you
      </h2>
      <div className='flex-wrap'>
        <div className=' w-60 rounded-lg'>
          {/* <!-- Card --> */}
          <div className='max-w-xs mx-auto py-6'>
            <div className='flex flex-col h-full bg-gray-200 rounded-lg overflow-hidden'>
              {/* <!-- Image --> */}
              <a
                className='block focus:outline-none focus-visible:ring-2'
                href='#'
              >
                <figure className='relative h-0 pb-[56.25%] overflow-hidden'>
                  <Image
                    className='absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out'
                    src='/ml.webp'
                    width={320}
                    height={180}
                    alt='ml'
                  />
                </figure>
              </a>
              {/* <!-- Card Content --> */}
              <div className='flex-grow flex flex-col p-3'>
                {/* <!-- Card body --> */}
                <div className='flex-grow'>
                  {/* <!-- Header --> */}
                  <header className='mb-1'>
                    <a>
                      <h3 className='text-gray-900 font-bold text-md text-left'>
                        Machine Learning Bootcamp
                      </h3>
                    </a>
                  </header>
                  {/* <!-- Content --> */}
                </div>
                {/* <!-- Card footer --> */}
                <div className='flex justify-start space-x-2'>
                  {/* <a href='#' alt='linkedin' width={24} height={24}>
                      <i>
                        <BsLinkedin />
                      </i>
                    </a> */}
                  <a href='#' width={24} height={24}>
                    <Image
                      src='/user-cyan.png'
                      alt='linkedin'
                      width={24}
                      height={24}
                      className='rounded-full'
                    />
                  </a>
                  <p>TBA</p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Card --> */}
          <div className='max-w-xs mx-auto py-6'>
            <div className='flex flex-col h-full bg-gray-200 rounded-lg overflow-hidden'>
              {/* <!-- Image --> */}
              <a
                className='block focus:outline-none focus-visible:ring-2'
                href='#'
              >
                <figure className='relative h-0 pb-[56.25%] overflow-hidden'>
                  <Image
                    className='absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out'
                    src='/ml.webp'
                    width={320}
                    height={180}
                    alt='ml'
                  />
                </figure>
              </a>
              {/* <!-- Card Content --> */}
              <div className='flex-grow flex flex-col p-3'>
                {/* <!-- Card body --> */}
                <div className='flex-grow'>
                  {/* <!-- Header --> */}
                  <header className='mb-1'>
                    <a>
                      <h3 className='text-gray-900 font-bold text-md text-left'>
                        Machine Learning Bootcamp
                      </h3>
                    </a>
                  </header>
                  {/* <!-- Content --> */}
                </div>
                {/* <!-- Card footer --> */}
                <div className='flex justify-start space-x-2'>
                  {/* <a href='#' alt='linkedin' width={24} height={24}>
                      <i>
                        <BsLinkedin />
                      </i>
                    </a> */}
                  <a href='#' width={24} height={24}>
                    <Image
                      src='/user-cyan.png'
                      alt='linkedin'
                      width={24}
                      height={24}
                      className='rounded-full'
                    />
                  </a>
                  <p>TBA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
