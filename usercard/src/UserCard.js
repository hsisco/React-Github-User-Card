import React from 'react';
import {
  Card, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody
} from 'reactstrap';


const UserCard = props => {
  return(
    <div>
    <Card>
      <CardImg top width="100%" src={props.avatar} alt={`${props.login}'s profile avatar`} />
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <a href={props.userLink}>
          <CardSubtitle>{props.login}</CardSubtitle>
        </a>
        <CardText>{props.location}</CardText>
        <CardText>{props.bio}</CardText>
      </CardBody>
    </Card>
    </div>
  );
}

export default UserCard;