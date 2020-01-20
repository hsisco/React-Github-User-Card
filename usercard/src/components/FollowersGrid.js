import React from 'react';
import axios from 'axios';
import FollowerCard from './FollowerCard';

class FollowersGrid extends React.Component {
  state = {
    me: [],
  };

  componentDidMount(){
    axios.get('https://api.github.com/users/hsisco')
    .then(res => {
      const myCard =  res.data
      console.log('Info: hsisco:', myCard);
      this.setState({ ...this.state, me: myCard });
    })
    .catch(err => console.log('Error getting hsisco info:', err));
  }

  render(){
    return (
      <div className="FollowersGrid">
        <header className="App-header">
        </header>
        <FollowerCard />
      </div>
    )};
}

export default FollowersGrid;
