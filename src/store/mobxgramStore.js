import { extendObservable,action } from "mobx"
import sampleStore from "./sampleStore.js"

class Mobxgram {
	constructor(){
		extendObservable(this,{
			mobxgramList:[],
			getStore:action(() => {
				this.mobxgramList.replace(sampleStore);
			})
		})
	}
}

export default new Mobxgram()