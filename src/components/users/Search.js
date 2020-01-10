import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

class Search extends Component {
  state = {
    text: ""
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please Enter Something...", "light");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ width: "100%" }}
          >
            Search
          </Button>
        </form>
        {this.props.showClear && (
          <Button
            variant="contained"
            onClick={this.props.clearUsers}
            style={{ width: "100%" }}
          >
            Clear
          </Button>
        )}
      </div>
    );
  }
}

export default Search;
