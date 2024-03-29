import React from 'react';
import './styles.scss';

// images
import yoga from './media/yogalady.svg';

// our component
const SectionBestLife = () => {
  return (
    <div className="bg-light pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={yoga} className="img-fluid" alt="Yoga Lady" />
          </div>
          <div className="col-md-8">
            <div className="mt-5">
              <h1 className="slab">
                Keep living your <span className="text-primary">best</span> life
              </h1>
              <p className="circular">
                Everyone deserves a chance to do what they love. Next by Pacific
                Life helps you reach financial goals while you go after your
                personal ones...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBestLife;
