import React from 'react';
import axios from 'axios';
import './App.css';
import { CardDeck } from 'reactstrap';
import FollowersGrid from './components/FollowersGrid';
import PersonalCard from './components/PersonalCard';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      userName: {},
      followers: []
    }
  }

  componentDidMount() {
    axios
    .get(`https://api.github.com/users/hsisco`)
    .then (response => {
      console.log(response.data);
        this.setState({userName: response.data});
      })
    .catch (error => console.log('Nope. No hsisco.', error))
    axios
    .get(`https://api.github.com/users/hsisco/followers`)
    .then (response => {
      console.log(response.data);
        this.setState({followers: response.data})
      })
      .catch (error => console.log('No followers. Sad.', error))
  };
  
  render(){
    return (
      <div className="App">
        <header>
          <PersonalCard userName={this.state.userName} />
          <h3>
          Look at all of my many followers:
          </h3>
        </header>
        <CardDeck>
          <FollowersGrid followers={this.state.followers} />
        </CardDeck>
      </div>
    );
  }
}

export default App;