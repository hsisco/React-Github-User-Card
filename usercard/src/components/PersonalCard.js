  
import React from 'react';
import {
  Card, 
  CardImg, 
  CardTitle, 
  CardText,
  CardSubtitle, 
  CardBody
} from 'reactstrap';


const PersonalCard = props => {
  return(
    <div className="hsisco-card">
      <Card>
        <CardImg top width="100%" src={props.userName.avatar_url} alt={`${props.userName.login}'s profile avatar`} />
        <CardBody>
          <CardTitle>{props.userName.name}</CardTitle>
          <a href={props.userName.name}>
            <CardSubtitle>{props.userName.login}</CardSubtitle>
          </a>
          <CardText>{props.userName.location}</CardText>
          <CardText>{props.userName.bio}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default PersonalCard;
