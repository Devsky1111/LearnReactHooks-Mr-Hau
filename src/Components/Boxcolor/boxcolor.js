import React from "react";
import './boxcolor.scss'
class Boxcolorclass extends React.Component {
    constructor(props) {
        super(props)
        this.state = { color: "green" }
    }
    render() {
        return (
            <h2 className="testBox" style={{ backgroundColor: this.state.color }}>Phần tử này có backgroundcolor là {this.state.color}, sử dụng class Component</h2>
        )



    }
}

export default Boxcolorclass;