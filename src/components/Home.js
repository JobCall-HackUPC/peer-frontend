import React from 'react';
import './Home.css'

export default function Home() {

    return (
        <div className="container pt-5">
            <div className="jumbo pt-3 pb-3">
                <div className="row align-items-center" align="right">
                    <div className="col-sm-4">
                        <img src="/img/jobcall.png" width="30%" alt="Logo" />
                    </div>
                    <div className="col-sm-8" align="left">
                        <h1 align="left">Welcome to Jobcall!</h1>
                    </div>
                </div>
                <div className="container p-5">
                <div className="row" align="right"> This is the home page administration of Jobcall, where you can:</div>
                <ul>
                    <li>Create SpeedDating calls to possible future employees.</li>
                    <li>Search from a huge amount of tags to filter the labor market efficiently.</li>
                </ul>
                </div>
            </div>
        </div>
    );
}
