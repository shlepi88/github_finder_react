import React from "react";
import PropTypes from "prop-types";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";

const Users = props => {
  const { users, loading } = props;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(275px, 1fr))",
  gridGap: "1rem",
  padding: "30px 0"
};

export default Users;
