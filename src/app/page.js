'use client'
import React, { useState } from 'react';
import styles from './page.module.css'
import Nav from './components/Navigation';
import StartNewProject from './components/startNewProject';
import ProjectDetails from './components/projectDetails';
import CreateProject from './components/createProject';
import AllInfo from './components/allInfo';

const Home = () => {
  
  const [currentStep, setCurrentStep] = useState(1);

  const goToNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const goToPreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StartNewProject goToNextStep={goToNextStep} />;
      case 2:
        return <ProjectDetails goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} />;
      case 3:
        return <CreateProject goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} />;
      case 4:
        return <AllInfo goToPreviousStep={goToPreviousStep}/>
      default:
        return null;
    }
  };
  
    return (
      <main className={styles.main}>
          <div className={styles.navigation}>
            <Nav currentStep={currentStep}/>
            <div className={styles.circleVector}>
              <div className={styles.vector}></div>
            </div>
          </div>
          <div className={styles.content}>
            {renderStep()}
          </div>
      </main>
    )
};

export default Home
