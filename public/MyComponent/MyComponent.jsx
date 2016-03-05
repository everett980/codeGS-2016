import React from 'react';
import SubComponentA from './subcomponents/SubComponentA';

/**
 * Component seed to demonstrate how to build a component.
 * For Component Lifecycle API go to:
 * https://facebook.github.io/react/docs/component-specs.html
 *
 * For component Documentation go to:
 * <INSERT DOC URL>
 */
export default class MyComponent extends React.Component {

    // ---------------------------------------------------
    // VIEW LIFECYCLE. THESE ARE CALLED BY REACT AUTOMATICALLY
    // ALL METHODS ARE OPTIONAL
    // ----------------------------------------------------
	constructor() {
		super();
		this.bindMethods();
        this.state = {userName:null};
	}

    componentDidMount() {
        var state = this.props.meta.state;
        this.setState(state);
        this.events = ['Fed Announcement', 'Jobs reports'];
    }

    // ---------------------------------------------------
    // MOVEMENT LIFECYCLE.
    // THESE ARE ALL CALLED BY THE LAYOUT MANAGER.
    // ----------------------------------------------------

	//Resize callbacks
	resizeStart() {
		console.log('resize started');
	}

	resize() {
		console.log('resize happening');
	}

	resizeStop() {
		console.log('resize stopped');
	}

	//drag callbacks
	dragStart() {
		console.log('drag started');
	}

	drag() {
		console.log('drag happening');
	}

	dragStop() {
		console.log('drag stopped');
	}

    // ---------------------------------------------------
    // ACTUAL CODE FOR COMPONENT THAT DOES ANYTHING
    // ----------------------------------------------------

    /**
     * Make the following methods accessible outside component
     * @return {[type]} [description]
     */
    bindMethods() {
        this.resizeStart = this.resizeStart.bind(this);
        this.resize = this.resize.bind(this);
        this.resizeStop = this.resizeStop.bind(this);
        this.dragStart = this.dragStart.bind(this);
        this.drag = this.drag.bind(this);
        this.dragStop = this.dragStop.bind(this);
    }

    assetFieldChanged(event) {
        var text = event.target.value;
        this.setState({userName:text}, function() {
            this.props.meta.state =  this.state;
        });
    }

    addSubscription(event) {
        var subscribedEvents = [];


    }

  	render() {
        const date = Date.now();
        let events = [{
            title:'Federal Reserve NY Risk Management', 
            date: date + 5001,
            url: "//www.youtube.com/embed/4BmRUkjyYcA"
            },
            {
            title: 'Jobs reports',
            date: date + 30004,
            url: "//www.youtube.com/embed/ePbKGoIGAXY"
            },
            {
            title: 'Company X Share Holder Report',
            date: date + 60009,
            url: "//www.youtube.com/embed/ePbKGoIGAXY"
            }].map((item, index) => <SubComponentA key={index} evt={item} />);

        return (

		<div className='my-component'>
            <br/>
            <h3> Event Subscriber </h3>
            <br/>
            <div>
                {events}
            </div>
        </div>
        );
    }
}
            // <input placeholder="Type your name" style={{width:'50%'}} type="text" value={this.state.userName} onChange={this.assetFieldChanged.bind(this)}></input>
            // <br/>
            // <p style={{color:'white'}}>Welcome: {this.state.userName} </p>