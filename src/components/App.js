import React from 'react';
import Home from './Home.js';
import Job from './Job.js';
import Social from './Social.js';
import jobs from '../data/jobs.json';
import styles from '../../dist/styles/general.css';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = { showWork: false, job: jobs.jobs[0] }
        this.showWork = this.showWork.bind(this);
        this.fadeOut = this.fadeOut.bind(this);
    }
    updateCurrentJob(job) {
        this.setState({job: job});
    }
    showWork() {
        setTimeout(function() {
            this.fadeOut(document.querySelector(".full"));
        }, 1000);
        this.setState({showWork: true});
    }
    fadeOut(element) {
        element.classList.add("fadeOut");
    }
    render() {
        return (
            <div className={styles.full}>
                <Social/>
                {!this.state.showWork && <Home showWork={this.showWork}/> }
                {this.state.showWork && <Job key={this.state.job.id} company={this.state.job.company} role={this.state.job.role} description={this.state.job.description} duration={this.state.job.duration} /> }
            </div>
        )
    }
}