import React from 'react';
import LearnMore from './LearnMore.js';

export default class Home extends React.Component {
    render() {
        const isWorkVisible = this.props.isWorkVisible;
        return (
            <div className="home">
                <div class="container">
                    <div class="shape">
                        <div class="side">Dominic Minischetti</div>
                        <div class="side">Front-end Engineer</div>
                        <div class="side">Williams-Sonoma, Inc.</div>
                        <div class="side">California</div>
                    </div>
                </div>
                <LearnMore showWork={this.props.showWork}/>
            </div>
        )
    }
}