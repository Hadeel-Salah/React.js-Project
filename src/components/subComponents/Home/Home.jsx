import React from 'react';
import FirstSection from './firstSection/firstSection';
import SecondSection from './secondSection/secondSection'
import './home.css';
import ThirdSection from './thirdSection/thirdSection';
function Home(){
    return(
        <div className="Home">
           <FirstSection />
           <SecondSection />
           <ThirdSection />
        </div>
     )
}
export default Home;