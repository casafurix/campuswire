import Image from "next/image";

export default function GuestSpeakers() {
  return (
    <>
      <h1 className='text-xl font-black'>Guest Speakers</h1>
      <div className='flex-wrap py-6'>
        <div className='col-md-6 flex'>
          <div className='flex'>
            <Image
              src='/user-cyan.png'
              width={60}
              height={60}
              alt='user'
              className='rounded-full max-w-full'
            />
            <p className='my-3'>To be announced</p>
          </div>
          <div className='flex'>
            <Image
              src='/user-cyan.png'
              width={60}
              height={60}
              alt='user'
              className='rounded-full max-w-full'
            />
            <p className='my-3'>To be announced</p>
          </div>
        </div>
      </div>
    </>
  );
}
