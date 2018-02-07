import React from 'react';
import styles from '../../dist/styles/job.css';
import jobs from '../data/jobs.json';

export default class Job extends React.Component {
    render() {
        const jobList = jobs.jobs.map((job) =>
            <Job key={job.id} company={job.company} role={job.role} description={job.description} duration={job.duration}/>
        );
        return (
            <div className={styles.page}>
                <div className={styles.information}>
                    <span className={styles.company}>{this.props.company}</span>
                    <span className={styles.duration}>{this.props.duration}</span>
                </div>
                <div className={styles.description}>
                    <span className={styles.pipe}></span>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}