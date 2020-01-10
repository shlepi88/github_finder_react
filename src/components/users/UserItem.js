import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    textAlign: "center"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const UserItem = props => {
  const classes = useStyles();
  const { login, avatar_url } = props.user;

  return (
    <Card className={classes.card}>
      <CardContent>
        <img
          src={avatar_url}
          alt="avatar_url"
          className="round-img"
          style={{ width: "60px" }}
        />
        <Typography variant="h5" component="h2">
          {login}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          color="primary"
          style={{ margin: "0 auto" }}
        >
          <Link to={`/user/${login}`} style={{ color: "#fff" }}>
            More
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
