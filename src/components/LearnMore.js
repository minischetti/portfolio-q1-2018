import React from 'react';

export default class LearnMore extends React.Component {
    render() {
        return (
            <div className="learn-more-container" onClick={() => this.props.showWork()}>
                <span className="learn-more-button"></span>
                <span className="learn-more-text">Learn More About my Work</span>
            </div>
        )
    }
}