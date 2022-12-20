import React from "react";
import { Link } from "react-router-dom";

const Friend = ({ friend }) => {
  const { id, name, username, email } = friend;
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
      <p>
        Username: <Link to={`/friend/${id}`}>{username}</Link>
      </p>
    </div>
  );
};

export default Friend;
