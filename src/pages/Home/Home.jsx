import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import FlagshipProject from '../../components/FlagshipProject/FlagshipProject';
import GalleryPreview from '../../components/GalleryPreview/GalleryPreview';
import Amenities from '../../components/Amenities/Amenities';
import CtaBanner from '../../components/CtaBanner/CtaBanner';
import './Home.css';

const Home = () => {
  return (
    <main className="home-page">
      <Hero />
      <About />
      <FlagshipProject />
      <GalleryPreview />
      <Amenities />
      <CtaBanner />
    </main>
  );
};

export default Home;
