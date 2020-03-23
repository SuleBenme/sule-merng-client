import React from 'react';
import {Card, Image } from 'semantic-ui-react';

function UserCard({
  post: {createdAt, username}
}) {

  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta>{createdAt}</Card.Meta>
      </Card.Content>
    </Card>
  );
}

export default UserCard;