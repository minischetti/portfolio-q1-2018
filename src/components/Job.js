import React from 'react';
import jobs from '../data/jobs.json';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

export default class Job extends React.Component {
    constructor() {
        super();
        this.state = { animate: true };
    }

    updateCurrentJob(job) {
        this.setState({ animate: false });
        setTimeout(() => {
            this.setState({ animate: true });
            this.props.updateCurrentJob(job);
        }, 1000);
    }

    render() {
        const isWorkVisible = this.props.isWorkVisible;
        return (
            <div className="job">
                {this.props.nextJob &&
                    <CSSTransition timeout={1000} classNames="switcherSlideDown" in={this.state.animate} exit={!this.state.animate} mountOnEnter={true} unmountOnExit={true} appear={true} key={this.props.job.id}>
                        {/* <p>{this.props.job.description}</p> */}
                        <div className={`company-switcher-next`} onClick={() => this.updateCurrentJob(this.props.nextJob)}>
                            <div className="company-switcher-time">Currently</div>
                            <div className="company-switcher-name">{this.props.nextJob.company}</div>
                        </div>
                    </CSSTransition>
                }
                {this.props.previousJob &&
                    <CSSTransition timeout={1000} classNames="switcherSlideUp" in={this.state.animate} exit={!this.state.animate} mountOnEnter={false} unmountOnExit={false} appear={true} key={this.props.job.id}>
                        {/* <p>{this.props.job.description}</p> */}
                        <div className="company-switcher-previous" onClick={() => this.updateCurrentJob(this.props.previousJob)}>
                            <div className="company-switcher-time">Previously</div>
                            <div className="company-switcher-name">{this.props.previousJob.company}</div>
                        </div>
                    </CSSTransition>
                }
                <div className="company-information">
                    <div>{this.state.animate}</div>
                    <div className="overflow-container">
                        <CSSTransition timeout={1000} classNames="slideUp" in={this.state.animate} exit={!this.state.animate} mountOnEnter={false} unmountOnExit={false} appear={true} key={this.props.job.id}>
                            <div className="company-name">{this.props.job.company}</div>
                        </CSSTransition>
                    </div>
                    <div className="overflow-container">
                        <CSSTransition timeout={1000} classNames="slideDown" in={this.state.animate} exit={!this.state.animate} mountOnEnter={false} unmountOnExit={false} appear={true} key={this.props.job.id}>
                            <div className="company-duration">{this.props.job.duration}</div>
                        </CSSTransition>
                    </div>
                </div>
                <div className="company-description">
                    <span className="company-pipe"></span>
                    <CSSTransition timeout={1000} classNames="fadeIn" in={this.state.animate} exit={!this.state.animate} mountOnEnter={false} unmountOnExit={false} appear={true} key={this.props.job.id}>
                        <p>{this.props.job.description}</p>
                    </CSSTransition>

                </div>
            </div>
        )
    }
}