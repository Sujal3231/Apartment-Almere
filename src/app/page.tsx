
import Header from "./assets/components/Header";
import Hero from "./assets/components/Hero";
import Overview from "./assets/components/Overview";
import Apartment from "./assets/components/Apartment";
import Services from "./assets/components/Services";
import Amenities from "./assets/components/Amenities";
import Location from "./assets/components/Location";
import Contact from './assets/components/Contact';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />  
        <Overview />
        <Apartment/>
        <Services/>
        <Amenities/>
        <Location/>
        <Contact/>
      </main>
    </div>
  );
}

