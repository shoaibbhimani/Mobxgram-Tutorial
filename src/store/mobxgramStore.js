import { extendObservable,action } from "mobx"


class Mobxgram {
	constructor(){
		extendObservable(this,{
			instagramList:[]
		})
	}
}

export default new Mobxgram()