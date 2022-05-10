import Head from "next/head";
import Image from "next/image";
import CourseIntro from "../components/CourseIntro";
import FixedCard from "../components/FixedCard";
import Hero from "../components/Hero";
import HeroNav from "../components/HeroNav";
import ImageGrid from "../components/ImageGrid";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <FixedCard />
      <div className='pl-60 pr-60 pb-60'>
        <Hero />
        <HeroNav />
        <CourseIntro />
      </div>
    </div>
  );
}
