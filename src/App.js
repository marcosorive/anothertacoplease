import React, { Component } from 'react';
import {Taco} from './components/Taco';
import {MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter,} from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

class App extends Component {

	constructor(props){
		super(props)
		this.state={
			anotherOne:0,
			modal:false,
		}
		this.handleAnotherTacoClick = this.handleAnotherTacoClick.bind(this);
	}

	handleAnotherTacoClick(){
		this.setState({
			anotherOne:this.state.anotherOne+1,
		})
	}

	toggle = () => {
		this.setState({
		  modal: !this.state.modal
		});
	}
	render() {
		return (
			<div className="h-100  grey lighten-3">
				<MDBContainer>
					
					<h1 className="my-3 text-center primary">
						<button 
							onClick={this.handleAnotherTacoClick} 
							style={{border:0,textDecoration:"underline",}} 
							className="mt-5">
							Another taco, please!
						</button> 
					</h1>
					<div className="text-center">
						<button 
							onClick={this.toggle} 
							style={{border:0,textDecoration:"underline",}}>
							<h3>About</h3>
						</button>
					</div>
					<Taco anotherOne={this.state.anotherOne}/>
					<MDBModal isOpen={this.state.modal} toggle={this.toggle}>
						<MDBModalHeader toggle={this.toggle}>Another Taco!</MDBModalHeader>
						<MDBModalBody>
						(...)
						</MDBModalBody>
						<MDBModalFooter>
						<MDBBtn color="primary">Close</MDBBtn>
						</MDBModalFooter>
					</MDBModal>
				</MDBContainer>
			</div>
		);
	}
}

export default App;
