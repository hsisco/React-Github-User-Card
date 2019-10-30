import React from 'react';
import axios from 'axios';
import { CardDeck } from 'reactstrap';
import UserCard from './UserCard';

class App extends React.Component {
    state = {
      hsisco: {},
      followers: []
    }
  

  componentDidMount() {
    axios
    .get(`https://api.github.com/users/hsisco`)
    .then (response => {
      // console.log(response.data);
        this.setState({hsisco: response.data});
      })
    .catch (error => console.log('Nope. No hsisco.', error))
  };

  listFollowers() {
    axios
    .get(this.state.hsisco.followers_url)
    .then (response => {
      // console.log(response.data);
        this.setState({followers: response.data.followers_url})
      })
      .catch (error => console.log('No followers. Sad.', error))
  };
  
  render(){
    return (
      <div className="App">
        <header>
          <img src="../public/lambdalogo.png" alt="Lambda School logo" />
          <h1>:heart: s</h1>
          <img src="../public/githublogo.png" alt="Github logo" />
        </header>
        <UserCard hsisco={this.state.hsisco} />
        <CardDeck>
          <UserCard followers={this.state.followers} />
        </CardDeck>
      </div>
    );
  }
}

export default App;
