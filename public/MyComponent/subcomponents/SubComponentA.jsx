import React from 'react';
 
export default class SubComponentA extends React.Component {

	/**
	 * Create component HTML
	 * @return {[type]} [description]
	 */

  	render() {
	    return (
	    	<div>
	    	<span style={{color : 'white'}}> {this.props.evt.title} on {this.props.evt.date} </span> 
	    	<button className="btn btn-submit btn-xs" onClick={this.subscribe.bind(this)}>Subscribe</button>
	    	</div>
	    );
  	}
	subscribe () {
		alert('We are subscribing here!');

		//change button to say subscribed
		//have an event created that waits until the appropriate dateTime
		//when the time comes have the locationUrl popup
	}
}
