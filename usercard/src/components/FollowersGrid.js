import React from 'react';
import FollowerCard from './FollowerCard';
import { CardDeck } from 'reactstrap';

const FollowersGrid = props => {
  return(
    <div className="followers-grid">
      <CardDeck>
        {props.followers.map(follower => (
        <FollowerCard
          key={follower.id}
          avatar={follower.avatar_url}
          name={follower.name}
          userLink={follower.html_url}
          login={follower.login}
          location={follower.location}
          bio={follower.bio} />
      ))}
      </CardDeck>
    </div>
  );
}

export default FollowersGrid;
