import { BsCameraVideo } from "react-icons/bs";
import { GiPublicSpeaker } from "react-icons/gi";
import { IoMdGlobe } from "react-icons/io";

export default function Hero() {
  return (
    <div>
      <h2 className='font-black text-3xl'>
        PSAI 101: Pre-Seed & Angel Investing Class
      </h2>
      <br />
      <div>
        <span className='bg-gray-100 text-red-500 p-1 font-bold text-sm'>
          Business / Economics
        </span>
        <span className='bg-gray-100 text-blue-500 p-1 font-bold text-sm'>
          Scholarships available
        </span>
      </div>
      <br />
      <br />
      <hr />
      <br />
      <div className='course-highlights items-start '>
        <BsCameraVideo className='text-2xl' />
        <h5 className='text-sm font-semibold'>Live classes</h5>
        <p className='text-gray-400'>
          Classes are taught live on Campuswire platform. No pre-recorded
          videos.
        </p>
      </div>
      <br />
      <div>
        <GiPublicSpeaker className='text-2xl' />
        <h5 className='text-sm font-semibold'>Weekly guest speakers</h5>
        <p className='text-gray-400'>
          Learn directly from the experts themselves. Featuring executives from
          Fortune 500 companies.
        </p>
      </div>
      <br />
      <div>
        <IoMdGlobe className='text-2xl' />
        <h5 className='text-sm font-semibold'>Lifelong community</h5>
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
