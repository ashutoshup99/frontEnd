import React, { Component } from 'react'

export default class Badge extends Component {

    constructor(){
        super();
        this.state = {count: 0}
    } 

    handleClick(){
        console.log('click event fired...')
        // this.state.count++;
        // not allowed, as state can only be changed using setState method
        this.setState({count: ++this.state.count})
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary" onClick={this.handleClick.bind(this)}>
                    {this.props.caption} <span className="badge bg-secondary">{this.state.count}</span>
                </button>
            </div>
           
        )
    }
}
