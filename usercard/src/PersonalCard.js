import React from 'react';
import axios from 'axios';
import './App.css';

class PersonalCard extends React.Component {
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
      <div className="PersonalCard">
        <header className="App-header">
        </header>
      </div>
    )};
}

export default PersonalCard;
