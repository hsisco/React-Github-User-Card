import React from 'react';
import axios from 'axios';
import './App.css';
import { CardDeck } from 'reactstrap';
import Followers from './FollowerCard';
import HsiscoCard from './HsiscoCard';

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
          <img src="../public/lambdalogo.png" alt="Lambda School logo" />
          <span role="img" aria-label="heart emoji">❤️s</span>
          <img src="../public/githublogo.png" alt="GitHub logo" />
        </header>
        <HsiscoCard userName={this.state.userName} />
        <CardDeck>
          <Followers followers={this.state.followers} />
        </CardDeck>
      </div>
    );
  }
}

export default App;
