import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";

export default function TeachingAssistants() {
  return (
    <>
      <h1 className='text-xl font-black'>Teaching assistants</h1>
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
                    src='/tade.png'
                    width={320}
                    height={180}
                    alt='tade'
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
                      <h3 className='text-gray-900 font-bold text-sm'>
                        Tade Oyerinde
                      </h3>
                    </a>
                  </header>
                  {/* <!-- Content --> */}
                  <div className='mb-8 text-gray-500 text-sm'>
                    <p>Founder & CEO at Campuswire</p>
                  </div>
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
                      src='/linkedin.png'
                      alt='linkedin'
                      width={24}
                      height={24}
                    />
                  </a>
                  <a href='#' width={24} height={24}>
                    <Image
                      src='/twitter.png'
                      alt='twitter'
                      width={24}
                      height={24}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
