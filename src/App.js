import React, { Component } from 'react';
import {Taco} from './components/Taco';
import {MDBContainer, MDBModal, MDBModalBody, MDBModalHeader} from 'mdbreact';
import Switch from 'react-switch';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

class App extends Component {

	constructor(props){
		super(props)
		this.state={
			switch:false,
			anotherOne:0,
			modal:false,
		}
		this.handleAnotherTacoClick = this.handleAnotherTacoClick.bind(this);
		this.handleSwitchChange = this.handleSwitchChange.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
	}

	handleAnotherTacoClick(){
		this.setState({
			anotherOne:this.state.anotherOne+1,
		})
	}

	handleSwitchChange() {
		this.setState({ 
			switch:!this.state.switch 
		});
	}

	toggleModal() {
		this.setState({
		  modal: !this.state.modal
		});
	}
	render() {
		return (
			<div className="h-100 grey lighten-3">
				<MDBContainer>
					<h1 className="mt-5 text-center primary">
						<button 
							onClick={this.handleAnotherTacoClick} 
							style={{border:0,textDecoration:"underline",backgroundColor:"#eeeeee"}}>
							Another taco, please!
						</button> 
					</h1>

					<div className="d-flex flex-row justify-content-center align-items-center my-1">
						<label htmlFor="normal-switch" className="mx-auto">
							<span>Random</span>
							<Switch
							onChange={this.handleSwitchChange}
							checked={this.state.switch}
							uncheckedIcon={false}
							checkedIcon={false}
							onColor="#4285F4"
							id="normal-switch"
							className="mx-2"
							/>
							<span>Full taco</span>
						</label>
					</div>

					<Taco anotherOne={this.state.anotherOne} fullTaco={this.state.switch} retry={this.handleAnotherTacoClick}/> 

					<div className="text-center">
						<button 
							onClick={this.toggleModal} 
							style={{border:0,textDecoration:"underline",backgroundColor:"#eeeeee"}}>
							<h4>About/F.A.Q.</h4>
						</button>
					</div>
				</MDBContainer>
					<MDBModal isOpen={this.state.modal} toggle={this.toggleModal}>
						<MDBModalHeader toggle={this.toggleModal}>I've heard you like tacos!</MDBModalHeader>
						<MDBModalBody>
							<h3>Hi!</h3>
							<p>
								This is a Reactjs project that retrieves tacos from <a href="https://github.com/evz/tacofancy-api" target="_blank" rel="noopener noreferrer">fancytaco-api</a>.
								You can see my code on <a href="https://github.com/marcosorive/anothertacoplease" target="_blank" rel="noopener noreferrer">github</a>.
								My other projects are also on <a href="https://github.com/marcosorive" target="_blank" rel="noopener noreferrer">github</a>, but maybe you'd like to see my <a href="https://marcos.orive.me" target="_blank" rel="noopener noreferrer">portfolio</a>.
							</p>
							<ul>
								<li>
									<span className="font-weight-bold">What's the difference between "Random" and "Full taco"?</span> 
									<ul>
										<li>Random tacos are just 5 components picked randomly, beware that the result maybe disgusting or delicous! </li>
										<li>Full taco gives you a defined and tested recipe that will delight your palate.</li>
									</ul>
								</li>
							</ul>
							<p>Contact info:</p>
							<ul>
								<li>
									<span className="font-weight-bold">Email:</span> marcos(at)orive(dot)me
								</li>
								<li>
								<span className="font-weight-bold">Twitter:</span> <a href="https://twitter.com/marcosorive" target="_blank" rel="noopener noreferrer">@marcosorive</a>
								</li>
							</ul>
						</MDBModalBody>
					</MDBModal>
			</div>


		);
	}
}

export default App;
