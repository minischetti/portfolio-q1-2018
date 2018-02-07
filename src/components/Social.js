import React from 'react';
import social from '../data/social.json';
import styles from '../../dist/styles/social.css';

export default class Social extends React.Component {
    render() {
        const socialLinks = social.social.map((platform) =>
            <a className={styles.icon} key={platform.id} href={platform.link} alt={platform.alt}><img src={platform.icon}/></a>
        );
        return (
            <div className={styles.container}>
                {socialLinks}
            </div>
        )
    }
}