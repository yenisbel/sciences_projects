import React from 'react';
import { Link } from 'react-router-dom';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = { project: { materials: "" } };
        this.addHtmlEntities = this.addHtmlEntities.bind(this);
    }

    componentDidMount(){
        const {
            match: {
              params: { id }
            }
          } = this.props;
      
          const url = `/api/v1/show/${id}`;
      
          fetch(url)
            .then(response => {
              if (response.ok) {
                return response.json();
              }
              throw new Error("Network response was not ok.");
            })
            .then(response => this.setState({ project: response }))
            .catch(() => this.props.history.push("/projects"));
    }

    addHtmlEntities(str) {
        return String(str)
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">");
    }

    render() {
        const { project } = this.state;
        let materialList = "No materials available";
    
        if (project.materials.length > 0) {
          materialList = project.materials
            .split(",")
            .map((material, index) => (
              <li key={index} className="list-group-item">
                {material}
              </li>
            ));
        }

        const projectInstruction = this.addHtmlEntities(project.instruction);

        return (
            <div className="">
              <div className="hero position-relative d-flex align-items-center justify-content-center">
                <img
                  src={project.image}
                  alt={`${project.name} image`}
                  className="img-fluid position-absolute"
                />
                <div className="overlay bg-dark position-absolute" />
                <h1 className="display-4 position-relative text-white">
                  {project.name}
                </h1>
              </div>
              <div className="container py-5">
                <div className="row">
                  <div className="col-sm-12 col-lg-3">
                    <ul className="list-group">
                      <h5 className="mb-2">Materials</h5>
                      {materialList}
                    </ul>
                  </div>
                  <div className="col-sm-12 col-lg-7">
                    <h5 className="mb-2"> Instructions step by step</h5>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `${projectInstruction}`
                      }}
                    />
                  </div>
                  <div className="col-sm-12 col-lg-2">
                    <button type="button" className="btn btn-danger">
                      Delete Project
                    </button>
                  </div>
                </div>
                <Link to="/projects" className="btn btn-link">
                  Back to projects
                </Link>
              </div>
            </div>
        );
    }
}
export default Project;