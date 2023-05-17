import React, { useState, useEffect } from 'react';
import styles from '../components/allInfo.module.css';


export default function AllInfo({goToPreviousStep }) {
    const savedProjectName = localStorage.getItem('projectName');
    const savedProjectURL = localStorage.getItem('projectURL');
    const savedActiveButton = localStorage.getItem('activeButton');
    const workerCount = localStorage.getItem('workerCount');
    const selectedOption = localStorage.getItem('selectedOption');
    const contactEmail = localStorage.getItem('contactEmail');
    const savedSelectedOption = localStorage.getItem('selectedOption1')

    const projectCategory = (selectedCategory) => {
        switch(selectedCategory) {
            case '0' :
                return 'NFT'
                break;
            case '1' :
                return 'GameFi'
                break;
            case '2' :
                return 'DeFi'
                break;
            case '3' :
                return 'DAO'
                break;
            case '4' :
                return 'SocialFi'
                break;
            case '5' :
                return 'Metaverse'
                break;
            case '6' :
                return 'Tools'
                break;
            case '7' :
                return 'Ecosystem'
                break;
            case '8' :
                return 'Others'
                break;
            default: 
                return 'none'
                break;
        }
    };

    const mainGoal = (selectedOption) => {
        switch(selectedOption) {
            case 'option1':
                return 'Grow My Community'
                break;
            case 'option2':
                return 'Activate Existing Members'
                break;
            case 'option3':
                return 'Understand My Members'
                break;
            case 'option4':
                return 'Other'
                break;
            default:
                return 'none'
        }
    }

    const product = (selectedProduct) => {
        switch(selectedProduct) {
            case 'option1':
                return 'Pre Product'
                break;
            case 'option2':
                return 'Post Product'
                break;
        }
    }

return (
    <div className={styles.allDataContainer}>
        <h1 className={styles.header}>All data of your project</h1>
        
        <p><span>Project name:</span>{savedProjectName}</p>
        <p><span>ProjectUrl: </span>{savedProjectURL}</p>
        <p><span>Project Category: </span>{projectCategory(savedActiveButton)}</p>
        <p><span>Main goal with AlphaQuest: </span>{mainGoal(savedSelectedOption)}</p>
        <p><span>Full-time workers on the project: </span>{workerCount}</p>
        <p><span>Pre or post product launch: </span>{product(selectedOption)}</p>
        <p><span>Contact Email: </span>{contactEmail}</p>
        <div className={styles.buttonsBlock}>
        <button className={styles.button_back} onClick={goToPreviousStep}>
            Back
        </button>
        <button className={styles.button_confirm} >
            Confirm
        </button>
        </div>
        
    </div>
)
}