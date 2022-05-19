import { BsCameraVideo } from "react-icons/bs";
import { GiPublicSpeaker } from "react-icons/gi";
import { IoMdGlobe } from "react-icons/io";

export default function Hero() {
  return (
    <div>
      <h2 className='font-extrabold text-3xl'>
        PSAI 101: Pre-Seed & Angel Investing Class
      </h2>
      <br />
      <div className='space-x-4'>
        <span className='bg-red-100 text-red-500 p-2 font-bold text-sm rounded-lg'>
          Business / Economics
        </span>
        <span className='bg-blue-100 text-blue-500 p-2 font-bold text-sm rounded-lg'>
          Scholarships available
        </span>
      </div>
      <br />
      <br />
      <hr />
      <br />
      <div>
        <div className='flex'>
          <BsCameraVideo className='text-2xl' />
          <h5 className='text-md font-semibold px-2'>Live classes</h5>
        </div>
        <p className='text-gray-400'>
          Classes are taught live on Campuswire platform. No pre-recorded
          videos.
        </p>
      </div>

      <br />

      <div className=''>
        <div className='flex'>
          <GiPublicSpeaker className='text-2xl' />
          <h5 className='text-md font-semibold px-2'>Weekly guest speakers</h5>
        </div>
        <p className='text-gray-400'>
          Learn directly from the experts themselves. Featuring executives from
          Fortune 500 companies.
        </p>
      </div>

      <br />

      <div>
        <div className='flex'>
          <IoMdGlobe className='text-2xl' />
          <h5 className='text-md font-semibold px-2'>Lifelong community</h5>
        </div>

        <p className='text-gray-400'>
          You will continue to have access to your cohort of exceptional
          founders and investors even after the course ends.
        </p>
      </div>
      <br />
      <hr />
    </div>
  );
}
