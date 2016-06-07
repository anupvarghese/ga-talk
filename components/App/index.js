import React, { Component } from 'react';
import styles from './styles.css';
import Shoutbar from '../Shoutbar';
import Shout from '../Shout';
import ProfilePicture from '../ProfilePicture';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouts: [
        {
          user: {
            name: 'Phil',
            profilePicture: 'http://www.fillmurray.com/100/100'
          },
          isHearted: false,
          text: 'TODAY IS TOMORROW. IT HAPPENED!!!',
        },
        {
          user: {
            name: 'Phil',
            profilePicture: 'http://www.fillmurray.com/100/100'
          },
          isHearted: false,
          text: 'WELL, WHAT IF THERE IS NO TOMORROW?!!!',
        },
      ]
    }
  }

  addShout(text) {
    const { shouts } = this.state;

    this.setState({
      shouts: [...shouts, {
        user: {
          name: 'Phil',
          profilePicture: 'http://www.fillmurray.com/100/100'
        },
        isHearted: false,
        text
      }]
    });
  }

  heartShout(i) {
    const { shouts } = this.state;

    this.setState({
      shouts: shouts.reduce((newShouts, shout, j) => [
        ...newShouts,
        {
          ...shout,
          isHearted: i === j ? !shout.isHearted : shout.isHearted
        }
      ], [])
    });
  }

  render() {
    const { shouts } = this.state;
    return <div className={styles.app}>
      <ProfilePicture imageUrl='http://www.fillmurray.com/100/100' />
      <div className={styles.feed}>
        <Shoutbar newShout={shout => this.addShout(shout)}/>
        { shouts.map((shout, i) => (
          <Shout key={i} {...shout} heartShout={() => this.heartShout(i)} />
        )) }
      </div>
    </div>
  }
}
