import React, { Component } from 'react';
import { MDBAnimation } from "mdbreact";
import {TacoBuilder} from './TacoBuilder';

export class Taco extends Component{

	constructor(props){
		super(props)
		this.state={
			isLoaded:false,
			error:null,
			components:null
		}
	}

	async componentDidMount(){
		this.getTaco();
	}

	async componentDidUpdate(prevProps){
		if(this.props.anotherOne>prevProps.anotherOne){
			this.getTaco();
		}
	}

	render(){
		let { isLoaded,error,components} = this.state;
		if(error){
			return(<h2 className="text-center my-5">It seems that an error has ocurred. Please try again. {error.message}</h2>)
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
					<TacoBuilder components={components}/>
				</MDBAnimation>
			)
		}
	}

	async getTaco(){
		try{
			let compList = []
			var options = { method: 'GET',
							mode:"cors",};
			const response = await fetch("https://taco-randomizer.herokuapp.com/random/?full-taco=true",options)
			let taco = await response.json()
			if(await taco.condiment) 	compList.push(["Condiment",await taco.condiment.recipe]);
			if(await taco.mixin) 		compList.push(["Mixin",await taco.mixin.recipe]);
			if(await taco.base_layer) 	compList.push(["Base layer",await taco.base_layer.recipe]);
			if(await taco.seasoning) 	compList.push(["Seasoning",await taco.seasoning.recipe]);
			if(await taco.shell) 		compList.push(["Shell",await taco.shell.recipe]);
			this.setState({isLoaded:true,components:compList})
		}catch(e){
			this.setState({
				isLoaded:true,
				error:e
			})
		}
	}
}