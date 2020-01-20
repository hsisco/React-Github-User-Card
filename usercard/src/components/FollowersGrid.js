import React from 'react';
import axios from 'axios';
import FollowerCard from './FollowerCard';

class FollowersGrid extends React.Component {
  state = {
    followers: [],
  };

  componentDidMount(){
    axios
    .get('https://api.github.com/users/hsisco/followers')
    .then(res => {
      const followers =  res.data
      console.log('Info about followers:', followers);
      this.setState({ ...this.state, followers: followers });
    })
    .catch(err => console.log('Error getting follower info:', err));
  }

  render(){
    return (
      <div className="FollowersGrid">
        <header className="App-header">
        </header>
        <FollowerCard followers={this.state} />
      </div>
    )};
}

export default FollowersGrid;
