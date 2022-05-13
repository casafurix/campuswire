import Head from "next/head";
import Image from "next/image";
import CourseIntro from "../components/CourseIntro";
import FAQ from "../components/FAQ";
import FixedCard from "../components/FixedCard";
import Footer from "../components/Footer";
import GuestSpeakers from "../components/GuestSpeakers";
import Hero from "../components/Hero";
import HeroNav from "../components/HeroNav";
import ImageGrid from "../components/ImageGrid";
import MeetYourInstructor from "../components/MeetYourInstructor";
import MightLike from "../components/MightLike";
import Navbar from "../components/Navbar";
import Syllabus from "../components/Syllabus";
import TeachingAssistants from "../components/TeachingAssistants";

export default function Layout() {
  return (
    <div>
      <div
        className='pl-60 pr-10 pb-60
'
      >
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
        <MightLike />
        <br />
      </div>
    </div>
  );
}