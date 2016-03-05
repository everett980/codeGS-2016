import React from 'react';
 
export default class SubComponentA extends React.Component {

	/**
	 * Create component HTML
	 * @return {[type]} [description]
	 */
	subscribe () {
		alert('We are subscribing!');
	}

  	render() {
	    return (
	    	<p style={{color : 'red'}}> {this.props.title} on {this.props.date}</p> 
	    	<button class="btn btn-submit" onClick="{this.subscribe.bind(this)}">Subscribe</button>
	    );
  	}
}
