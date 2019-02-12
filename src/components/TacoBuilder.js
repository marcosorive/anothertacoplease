import React, { Component } from 'react';
import {TacoComponent} from './TacoComponent';
import {FullTaco} from './FullTaco';

export class TacoBuilder extends Component{

    constructor(props){
        super(props);
        this.state={
            taco_recipe:this.props.components[0],
            taco:null,
        };
    }

    componentDidMount(){
        this.buildTaco()
    }
    componentDidUpdate(prevProps){
        if(prevProps !== this.props){
            this.buildTaco()
        }
    }

    render(){
       return(<div>{this.state.taco}</div>);
    }

    async buildTaco(){
        let components = this.props.components;
        if(this.props.fullTaco){
            const taco_recipe = this.state.taco_recipe;
            let compList = [<FullTaco key="full_taco" header={taco_recipe[0]} content={taco_recipe[1].replace(taco_recipe[0],"").replace(/=/g,"")}/>];
            for(let i = 1;i<components.length;i++){
                let c = components[i];
                console.log(c);
                compList.push(
                    <TacoComponent key={c[0]} header={c[1].substr(0,c[1].indexOf("\n"))} content={c[1].replace(/=/g,"")} type={c[0]}/>
                )
            }
            this.setState({
                taco:compList,
            })
        }else{
            const compList = components.map(c => (
                <TacoComponent key={c[0]} header={c[1].substr(0,c[1].indexOf("\n"))} content={c[1]} type={c[0]}/>
            ))
            this.setState({
                taco:compList,
            })
        }
        
    }
}

