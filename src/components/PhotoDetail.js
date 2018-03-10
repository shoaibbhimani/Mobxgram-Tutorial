import React from "react";
import { observer, inject } from "mobx-react";
import PhotoItem from "./Photoitem.js";

class PhotoDetails extends React.Component {
  constructor(props) {
    super(props);

    let Id = props.match.params.imageName.split("-").pop();

    this.photoIndex = props.mobxgramStore.mobxgramList.findIndex(
      mobxgramListItem => {
        return parseInt(mobxgramListItem.id, 10) === parseInt(Id, 10);
      }
    );
  }
  render() {
    const { mobxgramStore } = this.props;
    return (
      <section className="row">
        <section className="col-md-8 col-md-offset-2">
          <div className="row">
            <PhotoItem
              increamentLikes={mobxgramStore.increamentLikes}
              index={this.photoIndex}
              mobxgramStoreItem={mobxgramStore.mobxgramList[this.photoIndex]}
            />

            <div className="col-sm-8">
              <section className="photodetails">
                <ul>
                  {mobxgramStore.mobxgramList[this.photoIndex].comments.map(
                    commentsItem => {
                      return (
                        <li>
                          <div>{commentsItem.author}</div>
                          <div>{commentsItem.text}</div>
                        </li>
                      );
                    }
                  )}
                </ul>
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    mobxgramStore.addComments({
                      index: this.photoIndex,
                      author: this.refs.author.value,
                      text: this.refs.text.value
                    });
                    this.refs.author.value = "";
                    this.refs.text.value = "";
                  }}
                >
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input
                      type="text"
                      ref="author"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Comments</label>
                    <input
                      type="text"
                      ref="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="comments"
                    />
                  </div>
                  <button type="submit" className="btn btn-default">
                    Submit
                  </button>
                </form>
              </section>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default inject("mobxgramStore")(observer(PhotoDetails));
