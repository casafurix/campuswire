import Image from "next/image";

export default function ImageGrid1() {
  return (
    <div>
      <div className='grid-cols-4 py-6'>
        <div className=''>
          <Image
            src='/charles-thumbnail.png'
            width={195}
            height={240}
            alt='charles-thumbnail'
            className='rounded-l-lg'
          />
          <Image
            src='/charles-grid-2.png'
            width={256}
            height={240}
            alt='charles-grid-2'
            className='object-cover gap-10'
          />
          {/* <div className='grid-cols-2'>
            <Image
              src='/charles-grid-3.png'
              width={123}
              height={115}
              alt='charles-grid-3'
              className='object-cover'
            />
            <Image
              src='/charles-grid-4.png'
              width={123}
              height={115}
              alt='charles-grid-4'
              className='object-cover'
            />
          </div> */}

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
