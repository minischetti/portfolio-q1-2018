import React from 'react';
import jobs from '../data/jobs.json';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

export default class Job extends React.Component {
    constructor() {
        super();
        this.state = { animate: false };
    }

    updateCurrentJob(job) {
        this.setState({ animate: true });
        setTimeout(() => {
            this.setState({ animate: false });
            this.props.updateCurrentJob(job);
        }, 1000);
    }

    render() {
        return (
            <div className={`job page${this.state.animate ? " animate" : ""}`}>
                {this.props.nextJob &&
                    <div className={`company-switcher-next`} onClick={() => this.updateCurrentJob(this.props.nextJob)}>
                        <div className="company-switcher-time">Currently</div>
                        <div className="company-switcher-name">{this.props.nextJob.company}</div>
                    </div>
                }
                {this.props.previousJob &&
                    <div className="company-switcher-previous" onClick={() => this.updateCurrentJob(this.props.previousJob)}>
                        <div className="company-switcher-time">Previously</div>
                        <div className="company-switcher-name">{this.props.previousJob.company}</div>
                    </div>
                }
                <div className="company-information">
                    <div>{this.state.animate}</div>
                    <div className="overflow-container">
                            <div className="company-name">{this.props.job.company}</div>
                    </div>
                    <div className="overflow-container">
                            <div className="company-duration">{this.props.job.duration}</div>
                    </div>
                </div>
                <div className="company-description">
                    {/* <span className="company-pipe"></span> */}
                        <p>{this.props.job.description}</p>
                </div>
            </div>
        )
    }
}