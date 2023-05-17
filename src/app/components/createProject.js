import React, { useState, useEffect } from 'react';

import styles from '../components/createProject.module.css';


export default function CreateProject({ goToNextStep, goToPreviousStep }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [workerCount, setWorkerCount] = useState(1);

  const handleIncrement = () => {
    setWorkerCount(workerCount + 1);
  };

  const handleDecrement = () => {
    if (workerCount > 0) {
      setWorkerCount(workerCount - 1);
    }
  };

  const [contactEmail, setContactEmail] = useState('');

  const handleEmailChange = (event) => {
    setContactEmail(event.target.value);
  };

  useEffect(() => {
    const savedWorkerCount = localStorage.getItem('workerCount');
    if (savedWorkerCount) {
      setWorkerCount(parseInt(savedWorkerCount, 10));
    }

    const savedSelectedOption = localStorage.getItem('selectedOption');
    if (savedSelectedOption) {
      setSelectedOption(savedSelectedOption);
    }

    const savedContactEmail = localStorage.getItem('contactEmail');
    if (savedContactEmail) {
      setContactEmail(savedContactEmail);
    }
  }, []);

 
  useEffect(() => {
    localStorage.setItem('workerCount', workerCount.toString());
  }, [workerCount]);

  useEffect(() => {
    localStorage.setItem('selectedOption', selectedOption);
  }, [selectedOption]);

  useEffect(() => {
    localStorage.setItem('contactEmail', contactEmail);
  }, [contactEmail]);

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.p_header}>Create Project</p>
        <h1 className={styles.header_text}>How many full-time workers on the project?</h1>
        <div className={styles.workers_buttons}>
          <button onClick={handleDecrement}>-</button>
          <input type="text" value={workerCount} onChange={() => {}}></input>
          <button onClick={handleIncrement}>+</button>
        </div>
        <div className={styles.product}>
          <p className={styles.product_launch}>Are you pre or post product launch?</p>
          <div className={styles.labels}>
            <label className={styles.label}>
              <input
                className={styles.radio_button}
                type="radio"
                name="radioGroup"
                value="option1"
                checked={selectedOption === 'option1'}
                onChange={handleOptionChange}
              />
              Pre Product
            </label>
            <label className={styles.label}>
              <input
                className={styles.radio_button}
                type="radio"
                name="radioGroup"
                value="option2"
                checked={selectedOption === 'option2'}
                onChange={handleOptionChange}
              />
              Post Product
            </label>
          </div>
          <p className={styles.email}>Contact Email</p>
          <input
            className={styles.input}
            type="email"
            id="email_input"
            value={contactEmail}
            onChange={handleEmailChange}
      />
    </div>
  </div>
  <div className={styles.bottom_buttons}>
    <button className={styles.button_back} onClick={goToPreviousStep}>
      Back
    </button>
    <button onClick={goToNextStep} className={styles.button_create}>
      Create Project
    </button>
  </div>
</div>
);
}