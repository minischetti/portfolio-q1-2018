import React from 'react';
import LearnMore from './LearnMore.js';

export default class Home extends React.Component {
    render() {
        const isWorkVisible = this.props.isWorkVisible;
        return (
            <div className="home page">
                <div className="container">
                    <div className="shape">
                        <div className="side">Dominic Minischetti</div>
                        <div className="side">Front-end Engineer</div>
                        <div className="side">Williams-Sonoma, Inc.</div>
                        <div className="side">California</div>
                    </div>
                </div>
                {/* <LearnMore showWork={this.props.showWork}/> */}
            </div>
        )
    }
}