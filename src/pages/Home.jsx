import Aroma from '../components/Aroma';
import Ctasecc from '../components/Ctasecc';
import Hero from '../components/Hero';
import Story from '../components/Story';
import Urun from '../components/Urun';
import Mainlayout from '../layout/Mainlayout';
import '../styles/main.css';
import '../styles/media.css';

const Home = () => {
  return (
    <>
        <Mainlayout>
          <Hero />
          <Story />
          <Aroma />
          <Urun />
          <Ctasecc />
        </Mainlayout>
    </>
  );
}

export default Home;