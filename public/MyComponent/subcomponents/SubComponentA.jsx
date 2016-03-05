
import React from 'react';

var subscribed = false;
var subscription;
 
export default class SubComponentA extends React.Component {

	/**
	 * Create component HTML
	 * @return {[type]} [description]
	 */

  	render() {
  		// let todayDate = (new Date(this.props.evt.date));
  		var styleSpan = {
  			color : 'white',
			width: '66%',
			float: 'left'
  		};
  		var title = this.props.evt.title;
  		var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }
    	var date = new Date(+this.props.evt.date).toLocaleDateString('en-US', options);

	    return (
	    	<div id={title.slice(0,2)}>
		    	<div style={{width: '100%'}}>
		    		<div style={styleSpan} class="col-xs-8">
				    	<span> 
				    		{title}
				    	</span>
				    	<span > 
				    		{date}
				    	</span>
				    </div>
				    <div style={{width: '33%', float: 'right'}}>
				    	<button id={title.slice(0,1)} className="btn btn-submit btn-xs" onClick={this.subscribe.bind(this)}>
				    		Subscribe
				    	</button>
			    	</div>
		    	</div>
		    	<br/>
	    	</div>
	    );
  	}
	subscribe () {
		let evt = this.props.evt
		if (!subscribed) {
			subscribed = !subscribed;
			subscription = setTimeout(function () {
	            <h4>evt.title</h4>
				$( "#" + evt.title.slice(0,2) ).append('<div class="embed-responsive embed-responsive-16by9" style="clear:both"><iframe class="embed-responsive-item" src="//www.youtube.com/embed/4BmRUkjyYcA"></iframe></div></div><div class="col-xs-12">');
	        }, evt.date - Date.now())
			$( "#" + evt.title.slice(0,1) ).html("Unsubscribe");
			console.log(this.props.evt.date - Date.now());
		} else {
			clearTimeout(subscription);
			subscribed = !subscribed;
			$( "#" + evt.title.slice(0,1) ).html("Subscribe");
		}
	}
}
