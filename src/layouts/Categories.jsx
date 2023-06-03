import React from 'react'
import {ListGroup} from "react-bootstrap";

export default function Categories() {
  return (
    <div>
      <ListGroup>
      <ListGroup.Item>Home</ListGroup.Item>
      <ListGroup.Item>Messages</ListGroup.Item>
      <ListGroup.Item>Friends</ListGroup.Item>
    </ListGroup>
    </div>
  );
}
