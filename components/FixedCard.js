import Image from "next/image";

export default function FixedCard() {
  return (
    <div className='bg-gray-100 max-w-xs rounded-lg overflow-hidden'>
      <li>
        <h6 className='text-gray-400 font-semibold'>INSTRUCTOR</h6>
        <Image
          src='/img/1603387325878.png'
          width={100}
          height={50}
          alt='profile-pic'
        />
        <h4 className='font-bold'>Charles Hudson</h4>
        <p className='text-gray-500 text-sm w-40'>
          Managing Partner at Precursor Ventures
        </p>
      </li>
      <li>
        <h6 className='text-gray-400 font-semibold'>SEATS AVAILABLE</h6>
        <p>50</p>
      </li>
      <li>
        <h6 className='text-gray-400 font-semibold'>COURSE DURATION</h6>
        <p>3 weeks</p>
      </li>
      <li>
        <h6 className='text-gray-400 font-semibold'>COMMITMENT</h6>
        <p>3 hours / week</p>
      </li>
      <li>
        <h6 className='text-gray-400 font-semibold'>
          MEET TIMES{"   "}
          <span>
            <button
              type='button'
              className='text-white bg-red-700  font-medium rounded-full text-sm px-2 py-0.4 text-center   dark:bg-red-600 cursor-default'
            >
              LIVE
            </button>
          </span>
        </h6>
        <p>Mon & Wed (6 - 7 PM PST)</p>
      </li>
      <li>
        <h6 className='text-gray-400 font-semibold'>STANDARD PRICING</h6>
        <p>$2,500</p>
      </li>
      <li>
        <h6 className='text-gray-400 font-semibold'>NEW GRAD PRICING</h6>
        <p>$999 $2,500</p>
      </li>
      <br />
      <li>
        <button
          type='button'
          className='text-white bg-blue-700 hover:bg-blue-800   font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none '
        >
          Apply for free
        </button>
        <br />
        <small className='text-gray-400 font-light item-center'>
          Applications open until 01/10/2021
        </small>
      </li>
    </div>
  );
}
