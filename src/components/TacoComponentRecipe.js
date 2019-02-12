import React, { Component } from 'react';
import { MDBAnimation,MDBBtn,MDBCardTitle, } from "mdbreact";
const ReactMarkdown = require('react-markdown');

export class TacoComponentRecipe extends Component{

	constructor(props){
		super(props)
		this.state={
			recipe:false,
		}
	}

	handleVisibility = () => this.setState({ recipe: !this.state.recipe })

	changeLinks(url){
		if(url[0]==="/"){
			return "https://raw.github.com/sinker/tacofancy/master"+url;
		}else{
			return url;
		}
	}

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
					<ReactMarkdown source={this.props.content} transformLinkUri={this.changeLinks} linkTarget="_blank"/>
					<MDBBtn color="primary" onClick={this.handleVisibility}>Close</MDBBtn>
				</MDBAnimation>
			)
		}
	}
	
}