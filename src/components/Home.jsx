import React from 'react';
import Showcase from './Showcase';
import HomeCTA from './HomeCTA';
import FooterTop from './FooterTop';
import ctaItems from '../util/ctaitems';

const Home = () => {
  return (
    <div>
      <Showcase />
      <div>
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
      <div>
        <FooterTop />
      </div>
    </div>
  );
};

export default Home;
