import React, { Component } from "react" 
import { inject, observer } from "mobx-react" 

//@inject("store")
@observer
export default class Home extends Component {
	constructor(props) {
		super(props) 
	}

	render() {
		const store = this.props.store 
		return <div className="page">
                Don't Settle! but Strive to be lazy!
                </div>
    }
}