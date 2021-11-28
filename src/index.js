

import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay'
import Loader from './components/Loader';


class App extends React.Component {

    state = {lat: null, errorMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Loader message="Please accept location request" />
    }
    
    render() {
        return(
            <div className = "border red">
                {this.renderContent()};
            </div>
        )

    }
}



// Take the React component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root')
);












