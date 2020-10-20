import React from 'react';
import FirstSection from './firstSection/firstSection';
import SecondSection from './secondSection/secondSection'
import './home.css';
function Home(){
    return(
        <div className="Home">
           <FirstSection />
           <SecondSection />
        </div>
     )
}
export default Home;