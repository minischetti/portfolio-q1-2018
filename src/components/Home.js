import React from 'react';
import LearnMore from './LearnMore.js';

export default class Home extends React.Component {
    render() {
        const isWorkVisible = this.props.isWorkVisible;
        return (
            <div className="home">
                <div className="hero">
                    <h1 className="header">I'm <span className="accent-color">Dom</span>, a <span className="accent-color">Front-end Engineer</span> in <span className="accent-color">California</span></h1>
                    <p className="sub-header">…and I love creating beautiful and functional interfaces, code to pixel.</p>
                </div>
                <LearnMore showWork={this.props.showWork}/>
            </div>
        )
    }
}