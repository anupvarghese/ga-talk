import React, { Component } from 'react';
import styles from './styles.css';
import {connect} from 'react-redux';
import * as shoutActions  from '../../redux/actions/shouts.js'
class Shoutbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shout: ''
    }
  }

  render() {
    const { shout } = this.state;
    const { addShout } = this.props;
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
          onClick={() => addShout(
             {name: 'Phil', ProfilePicture: 'http://www.fillmurray.com/100/100'},
             this.state.shout.toUpperCase()
          )}
        >SHOUT!</div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addShout(user, text) { dispatch(shoutActions.addShout(user, text)) }
  }
}

export default connect(null, mapDispatchToProps)(Shoutbar);
