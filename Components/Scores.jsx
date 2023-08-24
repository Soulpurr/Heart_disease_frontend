import React from 'react';
import Tilt from 'react-parallax-tilt';
import Image from 'next/image'; // Import the next/image component

const cardData = [
  { imageSrc: '/corrr.png', text: ' Correlation matrix is a square matrix showing the correlation coefficients between two variables' },
  { imageSrc: '/feature.png', text: 'Feature Importance refers to techniques that calculate a score for all the input features for a given model — the scores simply represent the “importance” of each feature.' },
  { imageSrc: '/scores.png', text: 'We have used 5 models and here is the bar depicting scores of each model on a ascale of 0 to 1' },
  { imageSrc: '/reg_scors.png', text: 'We have tuned random forest regressor and calculates all its evaluation metrics and created a bar on a scale of 0 to 1' },
  { imageSrc: '/log_scores.png', text: 'We have tuned logistic regression and calculates all its evaluation metrics and created a bar on a scale of 0 to 1' },
];

function Scores() {
  return (
    <div className="">
        <h1 className='text-center text-4xl font-bold'>Some Insights</h1>
    <div className="flex flex-wrap justify-center items-center h-screen p-4">
      {cardData.map((card, index) => (
        <Tilt
          key={index}
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full m-4"
        >
          <div style={{ backgroundColor: '#100d24' }} className='p-[1rem]'>
            <Image
              src={card.imageSrc}
              alt={`Image ${index + 1}`}
              width={300}
              height={200}
              layout="responsive"
              className='rounded-xl'
            />
            <p className="text-center mt-2 text-white">{card.text}</p>
          </div>
        </Tilt>
      ))}
    </div>
    </div>
  );
}

export default Scores;
