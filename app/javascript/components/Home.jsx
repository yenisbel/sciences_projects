import React from 'react';
import { Link } from "react-router-dom";

export default() => (
    <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
        <div className="bg-transparent p-5 rounded-lg m-3">
            <div className="container">
                <h1 className="display-4">Science Projects</h1>
                <p className="lead"> An amazing list of science projects for the best time at home with your kids.
                </p>
                <hr className="my-4"/>
                <Link to="/projects" className="btn btn-lg custom-button" role="button">View Projects</Link>
            </div>
        </div>
    </div>
);