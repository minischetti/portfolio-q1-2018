import React from 'react';
import Home from './Home.js';
import Job from './Job.js';
import Social from './Social.js';
import jobs from '../data/jobs.json';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = { isWorkVisible: false, job: jobs.jobs[0] }
        this.showWork = this.showWork.bind(this);
    }
    updateCurrentJob(job) {
        this.setState({job: job});
    }
    showWork() {
        this.setState({isWorkVisible: true});
    }
    render() {
        return (
            <div className="full">
                <Social/>
                <div className="full" style={{transform: `translateY(${this.state.isWorkVisible ? `${this.state.job.yPos}` : ""}`}}>
                    <Home showWork={this.showWork} isWorkVisible={this.state.isWorkVisible} transitionPages={this.transitionPages}/>
                    <Job job={this.state.job}/>
                </div>
            </div>
        )
    }
}