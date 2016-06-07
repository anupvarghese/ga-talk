import React, { Component } from 'react';
import styles from './styles.css';
import ProfilePicture from '../ProfilePicture';

export default class Shout extends Component {
  getHeartClassName() {
    const { isHearted } = this.props;

    if (isHearted) {
      return `${styles.shoutHeart} ${styles.shoutHeartSelected}`;
    }

    return styles.shoutHeart;
  }

  render() {
    const {
      user: { name, profilePicture },
      text, isHearted, heartShout
    } = this.props;
    return (
      <div className={styles.shout}>
        <ProfilePicture isSmall={true} imageUrl={profilePicture} />
        <div className={styles.shoutBody}>
          <div className={styles.username}>{ name }</div>
          <div className={styles.shoutText}>{ text }!!!</div>
          <div className={styles.shoutActions}>
            <span
              className={this.getHeartClassName()}
              onClick={heartShout}
            >
              { isHearted ? '♥' : '♡' }
            </span>
            <span className={styles.shoutComment}>comment</span>
          </div>
        </div>
      </div>
    )
  }
}
