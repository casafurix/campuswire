import Image from "next/image";

export default function ImageGrid() {
  return (
    <div className='container mx-auto'>
      <div className='grid-cols-4 py-10 px-1 space-y-2 lg:space-y-0 lg:grid lg:gap-1'>
        <div className='w-full rounded'>
          <Image
            src='/charles-thumbnail.png'
            width={195}
            height={240}
            alt='charles-thumbnail'
            className='rounded-l-lg'
          />
        </div>
        <div className='w-full col-span-2'>
          <div>
            <Image
              src='/charles-grid-2.png'
              width={256}
              height={240}
              alt='charles-grid-2'
              className='object-scale-down'
            />
          </div>
          <div>
            <Image
              src='/charles-grid-3.png'
              width={123}
              height={115}
              alt='charles-grid-3'
              className='object-scale-down'
            />
            <Image
              src='/charles-grid-4.png'
              width={123}
              height={115}
              alt='charles-grid-4'
              className='object-fit'
            />
          </div>
        </div>
        <div className='w-full rounded col-span-1'></div>
        <div className='w-full '>
          <Image
            src='/charles-grid-5.png'
            width={256}
            height={240}
            alt='charles-grid-5'
            className='object-cover rounded-r-lg'
          />
        </div>
      </div>
    </div>
  );
}
