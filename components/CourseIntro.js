export default function CourseIntro() {
  return (
    <div className=''>
      <div>
        <h2 className='text-xl font-black'>About this course</h2>
      </div>
      <br />
      <div className='tracking-wide w-100 text-gray-800'>
        <p>
          The Pre-Seed and Angel Investing Masterclass is a 4-week course
          designed to equip angel investors and aspiring venture capitalists
          with both the <strong>hard and soft skills</strong> and
          <strong> professional networks</strong> required to identify, evaluate
          and invest in the startups building the future.
        </p>
        <br />
        <p>
          This course is offered live with <strong>one weekly lecture </strong>
          with industry-leading guest speakers and
          <strong> one weekly seminar</strong> during which students will engage
          in lively discussions around course content.
        </p>
        <br />
        <p>Examples of the issues that we will cover are:</p>
        <ul className='list-disc p-8 py-4'>
          <li className='py-1'>Building elite deal flow pipeline</li>
          <li className='py-1'>Recognizing exceptional founders</li>
          <li className='py-1'>Investing in diverse founders</li>
          <li className='py-1'>Questions top investors ask founders</li>
          <li className='py-1'>Building conviction with little data</li>
          <li className='py-1'>Negotiating investment terms</li>
          <li className='py-1'>Conducting due diligence</li>
        </ul>
      </div>
    </div>
  );
}
