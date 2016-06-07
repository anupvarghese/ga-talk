import React, { Component } from 'react';
import styles from './styles.css';

export default class Shoutbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shout: ''
    }
  }

  render() {
    const { shout } = this.state;
    const { newShout } = this.props;
    return (
      <div className={styles.shoutBar}>
        <input
          type="text"
          className={styles.shoutInput}
          placeholder="Shout something..."
          onChange={ e => this.setState({ shout: e.target.value })}
          value={shout}
        />
        <div
          className={styles.shoutButton}
          onClick={() => newShout(shout.toUpperCase())}
        >SHOUT!</div>
      </div>
    )
  }
}
