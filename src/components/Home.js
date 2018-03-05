import React from 'react';
import CircleType from 'circletype';

export default class Home extends React.Component {
    componentDidMount() {
        const circle = new CircleType(document.getElementById('cta'));
        circle.forceWidth(true);
        document.querySelector(".circle").querySelectorAll("span").forEach((character) => {
            if (character === "|") {
                console.log(character);
            }
        })

    }
    render() {
        const isWorkVisible = this.props.isWorkVisible;
        return (
            <div className="home">
                <div id="cta" className="circle">DOMINIC MINISCHETTI&nbsp;&nbsp;&nbsp;&nbsp;FRONT-END ENGINEER&nbsp;&nbsp;&nbsp;&nbsp;WILLIAMS-SONOMA, INC.&nbsp;&nbsp;&nbsp;&nbsp;CALIFORNIA&nbsp;&nbsp;&nbsp;&nbsp;&zwnj;</div>
            </div>
        )
    }
}