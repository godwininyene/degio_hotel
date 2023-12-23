import React from 'react'
import {Outlet} from 'react-router-dom';
import bannerBg from '../assets/exec_1.jpg'
import bg2 from '../assets/slider-1.jpg'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import AOS from "aos";
import 'aos/dist/aos.css';

const BaseLayout = ({banner}) => {
    React.useEffect(()=>{AOS.init();})
  return (
    <div>
     {/*Navigation and Banner Start */}
      <section className={`bg-no-repeat bg-cover bg-center-top`} style={{backgroundImage: `linear-gradient(to right, rgba(0,0,0, 0.7) 8%, transparent 100%),url(${bg2})`}}>
        <div className={` text-primary`}>
          <Navigation />
          {banner && (<div>
            {banner}
          </div>)}
        </div>
      </section>
      {/* Navigation and Banner End */}

      {/* Main Content Start */}
      <main className={``}>
      <Outlet />
      </main>
      {/* Main Content End */}

      {/* Footer Start */}
      <section>
        <Footer />
      </section>
      {/* Footer End */}
    </div>
  )
}

export default BaseLayout