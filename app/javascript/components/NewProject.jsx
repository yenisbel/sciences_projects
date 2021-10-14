import { extend } from 'jquery';
import React from 'react';
import { Link} from 'react-router-dom';

class NewProject extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            materials: "",
            instruction: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
    }

    stripHtmlEntities(str) {
        return String(str)
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    
    onSubmit(event) {
        event.preventDefault();
        const url = "/api/v1/projects/create";
        const { name, materials, instruction } = this.state;

        if (name.length == 0 || materials.length == 0 || instruction.length == 0)
            return;

        const body = {
            name,
            materials,
            instruction: instruction.replace(/\n/g, "<br> <br>")
        };

        const token = document.querySelector('meta[name="csrf-token"]').content;
        fetch(url, {
            method: "POST",
            headers: {
            "X-CSRF-Token": token,
            "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Network response was not ok.");
            })
            .then(response => this.props.history.push(`/project/${response.id}`))
            .catch(error => console.log(error.message));
    }

    render (){
        return (
            <div className="container mt-5">
              <div className="row">
                <div className="col-sm-12 col-lg-6 offset-lg-3">
                  <h1 className="font-weight-normal mb-5">
                    Add a new science project to our projects collection.
                  </h1>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <label htmlFor="projectName">Project name</label>
                      <input
                        type="text"
                        name="name"
                        id="projectName"
                        className="form-control"
                        required
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="projectMaterials">Materials</label>
                      <input
                        type="text"
                        name="materials"
                        id="projectMaterials"
                        className="form-control"
                        required
                        onChange={this.onChange}
                      />
                      <small id="materialsHelp" className="form-text text-muted">
                        Separate each material with a comma.
                      </small>
                    </div>
                    <label htmlFor="instruction">Follow this Instructions</label>
                    <textarea
                      className="form-control"
                      id="instruction"
                      name="instruction"
                      rows="5"
                      required
                      onChange={this.onChange}
                    />
                    <button type="submit" className="btn custom-button mt-3">
                      Create Project
                    </button>
                    <Link to="/projects" className="btn btn-link mt-3">
                      Back to projects
                    </Link>
                  </form>
                </div>
              </div>
            </div>
        );
    }
}
export default NewProject