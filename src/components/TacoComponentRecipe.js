import React, { Component } from 'react';
import { Markdown } from 'react-showdown';
import { MDBAnimation,MDBBtn,MDBCardTitle, } from "mdbreact";


export class TacoComponentRecipe extends Component{

	constructor(props){
		super(props)
		this.state={
			recipe:false,
		}
	}

	handleVisibility = () => this.setState({ recipe: !this.state.recipe })

	render(){
		let {recipe} = this.state;
		if(!recipe){
			return(
                <MDBAnimation type="fadeInUp">
                    <MDBCardTitle>{this.props.header}</MDBCardTitle>
                    <MDBBtn color="primary" onClick={this.handleVisibility}>See Recipe</MDBBtn>
                </MDBAnimation>
			)
		}
		else{
			return(
                <MDBAnimation type="fadeInDown">
                    <Markdown markup={this.props.content}/>
                    <MDBBtn color="primary" onClick={this.handleVisibility}>Close</MDBBtn>
                </MDBAnimation>
			)
		}

			
	}
}