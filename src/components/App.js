import React from 'react';
import Home from './Home.js';
import Job from './Job.js';
import Social from './Social.js';
import jobs from '../data/jobs.json';
import styles from '../../dist/styles/general.css';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = { isWorkVisible: false, job: jobs.jobs[0] }
        this.showWork = this.showWork.bind(this);
        // this.fadeOut = this.fadeOut.bind(this);
        // this.transitionPages = this.transitionPages.bind(this);
    }
    updateCurrentJob(job) {
        this.setState({job: job});
    }
    showWork() {
        // console.log(jobs.jobs.indexOf(this.state.job));
        // console.log(jobs.jobs.length - 1);
        // const indexOfJob = jobs.jobs.indexOf(this.state.job);
        // console.log(jobs.jobs[indexOfJob + 1]);
        this.setState({isWorkVisible: true});
    }
    // transitionPages(pageOut, pageIn) {
    //     pageOut.classList.add("animateOut");
    //     setTimeout(() => {
    //         pageOut.classList.remove("animateOut");
    //         pageOut.classList.add("hidden");
    //     }, 500);
    //     pageIn.classList.add("animateIn");
    //     setTimeout(() => {
    //         pageOut.classList.remove("hidden");
    //         pageOut.classList.remove("animateIn");
    //     }, 500);
    // }
    checkCurrentJob() {
        const currentJob = jobs.jobs.indexOf(this.state.job);
        const jobLength = jobs.jobs.length - 1;
        const jobList = jobs.jobs;
        if (jobList - 2) {
            return true;
        }
    }
    render() {
        const jobList = jobs.jobs.map((job) =>
            <Job key={job.id} company={job.company} role={job.role} description={job.description} duration={job.duration} job={job} />
        );
        return (
            <div className={styles.full}>
                <Social/>
                <div className={`${styles.full} ${styles.pageContainer}`} style={{transform: `translateY(${this.state.isWorkVisible ? `${this.state.job.yPos}` : ""}`}}>
                    <Home showWork={this.showWork} isWorkVisible={this.state.isWorkVisible} transitionPages={this.transitionPages}/>
                    {jobList}
                </div>
            </div>
        )
    }
}