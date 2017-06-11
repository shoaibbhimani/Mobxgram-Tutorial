import React from 'react';
import { observer } from "mobx-react"
import { NavLink } from "react-router-dom"

class PhotoItem extends React.Component {
	render(){
		const { mobxgramStoreItem, increamentLikes, index } = this.props;
		return (
					<section className="col-sm-4 text-center">
						<section className="thumbnail">
						  <section>
						    <img className="img-responsive" src={mobxgramStoreItem.imagelinks} alt=""  />
						  </section>

						  <h3>
						    
						      {mobxgramStoreItem.name}
						    
						  </h3>
						<footer className="photoitem__footer clearfix">
							<div>
								<NavLink to={`/${mobxgramStoreItem.name}-${mobxgramStoreItem.id}`}>
           					<i className="fa fa-comments"></i>
           					<span>{mobxgramStoreItem.comments.length}</span>
								</NavLink>
							</div>
							<div>
							
           			 	<i onClick={() => {
           			 			increamentLikes(index)
           			 	}} className="fa fa-thumbs-up"></i>
           			  <span>{mobxgramStoreItem.likes}</span>
							
							</div>
						 </footer>
					 </section>
					</section>
				)
	}
}

export default observer(PhotoItem)