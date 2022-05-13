import FixedCard from "../components/FixedCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Layout from "./layout";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='flex-row flex'>
        <div className=''>
          <Layout />
        </div>
        <div className='float-right'>
          <FixedCard />
        </div>
      </div>
      <Footer />
    </>
  );
}
