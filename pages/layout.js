import CourseIntro from "../components/CourseIntro";
import FAQ from "../components/FAQ";
import GuestSpeakers from "../components/GuestSpeakers";
import Hero from "../components/Hero";
import HeroNav from "../components/HeroNav";
import ImageGrid from "../components/ImageGrid";
import ImageGrid1 from "../components/ImageGrid1";
import MeetYourInstructor from "../components/MeetYourInstructor";
import MightLike from "../components/MightLike";
import MightLike1 from "../components/MightLike1";
import Syllabus from "../components/Syllabus";
import TeachingAssistants from "../components/TeachingAssistants";

export default function Layout() {
  return (
    <div>
      <div
        className='pl-60 pr-0 pb-60
'
      >
        {/* <ImageGrid /> */}
        <ImageGrid1 />
        <Hero />
        <HeroNav />
        <br />
        <CourseIntro />
        <br />
        <Syllabus />
        <br />
        <MeetYourInstructor />
        <br />
        <TeachingAssistants />
        <br />
        <GuestSpeakers />
        <br />
        <FAQ />
        <br />
        <br />
        <hr />
        <br />
        <br />

        <MightLike1 />
      </div>
    </div>
  );
}
