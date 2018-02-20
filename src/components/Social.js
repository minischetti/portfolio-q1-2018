import React from 'react';
import social from '../data/social.json';

export default class Social extends React.Component {
    render() {
        const socialLinks = social.social.map((platform) =>
            <a className="social-icon" key={platform.id} href={platform.link} alt={platform.alt}><img src={platform.icon}/></a>
        );
        return (
            <div className="social-container">
                {socialLinks}
            </div>
        )
    }
}