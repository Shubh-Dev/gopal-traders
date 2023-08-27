import React from 'react';
import Showcase from './Showcase';
import HomeCTA from './HomeCTA';
import ctaItems from '../util/ctaitems';

const Home = () => {
  return (
    <div>
      <Showcase />
      {ctaItems.map((ctaItem, index) => (
        <HomeCTA
          key={index}
          image={ctaItem.image}
          description={ctaItem.description}
          title={ctaItem.title}
          buttonText={ctaItem.buttonText}
        />
      ))}
    </div>
  );
};

export default Home;
