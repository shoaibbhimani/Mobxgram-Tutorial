import React from "react";
import { observer, inject } from "mobx-react";
import { NavLink } from "react-router-dom";

import PhotoItem from "./Photoitem.js";

class MobxgramList extends React.Component {
  componentDidMount() {
    this.props.mobxgramStore.getStore();
  }
  render() {
    const { mobxgramStore } = this.props;
    return (
      <section className="row">
        <section className="col-sm-10 col-sm-offset-1">
          <section className="clearfix">
            <NavLink to="/add_photo" className="btn btn-addphoto btn-default">
              Add Photo
            </NavLink>
          </section>
          <section className="clearfix">
            {mobxgramStore.mobxgramList.map((mobxgramStoreItem, index) => {
              return (
                <PhotoItem
                  increamentLikes={mobxgramStore.increamentLikes}
                  key={mobxgramStoreItem.id}
                  index={index}
                  mobxgramStoreItem={mobxgramStoreItem}
                />
              );
            })}
          </section>
        </section>
      </section>
    );
  }
}

export default inject("mobxgramStore")(observer(MobxgramList));
