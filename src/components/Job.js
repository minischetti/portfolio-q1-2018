import React from 'react';
import jobs from '../data/jobs.json';

export default class Job extends React.Component {
    constructor() {
        super();
        this.state = ({animate: false, animateIn: false, animateOut: false})
        // this.checkPreviousJob = this.checkPreviousJob.bind(this);
        // this.checkNextJob = this.checkNextJob.bind(this);
        // this.setPreviousJob = this.setPreviousJob.bind(this);
        // this.setNextJob = this.setNextJob.bind(this);
    }

    componentDidMount() {
        // this.setState({ previousJob: this.checkPreviousJob(), nextJob: this.checkNextJob() })
        // this.setState({animate: true}, () => {
        //     setTimeout(() => {
        //         this.setState({animate: false});
        //     }, 5000);
        // })
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps !== this.props) {
    //         this.setState({ previousJob: this.checkPreviousJob(), nextJob: this.checkNextJob() })
    //         // this.checkPreviousJob();
    //         // this.checkNextJob();
    //         // this.setState({ animate: true }, () => {
    //         //     setTimeout(() => {
    //         //         this.setState({ animate: false });
    //         //     }, 5000);
    //         // })
    //     }
    // }

    // setPreviousJob(previousJob) {
    //     this.setState({previousJob: previousJob});
    // }
    // setNextJob(nextJob) {
    //     this.setState({nextJob: nextJob});
    // }

    // checkPreviousJob() {
    //     const indexOfJob = jobs.jobs.indexOf(this.props.job);
    //     const previousJob = jobs.jobs[indexOfJob + 1];
    //     if (previousJob) {
    //         return previousJob;
    //     } else {
    //         return "";
    //     }
    // }

    // checkNextJob() {
    //     const indexOfJob = jobs.jobs.indexOf(this.props.job);
    //     const nextJob = jobs.jobs[indexOfJob - 1];
    //     if (nextJob) {
    //         return nextJob;
    //     } else {
    //         return "";
    //     }
    // }

    render() {
        const isWorkVisible = this.props.isWorkVisible;
        const jobList = jobs.jobs.map((job) =>
            <Job key={job.id} company={job.company} role={job.role} description={job.description} duration={job.duration}/>
        );
        return (
            <div className={`job${this.state.animate ? " hidden" : ""}`}>
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
                        <div className="company-name">{this.props.job.company}</div>
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