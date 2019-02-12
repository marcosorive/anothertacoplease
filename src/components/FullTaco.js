import React, { Component } from 'react';
import { MDBAnimation,MDBCard, MDBCardBody, MDBCardHeader, } from "mdbreact";
const ReactMarkdown = require('react-markdown')

export class FullTaco extends Component{

	changeLinks(url){
		if(url[0]==="/"){
			return "https://raw.github.com/sinker/tacofancy/master"+url;
		}else{
			return url;
		}
	}

	render(){
		return(
			<MDBAnimation type="fadeInUp">
				<MDBCard className="my-3 z-depth-4">
						<MDBCardHeader><h3>{this.props.header}</h3></MDBCardHeader>
						<MDBCardBody>
							<ReactMarkdown source={this.props.content} transformLinkUri={this.changeLinks} linkTarget="_blank"/>
						</MDBCardBody>
				</MDBCard>
				<h3 key="intermediate" className="mt-3">Taco components</h3>
			</MDBAnimation>
		)
	}
}