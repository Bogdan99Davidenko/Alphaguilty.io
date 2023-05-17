
import styles from '../components/navigation.module.css';
import { useEffect, useState } from 'react';

const Nav = ({ currentStep }) => {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    setActiveStep(currentStep);
  }, [currentStep]);

  const isActive = (step) => {
    return step === activeStep;
  };

  const isCompleted = (step) => {
    return step < currentStep
  }

  const isCompletedDot = (step) => {
    return step < currentStep
  }

  const isLineActive = (step) => {
    return step <= activeStep - 1
  }

  return (
    <div className={styles.navContainer}>
      <div className={`${styles.step} ${isActive(1) ? styles.activeStep : isCompleted(1) ? styles.completedStep : styles.normalStep}`}>
        <div className={`${styles.step} ${isActive(1) ? styles.active_dot : isCompletedDot(1) ? styles.completedDot : styles.dot}`}></div>
        <p>Start first project</p>
      </div>
      <div className={`${styles.line} ${isLineActive(1) ? styles.activeLine : styles.normalLine}`} />
      <div className={`${styles.step} ${isActive(2) ? styles.activeStep : isCompleted(2) ? styles.completedStep : styles.normalStep}`}>
      <div className={`${styles.step} ${isActive(2) ? styles.active_dot : isCompletedDot(2) ? styles.completedDot : styles.dot}`}></div>
        <p>Project details</p>
      </div>
      <div className={`${styles.line} ${isLineActive(2) ? styles.activeLine : styles.normalLine}`} />
      <div className={`${styles.step} ${isActive(3) ? styles.activeStep : isCompleted(3) ? styles.completedStep : styles.normalStep}`}>
      <div className={`${styles.step} ${isActive(3) ? styles.active_dot : isCompletedDot(3) ? styles.completedDot : styles.dot}`}></div>
        <p>Create project</p>
      </div>
      
    </div>
  );
};

export default Nav;
