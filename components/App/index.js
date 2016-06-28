import React, { Component } from 'react';
import styles from './styles.css';
import Shoutbar from '../Shoutbar';
import Shout from '../Shout';
import ProfilePicture from '../ProfilePicture';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { shouts } = this.props;
    return <div className={styles.app}>
      <ProfilePicture imageUrl='http://www.fillmurray.com/100/100' />
      <div className={styles.feed}>
        <Shoutbar />
        { shouts.map((shout, i) => (
          <Shout key={i} {...shout}  />
        )) }
      </div>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    shouts: state.shouts
  }
}
export default connect(mapStateToProps)(App)
