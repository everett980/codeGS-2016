
import React from 'react';
 
export default class SubComponentA extends React.Component {

	/**
	 * Create component HTML
	 * @return {[type]} [description]
	 */

  	render() {
  		// let todayDate = (new Date(this.props.evt.date));
  		var styleSpan = {
  			color : 'white'
  		};
  		var title = this.props.evt.title;
  		var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }
    	var date = new Date(+this.props.evt.date).toLocaleDateString('en-US', options);

	    return (
	    	<div>
	    	<div class="row" id={title.slice(0,2)}>
	    		<p style={styleSpan} class="col-xs-8">
			    	<span> 
			    		{title}
			    	</span>
			    	<span > 
			    		{date}
			    	</span>
			    </p>
			    <div className="col-xs-4">
			    	<button id={title.slice(0,1)} className="btn btn-submit btn-xs" onClick={this.subscribe.bind(this)}>
			    		Subscribe
			    	</button>
		    	</div>
	    	</div>
	    	</div>
	    );
  	}
	subscribe () {
		let evt = this.props.evt
		setTimeout(function () {
            <h4>evt.title</h4>
			$( "#" + evt.title.slice(0,2) ).append('<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="//www.youtube.com/embed/ePbKGoIGAXY"></iframe></div></div><div class="col-sm-6">');
        }, evt.date - Date.now())
		$( "#" + evt.title.slice(0,1) ).html("Unsubscribe");
		console.log(this.props.evt.date - Date.now());

		//change button to say subscribed
		//have an event created that waits until the appropriate dateTime
		//when the time comes have the locationUrl popup
	}
}