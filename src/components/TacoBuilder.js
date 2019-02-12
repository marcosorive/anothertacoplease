import React, { Component } from 'react';
import {TacoComponent} from './TacoComponent';

export class TacoBuilder extends Component{

    constructor(props){
        super(props);
        this.state={
            taco:null,
        };
    }

    componentDidMount(){
        const components = this.props.components;
        const compList = components.map(c => (
                <TacoComponent key={c[0]} header={c[1].substr(0,c[1].indexOf("\n"))} 	content={c[1]} type={c[0]}/>
              ))
        this.setState({
            taco:compList,
        })
    }

    componentDidUpdate(prevProps){
        if(prevProps !== this.props){
            const components = this.props.components;
            const compList = components.map(c => (
                    <TacoComponent key={c[0]} header={c[1].substr(0,c[1].indexOf("\n"))} 	content={c[1]} type={c[0]}/>
                ))
            this.setState({
                taco:compList,
            })
        }
    }

    render(){
       return(<div>{this.state.taco}</div>);
    }
}

