import Image from "next/image";

export default function MeetYourInstructor() {
  return (
    <div className=''>
      <h1 className='text-xl font-black'>Meet your instructor</h1>
      <div className='py-4 float-left'>
        <Image
          src='/1603387325878.png'
          width={300}
          height={300}
          alt='pfp'
          className='py-5 rounded-lg'
        />
      </div>

      <div className='float-left mt-64 px-3 h-20'></div>
      <div>
        <p className='relative tracking-wider mt-3'>
          Charles Hudson is the Managing Partner at Precursor Ventures, a
          classic seed stage investment firm based out of San Francisco, CA, and
          a Stanford University Lecturer. Precursor seeks to invest in a
          company&#39;s first round of institutional investment and focuses on
          investments in B2B, B2C software and services, and connected hardware.
        </p>
        <br />
        <p className='tracking-wider'>
          Prior to launching Precursor, Charles Hudson was a Partner with
          SoftTech VC, one of the most active seed stage investors in Internet
          and mobile startups. He focused on identifying investment
          opportunities in mobile infrastructure, mobile applications, and
          marketplaces. He was also the Co-Founder and CEO of Bionic Panda
          Games, an Android-focused mobile games startup.
        </p>
        <br />
        <p className='tracking-wider'>
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
  );
}
