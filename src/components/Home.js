import React from 'react';
import styles from '../../dist/styles/home.css';
import LearnMore from './LearnMore.js';

export default class Home extends React.Component {
    render() {
        const isWorkVisible = this.props.isWorkVisible;
        return (
            <div className={`${styles.home}${isWorkVisible ? ` ${styles.hidden}` : ""}`}>
                <div className={styles.hero}>
                    <h1 className={styles.header}>I'm <span className={styles.accentColor}>Dom</span>, a <span className={styles.accentColor}>Front-end Engineer</span> in <span className={styles.accentColor}>California</span></h1>
                    <p className={styles.subHeader}>…and I love creating beautiful and functional interfaces, code to pixel.</p>
                </div>
                <LearnMore showWork={this.props.showWork}/>
            </div>
        )
    }
}