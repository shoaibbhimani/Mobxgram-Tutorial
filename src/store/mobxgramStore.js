import { extendObservable, action } from "mobx";
import axios from "axios";

import sampleStore from "./sampleStore.js";

const ROOTURL = "http://localhost:7777/photolists";

class Mobxgram {
  constructor() {
    extendObservable(this, {
      mobxgramList: [],
      getStore: action(() => {
        //this.mobxgramList.replace(sampleStore);

        axios
          .get(ROOTURL)
          .then(response => {
            this.mobxgramList.replace(response.data);
          })
          .catch(() => {
            //error
          });
      }),
      addPhoto: action(newPhoto => {
        this.mobxgramList = this.mobxgramList.concat(newPhoto);

        return axios.post(ROOTURL, newPhoto);
      }),
      increamentLikes: action(index => {
        var selectedListItem = this.mobxgramList[index];
        var newValue = {
          ...selectedListItem,
          likes: selectedListItem.likes + 1
        };

        this.mobxgramList = [
          ...this.mobxgramList.slice(0, index),
          newValue,
          ...this.mobxgramList.slice(index + 1)
        ];
      }),
      addComments: action(({ index, author, text }) => {
        let mobxgramList = this.mobxgramList.slice();
        let selectedPhotoItem = mobxgramList[index];
        selectedPhotoItem.comments = [
          ...selectedPhotoItem.comments,
          {
            author,
            text
          }
        ];

        this.mobxgramList.replace(mobxgramList);
      })
    });
  }
}

export default new Mobxgram();
