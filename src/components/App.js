import React from 'react';
import Home from './Home.js';
import Job from './Job.js';
import Social from './Social.js';
import jobs from '../data/jobs.json';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = { showWork: false, job: jobs.jobs[0], previousJob: "", nextJob: "" }
        this.showWork = this.showWork.bind(this);
        this.updateCurrentJob = this.updateCurrentJob.bind(this);
        this.checkPreviousJob = this.checkPreviousJob.bind(this);
        this.checkNextJob = this.checkNextJob.bind(this);
    }

    componentDidMount() {
        this.checkPreviousJob();
        this.checkNextJob();
    }

    updateCurrentJob(job) {
        this.setState({job: job}, () => {
            this.checkPreviousJob();
            this.checkNextJob();
        });
    }

    showWork() {
        this.setState({showWork: !this.state.showWork});
    }

    checkPreviousJob() {
        const indexOfJob = jobs.jobs.indexOf(this.state.job);
        const previousJob = jobs.jobs[indexOfJob + 1];
        if (previousJob) {
            this.setState({previousJob: previousJob});
        } else {
            this.setState({previousJob: ""});
        }
    }
    
    checkNextJob() {
        const indexOfJob = jobs.jobs.indexOf(this.state.job);
        const nextJob = jobs.jobs[indexOfJob - 1];
        if (nextJob) {
            this.setState({nextJob: nextJob});
        } else {
            this.setState({nextJob: ""});
        }
    }

    render() {
        return (
            <div className="wrap">
                <Social/>
                <div className="page-container" style={{transform: `translateX(${this.state.showWork ? `-100%` : "0"}`}}>
                    <Home transitionPages={this.transitionPages}/>
                    <Job job={this.state.job} previousJob={this.state.previousJob} nextJob={this.state.nextJob} updateCurrentJob={this.updateCurrentJob} checkNextJob={this.checkNextJob} checkPreviousJob={this.checkPreviousJob}/>
                    <img src="../dist/assets/arrow.svg" onClick={this.showWork} className={`page-switcher${this.state.showWork ? ` active` : ""}`}></img>
                </div>
                <a href="/resume.pdf" className="resume">Resume</a>
            </div>
        )
    }
}