import React from 'react';
import UserCard from './UserCard';


const FollowerCard = props => {
  return(
    <div className="followers-card">
      {props.followers.map(follower => (
        <UserCard
          key={follower.id}
          avatar={follower.avatar_url}
          name={follower.name}
          userLink={follower.url}
          login={follower.login}
          location={follower.location}
          bio={follower.bio} />
      ))}
    </div>
  );
}

export default FollowerCard;