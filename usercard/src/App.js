import React from 'react';
import axios from 'axios';
import PersonalCard from './components/PersonalCard';
import FollowersGrid from './components/FollowersGrid';
import './App.css';

class App extends React.Component {
  state = {
    me: [],
  };

  componentDidMount(){
    axios
    .get('https://api.github.com/users/hsisco')
    .then(res => {
      const myCard = res.data
      console.log('Info about hsisco:', myCard);
      this.setState({ ...this.state, me: myCard });
    })
    .catch(err => console.log('Error getting hsisco info:', err));
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <PersonalCard />
        <FollowersGrid />
      </div>
    )};
}

export default App;
