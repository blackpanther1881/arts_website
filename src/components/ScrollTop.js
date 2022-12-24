import React, { Component } from "react";

class ScrollTop extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return <React.Fragment />
    }
}

export default ScrollTop