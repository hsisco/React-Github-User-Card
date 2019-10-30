import React from 'react';
import {
  Card, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody
} from 'reactstrap';


function UserCard(props) {
  return(
    <div className="card">
      <Card>
        <CardImg top width="100%" src={props.avatar_url} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <a href={props.url}>
            <CardSubtitle>{props.login}</CardSubtitle>
          </a>
          <CardText>{props.location}</CardText>
          <CardText>{props.bio}</CardText>
        </CardBody>
      </Card>
    </div>
  )

}

export default UserCard;