import React, { Component } from 'react';
import styles from './styles.css';

export default class ProfilePicture extends Component {
  getPictureClassname() {
    const { isSmall } = this.props;

    if (isSmall) {
      return `${styles.profilePicture} ${styles.profilePictureSmall}`
    }

    return styles.profilePicture;
  }
  render() {
    const { imageUrl, isSmall } = this.props;

    return (
      <div className={this.getPictureClassname()}>
        <img src={imageUrl} alt=""/>
      </div>
    )
  }
}
