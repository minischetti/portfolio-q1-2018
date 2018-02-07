import React from 'react';
import styles from '../../dist/styles/learnMore.css';

export default class LearnMore extends React.Component {
    render() {
        return (
            <div className={styles.container} onClick={() => this.props.showWork()}>
                <span className={styles.button}></span>
                <span className={styles.text}>Learn More About my Work</span>
            </div>
        )
    }
}