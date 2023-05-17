import React, { useState, useEffect } from 'react';
import styles from '../components/startNewProject.module.css';

export default function StartNewProject({ goToNextStep }) {
  const [projectName, setProjectName] = useState('');
  const [projectURL, setProjectURL] = useState('');
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    const savedProjectName = localStorage.getItem('projectName');
    const savedProjectURL = localStorage.getItem('projectURL');
    const savedActiveButton = localStorage.getItem('activeButton');

    if (savedProjectName) {
      setProjectName(savedProjectName);
    }
    if (savedProjectURL) {
      setProjectURL(savedProjectURL);
    }
    if (savedActiveButton) {
      setActiveButton(Number(savedActiveButton));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('projectName', projectName);
  }, [projectName]);

  useEffect(() => {
    localStorage.setItem('projectURL', projectURL);
  }, [projectURL]);

  useEffect(() => {
    localStorage.setItem('activeButton', activeButton);
  }, [activeButton]);

  const handleClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  const handleProjectNameChange = (event) => {
    setProjectName(event.target.value);
  };

  const handleProjectURLChange = (event) => {
    
    setProjectURL(event.target.value);
  };

  const handleAddProject = () => {
    goToNextStep(projectName, projectURL, activeButton);
  };

  const getButtonStyles = (buttonIndex) => {
    if (buttonIndex === activeButton) {
      return {
        cursor: 'pointer',
        border: 'none',
        padding: '6px 12px',
        gap: '4px',
        color: '#2B8CE5',
        background: 'rgba(33, 122, 255, 0.1)',
        borderRadius: '16px',
        fontFamily: 'Space Grotesk',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '20px',
      };
    }

    return {
      cursor: 'pointer',
      border: 'none',
      padding: '6px 12px',
      gap: '4px',
      background: 'rgba(250, 250, 250, 0.1)',
      borderRadius: '16px',
      fontFamily: 'Space Grotesk',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '20px',
    };
  };

  return (
    <div className={styles.container}>
      <p className={styles.p_header}>To Create Quest you need firstly create Project</p>
      <h1 className={styles.addNewProject}>Add New Project</h1>
      <div className={styles.projectName}>
        <label className={styles.label} htmlFor="projectName">Project Name (It can be changed later)</label>
        <input
          className={styles.input}
          type="text"
          id="projectName"
          value={projectName}
          onChange={handleProjectNameChange}
        />
      </div>
      <div className={styles.projectURL}>
        <label className={styles.label} htmlFor="projectURL">Project URL (It cannot be changed after creation)</label>
        <input
          className={styles.input}
          type="text"
          id="projectURL"
          value={projectURL}
          onChange={handleProjectURLChange}
          placeholder="Alphaguilty.io/"
        />
      </div>
      <div className={styles.projectCategory}>
          <div className={styles.category}><p>Project Category</p><p>(It cannot be changed after creation)</p></div>
        <div className={styles.projectCategories}>
          <button onClick={() => handleClick(0)} style={getButtonStyles(0)} className={styles.toggle_button}>NFT</button>
          <button onClick={() => handleClick(1)} style={getButtonStyles(1)} className={styles.toggle_button}>GameFi</button>
          <button onClick={() => handleClick(2)} style={getButtonStyles(2)} className={styles.toggle_button}>DeFi</button>
          <button onClick={() => handleClick(3)} style={getButtonStyles(3)} className={styles.toggle_button}>DAO</button>
          <button onClick={() => handleClick(4)} style={getButtonStyles(4)} className={styles.toggle_button}>SocialFi</button>
          <button onClick={() => handleClick(5)} style={getButtonStyles(5)} className={styles.toggle_button}>Metaverse</button>
          <button onClick={() => handleClick(6)} style={getButtonStyles(6)} className={styles.toggle_button}>Tools</button>
          <button onClick={() => handleClick(7)} style={getButtonStyles(7)} className={styles.toggle_button}>Ecosystem</button>
          <button onClick={() => handleClick(8)} style={getButtonStyles(8)} className={styles.toggle_button}>Others</button>
        </div>
      </div>

      <button className={styles.button_add} onClick={handleAddProject}>
        Add Project
      </button>
    </div>
  );
}


