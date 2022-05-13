import Image from "next/image";

export default function MeetYourInstructor() {
  return (
    <div>
      <h1 className='text-xl font-black'>Meet your instructor</h1>
      <div className='py-4 tracking-wide'>
        {/* <Image
          src='/1603387325878.png'
          width={300}
          height={300}
          alt='profile-pic'
          className='rounded-lg float-left'
        /> */}
        <img
          src='/1603387325878.png'
          width={300}
          height={300}
          alt='profile-pic'
          className='float-left rounded-lg'
        />
        <div className='px-10'>
          <p className=''>
            Charles Hudson is the Managing Partner at Precursor Ventures, a
            classic seed stage investment firm based out of San Francisco, CA,
            and a Stanford University Lecturer. Precursor seeks to invest in a
            company&#39;s first round of institutional investment and focuses on
            investments in B2B, B2C software and services, and connected
            hardware.
          </p>

          <p className='p-2'>
            Prior to launching Precursor, Charles Hudson was a Partner with
            SoftTech VC, one of the most active seed stage investors in Internet
            and mobile startups. He focused on identifying investment
            opportunities in mobile infrastructure, mobile applications, and
            marketplaces. He was also the Co-Founder and CEO of Bionic Panda
            Games, an Android-focused mobile games startup.
          </p>

          <p className='p-2'>
            Charles also spent several years working at In-Q-Tel, the strategic
            venture capital group for the Central Intelligence Agency. While at
            In-Q-Tel, he focused on identifying investment opportunities that
            could deliver significant value to the CIA and the commercial market
            in both the short and long term. He holds an MBA from the Stanford
            Graduate School of Business and a B.A. in Economics and Spanish from
            Stanford University.
          </p>
        </div>
      </div>
    </div>
  );
}
