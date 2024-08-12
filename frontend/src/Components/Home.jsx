import React, { useEffect, useState } from 'react'
import DisplayBanner from './DisplayBanner';
import Navbar from './Navbar';
import Temp from './Temp';
import NotFound from './NotFound';

const Home = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [Mytimer, setMyTimer] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/").then(async function (res) {
          const data = await res.json();
          console.log(data);
          console.log(data[0].Timer);
          
          setMyTimer(data[0].Timer);
        });
      }, []);

    useEffect(() => {
        // Set a timer to hide the component after 5 seconds (5000 milliseconds)
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, Mytimer*10000);

        // Cleanup timer if the component unmounts
        return () => clearTimeout(timer);
    }, []);

  return (
    <>
     <Navbar />

     <div>
            {isVisible ? <DisplayBanner /> : <NotFound/>}
        </div>
      
      <Temp />
    </>
  )
}

export default Home