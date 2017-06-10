import React from 'react';
import { observer, inject } from "mobx-react"
import PhotoItem from "./Photoitem.js"

class MobxgramList extends React.Component {
	render(){
		const { mobxgramStore } = this.props;
		return (
			 <section className="row">
			 		<section className="col-md-10 col-md-offset-1">
			 			{
			 				mobxgramStore.mobxgramList.map((mobxgramStoreItem, index) => {
			 					return <PhotoItem 
			 					   increamentLikes={mobxgramStore.increamentLikes} 
			 					   key={mobxgramStoreItem.id} 
			 					   index={index} 
			 					   mobxgramStoreItem={mobxgramStoreItem} />
			 				})
			 			}
			 		</section>
			 </section>
			)
	}
}

export default inject("mobxgramStore")(observer(MobxgramList))