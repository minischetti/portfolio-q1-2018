import React from 'react';
import styles from '../../dist/styles/home.css';

export default class Home extends React.Component {
    render() {
        return (
            <div className={styles.home}>
                <div className={styles.hero}>
                    <h1 className={styles.heroHeader}>I'm <span className={styles.accentColor}>Dom</span>, a <span className={styles.accentColor}>Front-end Engineer</span> in <span className={styles.accentColor}>California</span></h1>
                    <p>…and I love creating beautiful and functional interfaces, code to pixel.</p>
                </div>
                <LearnMore/>
            </div>
        )
    }
}

class LearnMore extends React.Component {
    render() {
        return (
            <div className={styles.learnMoreContainer}>
                <span className={styles.learnMoreButton}></span>
                <span className={styles.learnMoreText}>Learn More About my Work</span>
            </div>
        )
    }
}