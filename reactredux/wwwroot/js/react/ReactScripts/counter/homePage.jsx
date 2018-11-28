import React from "react";
import { Link } from 'react-router-dom';


export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h2>Introduction of home page</h2>
                
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/hello">
                        Go To Test
                    </Link>
                    <br />
                    <br/>
                    <Link className="btn btn-primary" to="/counter">
                        Go To Counter
                    </Link>
                </div>
                
            </div>
        )
    }
}