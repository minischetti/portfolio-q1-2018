import React from 'react';
import styles from '../../dist/styles/job.css';
import jobs from '../data/jobs.json';

export default class Job extends React.Component {
    constructor() {
        super();
        this.state = ({previousJob: "", nextJob: ""})
        this.checkPreviousJob = this.checkPreviousJob.bind(this);
        this.checkNextJob = this.checkNextJob.bind(this);
    }
    componentDidMount() {
        this.checkPreviousJob();
        this.checkNextJob();
    }
    checkPreviousJob() {
        const indexOfJob = jobs.jobs.indexOf(this.props.job);
        const previousJob = jobs.jobs[indexOfJob + 1];
        if (previousJob) {
            this.setState({previousJob: previousJob});
        }
    }
    checkNextJob() {
        const indexOfJob = jobs.jobs.indexOf(this.props.job);
        const nextJob = jobs.jobs[indexOfJob - 1];
        if (nextJob) {
            this.setState({nextJob: nextJob});
        }
    }
    render() {
        const isWorkVisible = this.props.isWorkVisible;
        const jobList = jobs.jobs.map((job) =>
            <Job key={job.id} company={job.company} role={job.role} description={job.description} duration={job.duration}/>
        );
        return (
            <div className={`${styles.page} job`}>
                {this.state.nextJob &&
                <div className={styles.switcherNext}>
                    <div className={styles.switcherTime}>Currently</div>
                    <div className={styles.switcherCompany}>{this.state.nextJob.company}</div>
                </div>
                }
                {this.state.previousJob &&
                <div className={styles.switcherPrevious}>
                    <div className={styles.switcherTime}>Previously</div>
                    <div className={styles.switcherCompany}>{this.state.previousJob.company}</div>
                </div>
                }
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