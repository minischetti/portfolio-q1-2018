import React from 'react';
import jobs from '../data/jobs.json';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

export default class Job extends React.Component {
    constructor() {
        super();
    }
    render() {
        const isWorkVisible = this.props.isWorkVisible;
        return (
            <div className="job">
                {this.props.nextJob &&
                    <div className="company-switcher-next" onClick={() => this.props.updateCurrentJob(this.props.nextJob)}>
                        <div className="company-switcher-time">Currently</div>
                        <div className="company-switcher-name">{this.props.nextJob.company}</div>
                    </div>
                }
                {this.props.previousJob &&
                    <div className="company-switcher-previous" onClick={() => this.props.updateCurrentJob(this.props.previousJob)}>
                        <div className="company-switcher-time">Previously</div>
                        <div className="company-switcher-name">{this.props.previousJob.company}</div>
                    </div>
                }
                <div className="company-information">
                    <div className="overflow-container">
                        <TransitionGroup>
                            <CSSTransition timeout={{ enter: 1000, exit: 1000 }} classNames="fade" mountOnEnter={true} unmountOnExit={true} appear={true} in={true} key={this.props.job.id}>
                            <div className="company-name">{this.props.job.company}</div>
                        </CSSTransition>
                        </TransitionGroup>
                        {/* <Fade in={this.props.isWorkVisible}>
                        </Fade> */}
                    </div>
                    <div className="overflow-container">
                        <div className="company-duration">{this.props.job.duration}</div>
                    </div>
                </div>
                <div className="company-description">
                    <span className="company-pipe"></span>
                    <p>{this.props.job.description}</p>
                </div>
            </div>
        )
    }
}