import React from 'react';
import UserCard from './UserCard';


const HsiscoCard = props => {
  return(
    <div className="hsisco-card">
        <UserCard
          key={props.id}
          avatar={props.avatar_url}
          name={props.name}
          userLink={props.url}
          login={props.login}
          location={props.location}
          bio={props.bio} />
    </div>
  );
}

export default HsiscoCard;