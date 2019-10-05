import React, { Component } from 'react'
import './IconList.css'
export class IconList extends Component {
   static defaultProps= {
   option :[
       "angry",
       "anchor",
       "archive",
       "at",
       "archay",
       "baby",
       "bell",
       "bolt",
       "bone",
       "car",
       "city",
       "cloud",
       "couch"
   ]}
   constructor(props) {
       super(props)
       this.state = { icons: []}
    //    this.addIcon = this.addIcon.bind(this)
    
   }

   addIcon =(e)=>{
        let idx = Math.floor(Math.random()* this.props.option.length)
        console.log(idx)
        let Newicon = this.props.option[idx]
        this.setState({icons: [...this.state.icons, Newicon]})
   }
  
   
    render() {
        let icons = this.state.icons.map(i => <i className={`Die fas fa-${i}`}/> )
        return (
            <div>
              <h1 >Test: {icons}</h1> 
              <button onClick = {this.addIcon}> change Icon</button> 
            </div>
        )
    }
}

export default IconList
