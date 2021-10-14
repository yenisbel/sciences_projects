import React from 'react';
import { Link } from 'react-router-dom';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        const url = "/api/v1/projects/index";
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error("Network response not ok.")
            })
            .then(response => this.setState({ projects: response }))
            .catch(() => this.props.history.push("/"));
    }
    render() {
        const { projects } = this.state;
        const allProjects = projects.map((project, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="card mb-4">
              <img
                src={project.image}
                className="card-img-top"
                alt={`${project.name} image`}
              />
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <Link to={`/project/${project.id}`} className="btn custom-button">
                  View Project
                </Link>
              </div>
            </div>
          </div>
        ));
        const noProject = (
          <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
            <h4>
              No science projects yet. Why not <Link to="/new_project">create one</Link>
            </h4>
          </div>
        );
        return (
            <>
              <section className="bg-transparent p-5 rounded-lg m-3 text-center">
                <div className="container py-5">
                  <h1 className="display-4">Science projects for all ages</h1>
                  <p className="lead text-muted">
                    We’ve pulled together our most fun and creative projects,
                    so there’s sure to be something
                    tempting for you to try.
                  </p>
                </div>
              </section>
              <div className="py-5">
                <main className="container">
                  <div className="text-right mb-3">
                    <Link to="/project" className="btn custom-button">
                      Create New Project
                    </Link>
                  </div>
                  <div className="row">
                    {projects.length > 0 ? allProjects : noProject}
                  </div>
                  <Link to="/" className="btn btn-link">
                    Home
                  </Link>
                </main>
              </div>
            </>
        );
    }
}

export default Projects;