import './App.css'
import "@fontsource/inter";
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";
import SectionIntro from './component/SectionIntro'
import Section2 from './component/Section2';
import Section3 from './component/Section3';
import FullStack from './component/FullStack';
import Section4 from './component/Section4';
import Section5 from './component/Section5';
import Section6 from './component/Section6';
import Section7 from './component/Section7';
import Aboutus from './component/Aboutus';


function App() {

  return (
    <div>
      <SectionIntro/>
      <Section2/>
      <FullStack/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Aboutus/>
    </div>  
  )
}

export default App
