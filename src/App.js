import React, { PureComponent } from "react";
import Button from "./components/Button";
import "./App.css";
import { connect } from "react-redux";
import { fetchUsers, selectUser } from "./redux/actions/users";
import {
  namesSelector,
  getSelectedUserPositionSelector
} from "./selectors/selectors";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import { Select } from "semantic-ui-react";

class App extends PureComponent {
  render() {
    const {
      fetchUsers,
      selectUser,
      userNames,
      selectedUserPosition
    } = this.props;
    let position = selectedUserPosition || [-3.71722, -38.54306];
    return (
      <div className="titleContainer">
        <h2>Plot a user in the map by selecting it in the dropdown</h2>
        <div className="container">
          <div className="box1">
            <Button onClick={fetchUsers}>Fetch Users</Button>
            <Select
              placeholder="Person"
              options={userNames.map(name => {
                return { key: name, value: name, text: name };
              })}
              onChange={(e, { value }) => {
                selectUser(value);
              }}
            />
          </div>
          <div className="box2">
            <LeafletMap
              center={position}
              zoom={3}
              maxZoom={4}
              attributionControl={true}
              zoomControl={true}
              doubleClickZoom={true}
              scrollWheelZoom={true}
              dragging={true}
              animate={true}
              easeLinearity={0.35}
            >
              <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
              <Marker position={position}>
                <Popup>Popup for any custom information.</Popup>
              </Marker>
            </LeafletMap>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  let userNames = namesSelector(state);
  let selectedUserPosition = getSelectedUserPositionSelector(state);
  return { userNames, selectedUserPosition };
}
const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    selectUser: value => dispatch(selectUser(value))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
