import FixedCard from "../components/FixedCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Layout from "./layout";

export default function Home() {
  return (
    <div className='p-8'>
      <Navbar />
      <div className='flex-row flex'>
        <div className=''>
          <Layout />
        </div>
        <div className=''>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          {/* <FixedCard /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
