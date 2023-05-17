import React, { useState, useEffect } from 'react';
import styles from '../components/projectDetails.module.css';

export default function ProjectDetails({ goToNextStep, goToPreviousStep }) {
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    const savedSelectedOption = localStorage.getItem('selectedOption1');
    if (savedSelectedOption) {
      setSelectedOption(savedSelectedOption);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedOption1', selectedOption);
  }, [selectedOption]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={styles.container}>
      <p className={styles.p_header}>Project Details</p>
      <h1 className={styles.header_text}>What is your main goal with AlphaQuest?</h1>
      <div className={styles.radio_group}>
        <label className={styles.label}>
          <input
            className={styles.radio_button}
            type="radio"
            name="radioGroup"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={handleOptionChange}
          />
          Grow My Community
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
          Activate Existing Members
        </label>
        <label className={styles.label}>
          <input
            className={styles.radio_button}
            type="radio"
            name="radioGroup"
            value="option3"
            checked={selectedOption === 'option3'}
            onChange={handleOptionChange}
          />
          Understand My Members
        </label>
        <label className={styles.label}>
          <input
            className={styles.radio_button}
            type="radio"
            name="radioGroup"
            value="option4"
            checked={selectedOption === 'option4'}
            onChange={handleOptionChange}
          />
          Other
        </label>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button_back} onClick={goToPreviousStep}>
          Back
        </button>
        <button className={styles.button_continue} onClick={goToNextStep}>
          Continue
        </button>
      </div>
    </div>
  );
}
