import React, { Component } from 'react'

export class ScoreCurrent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             score : 0
        }
    }
    addone = (e)=>{
        this.setState({score: this.state.score + 1})
    }
    // Version sans callback ne fonctionne pas
    // addtriple = (e)=>{
    //     this.setState({score: this.state.score + 1})
    //     this.setState({score: this.state.score + 3})
    // }


    // fonction callback version refacto
    addtriple = (e)=>{
        this.setState( callstate => {return {score: callstate.score + 1}})
        this.setState( callstate => {return {score: callstate.score + 3}})

    }

    // fonction callback version sans refacto
    // incrementScore(currentState){
    //     return {score: currentState.score +1}
    // }
    // addtriple(){
    //     this.setState(this.incrementScore)
    //     this.setState(this.incrementScore)
    //     this.setState(this.incrementScore)

    // }
    render() {
        return (
            <div>
                <h1 >Score : { this.state.score}</h1>
                <button onClick= {this.addone}> Button1  </button>
                <button onClick= {this.addtriple}> Button2  </button>
            </div>
        )
    }
}

export default ScoreCurrent
