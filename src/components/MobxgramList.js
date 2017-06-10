import React from 'react';
import { observer, inject } from "mobx-react"
import PhotoItem from "./Photoitem.js"

class MobxgramList extends React.Component {
	render(){
		return (
			 <section className="row">
			 		<section className="col-md-10 col-md-offset-1">
			 			{
			 				this.props.mobxgramStore.mobxgramList.map((mobxgramStoreItem) => {
			 					return <PhotoItem key={mobxgramStoreItem.id} mobxgramStoreItem={mobxgramStoreItem} />
			 				})
			 			}
			 		</section>
			 </section>
			)
	}
}

export default inject("mobxgramStore")(observer(MobxgramList))