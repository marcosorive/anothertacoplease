import React, { Component } from 'react';
import { TacoComponentRecipe } from './TacoComponentRecipe';
import { MDBAnimation,MDBCard, MDBCardBody, MDBCardHeader, } from "mdbreact";


export class TacoComponent extends Component{

	render(){
			return(
				<MDBAnimation type="fadeInUp">
					<MDBCard className="my-3 z-depth-4">
							<MDBCardHeader><h3>{this.props.type.replace(/#+/g,"")}</h3></MDBCardHeader>
							<MDBCardBody>
								<TacoComponentRecipe header={this.props.header} content={this.props.content.replace(/href="*"/i,"href='#'")}/>
							</MDBCardBody>
					</MDBCard>
				</MDBAnimation>
			)
	}
}