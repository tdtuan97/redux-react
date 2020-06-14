import React, {Component} from "react";
import {Header} from "../../components/layout/Header";

class App extends Component{
    render() {
        let musicBackground = require("./images/background.jpg");
        return (
            <div className="music-layout" style={{ backgroundImage: `url(${musicBackground})` }}>
                <Header transparent={true}/>
                <div className="music-container">{this.props.children}</div>
            </div>
        );
    }
}

export default App