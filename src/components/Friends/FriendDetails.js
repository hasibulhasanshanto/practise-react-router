import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
  const friend = useLoaderData();
  const { name, email, phone, website } = friend;

  return (
    <div>
      <h3>User profile details: {name}</h3>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
    </div>
  );
};

export default FriendDetails;
