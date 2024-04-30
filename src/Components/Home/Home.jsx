import { useEffect, useState } from "react";
import Hero from '../Hero/Hero';
import Background from '../Background/Background';

const Home = () => {
  const heroData = [
    { text1: "Drive into", text2: "what you love" },
    { text1: "Build it", text2: "Better" },
    { text1: "Give in to", text2: "your passions" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playstatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 3000);


    return () => clearInterval(interval);
  }, []); 

  return (
    <div id="home">
     
      <Background playstatus={playstatus} heroCount={heroCount} />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playstatus={playstatus}
      />
    </div>
  );
};

export default Home;
