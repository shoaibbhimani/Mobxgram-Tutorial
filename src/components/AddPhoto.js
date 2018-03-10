import React from "react";
import { inject, observer } from "mobx-react";
import { extendObservable, action } from "mobx";

class AddPhoto extends React.Component {
  constructor() {
    super();

    this.addPhotoLocalState = extendObservable(this, {
      name: "",
      changeName: action(event => {
        this.name = event.target.value;
      }),
      imagelinks: "",
      changeImageLink: action(event => {
        this.imagelinks = event.target.value;
      }),
      resetForm: action(() => {
        this.name = "";
        this.imagelinks = "";
      })
    });
  }

  addPhotoToStore = event => {
    event.preventDefault();
    const { resetForm, name, imagelinks } = this.addPhotoLocalState;
    const { history } = this.props;

    this.props.mobxgramStore
      .addPhoto({
        name: name,
        imagelinks: imagelinks,
        comments: [],
        likes: 0
      })
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        //error
      });

    resetForm();
  };

  render() {
    const {
      name,
      changeName,
      imagelinks,
      changeImageLink
    } = this.addPhotoLocalState;
    return (
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2">
          <form onSubmit={this.addPhotoToStore}>
            <div className="form-group">
              <label htmlFor="name"> Name </label>
              <input
                placeholder="Enter Name"
                id="name"
                value={name}
                onChange={changeName}
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="link"> Photo Link </label>
              <input
                placeholder="Enter Link"
                id="link"
                value={imagelinks}
                onChange={changeImageLink}
                type="text"
                className="form-control"
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Add Photo
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default inject("mobxgramStore")(observer(AddPhoto));
