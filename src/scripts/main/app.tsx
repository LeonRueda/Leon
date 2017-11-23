/**
 * Created by pedro.rueda on 13/10/2017.
 */
require("Style/all.scss");
import * as React from "react";
const image = require("Images/leon-main.jpg");

export interface HelloProps { compiler: string; framework: string; }

export class App extends React.Component<HelloProps, {}> {

    render () {
        return (
            <div className="main-container">
                <img src={image}/>
                <h1>León Rueda</h1>
                <h2>Front End Engineer</h2>
            </div>
        )
    }
}
