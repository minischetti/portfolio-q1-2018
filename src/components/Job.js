import React from 'react';
import jobs from '../data/jobs.json';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

export default class Job extends React.Component {
    constructor() {
        super();
        this.state = {animate: false}
    }
    componentWillReceiveProps() {
        this.setState({animate: true});
        setTimeout(() => {
            this.setState({animate: false});
        }, 1000);
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
                    <div>{this.state.animate}</div>
                    <div className="overflow-container">
                        <CSSTransition timeout={1000} classNames="slideUp" in={true} exit={this.state.animate} mountOnEnter={true} unmountOnExit={false} appear={true} key={this.props.job.id}>
                            <div className="company-name">{this.props.job.company}</div>
                        </CSSTransition>
                    </div>
                    <div className="overflow-container">
                        <CSSTransition timeout={1000} classNames="slideDown" in={true} exit={this.state.animate} mountOnEnter={true} unmountOnExit={false} appear={true} key={this.props.job.id}>
                            <div className="company-duration">{this.props.job.duration}</div>
                        </CSSTransition>
                    </div>
                </div>
                <div className="company-description">
                    <span className="company-pipe"></span>
                    <CSSTransition timeout={1000} classNames="slideRight" in={true} exit={this.state.animate} mountOnEnter={true} unmountOnExit={false} appear={true} key={this.props.job.id}>
                        <p>{this.props.job.description}</p>
                    </CSSTransition>

                </div>
            </div>
        )
    }
}