import React from 'react';
import FirstSection from './firstSection/firstSection';
import SecondSection from './secondSection/secondSection'
import './home.css';
import ThirdSection from './thirdSection/thirdSection';
import FourthSection from './FourthSection/fourthSection';
function Home(){
    return(
        <div className="Home">
           <FirstSection />
           <SecondSection />
           <ThirdSection />
           <FourthSection />
        </div>
     )
}
export default Home;