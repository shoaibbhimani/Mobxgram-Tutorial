import { extendObservable,action } from "mobx"
import sampleStore from "./sampleStore.js"

class Mobxgram {
	constructor(){
		extendObservable(this,{
			mobxgramList:[],
			getStore:action(() => {
				this.mobxgramList.replace(sampleStore);
			}),
			increamentLikes:action((index) => {
				var selectedListItem  = this.mobxgramList[index];
				var newValue = {
					...selectedListItem,
					likes:selectedListItem.likes + 1
				}

				this.mobxgramList = [
           ...this.mobxgramList.slice(0,index),
           newValue,
           ...this.mobxgramList.slice(index+1),
				]
			})
		})
	}
}

export default new Mobxgram()