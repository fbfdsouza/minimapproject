import React, { PureComponent } from "react";
import Button from "./components/Button";
import "./App.css";
import { connect } from "react-redux";
import { fetching_users } from "./redux/actions/users";
import { nameSelector } from "./selectors/selectors";

class App extends PureComponent {
  render() {
    const { fetch_users, userNames } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <Button onClick={fetch_users}>Fetch Users</Button>
          <form>
            <ul>
              {userNames.map(name => (
                <li key={name}>
                  <div>
                    <label>
                      <input type="radio" name={"userNames"} value={name} />
                      {name}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </form>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  let userNames = nameSelector(state);
  return { userNames };
}
const mapDispatchToProps = dispatch => {
  return {
    fetch_users: () => dispatch(fetching_users())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
