import Head from "next/head";
import Image from "next/image";
import FixedCard from "../components/FixedCard";
import ImageGrid from "../components/ImageGrid";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* <h2 className='text-black'>PSAI 101: Pre-Seed & Angel Investing Class</h2> */}
      <FixedCard />
    </div>
  );
}
