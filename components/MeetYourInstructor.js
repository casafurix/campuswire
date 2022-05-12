import Image from "next/image";

export default function MeetYourInstructor() {
  return (
    <div>
      <h1 className='text-xl font-black'>Meet your instructor</h1>
      <div className='py-4'>
        <Image
          src='/1603387325878.png'
          width={300}
          height={300}
          alt='profile-pic'
          className='rounded-lg'
        />
      </div>
    </div>
  );
}
