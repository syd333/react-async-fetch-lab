// const { Component } = require("react")

// create your App component here
import React, {Component} from 'react'
class App extends Component {

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(data => {
            console.log
        })
    }

    render(){
        return(
            <div></div>
        )
    }
}

export default App;