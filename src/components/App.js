import React from 'react';
import Home from './Home.js';
import Job from './Job.js';
import Social from './Social.js';
import jobs from '../data/jobs.json';
import styles from '../../dist/styles/general.css';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = { currentPage: "" }
    }
    updateCurrentPage(page) {
        this.setState({currentPage: page});
    }
    render() {
        const jobList = jobs.jobs.map((job) =>
            <Job key={job.id} company={job.company} role={job.role} description={job.description} duration={job.duration}/>
        );
        return (
            <div className={styles.full}>
                <Home updateCurrentPage={this.updateCurrentPage}/>
                <Social/>
                {jobList}
            </div>
        )
    }
}