import React from "react";


export default class Hello extends React.Component {

    goBack= ()=> {
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h2>Test</h2>
                <button className="btn btn-primary" onClick={this.goBack}>
                    Back To Home
                </button>
            </div>
        )
    }
}