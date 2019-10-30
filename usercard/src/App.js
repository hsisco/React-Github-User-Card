import React from 'react';
import axios from 'axios';

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
          <img src="../public/lambdalogo.png" />
          <h1>:heart: s</h1>
          <img src="../public/githublogo.png" />
        </header>
        <UserCard>
          <User hsisco={hsisco} />
        </UserCard>
        <UserCard>
          {followers.map(followers => (
          <User 
            key={followers.id}
            avatarUrl={}
            login={followers.login} /> ))}
        </UserCard>
      </div>
    );
  }
}

export default App;
