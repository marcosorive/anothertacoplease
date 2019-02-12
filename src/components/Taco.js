import React, { Component } from 'react';
import { MDBAnimation,MDBCard, MDBCardBody, MDBCardHeader, MDBBtn} from "mdbreact";
import {TacoBuilder} from './TacoBuilder';

export class Taco extends Component{

	constructor(props){
		super(props)
		this.state={
			isLoaded:false,
			error:null,
			taco:null
		}
	}

	async componentDidMount(){
		this.getTaco();
	}

	async componentDidUpdate(prevProps){
		if((this.props.anotherOne>prevProps.anotherOne || this.props.fullTaco !== prevProps.fullTaco) && this.state.isLoaded === true){
			this.setState({
					isLoaded:false,
					error:null,
					taco:null
			});
			this.getTaco();
		}
	}

	render(){
		let { isLoaded,error,taco} = this.state;
		if(error){
			console.log(error);
			return(
					<MDBCard className="my-5 z-depth-4">
						<MDBCardHeader><h3>An error has ocurred <span role="img" aria-label="Sorry-emoji">😓</span></h3></MDBCardHeader>
						<MDBCardBody>
							<p>I'm really sorry, if the error persists check the about/faq section to contact me.</p>
							<MDBBtn color="primary" onClick={this.props.retry}>Try again</MDBBtn>
						</MDBCardBody>
						
					</MDBCard>
			)
		}else if(!isLoaded){
			return(
				<div className="d-flex flex-row justify-content-center my-5">
					<div className="mx-auto spinner-border text-primary text-center" role="status">
						<span className="sr-only">Loading...</span>
					</div>
				</div>
			)
		}else{	
			return(
				<MDBAnimation type="fadeIn">
					<TacoBuilder components={taco} fullTaco={this.props.fullTaco}/>
				</MDBAnimation>
			)
		}
	}

	async getTaco(){
		try{
			let compList = []
			var options = { method: 'GET',
							mode:"cors",
						};
			let url="https://taco-randomizer.herokuapp.com/random/";
			if(this.props.fullTaco) url="https://taco-randomizer.herokuapp.com/random/?full-taco=true";
			const response = await fetch(url,options)
			let taco = await response.json()
			if(await taco.name)			compList.push([await taco.name, await taco.recipe]);
			if(await taco.condiment) 	compList.push(["Condiment",await taco.condiment.recipe]);
			if(await taco.mixin) 		compList.push(["Mixin",await taco.mixin.recipe]);
			if(await taco.base_layer) 	compList.push(["Base layer",await taco.base_layer.recipe]);
			if(await taco.seasoning) 	compList.push(["Seasoning",await taco.seasoning.recipe]);
			if(await taco.shell) 		compList.push(["Shell",await taco.shell.recipe]);
			this.setState({
				isLoaded:true,
				taco:compList,
			})
		}catch(e){
			this.setState({
				isLoaded:true,
				error:e
			})
		}
	}
}