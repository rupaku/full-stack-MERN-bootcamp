import React from "react"

const Base = ({
  title = "My Title",
  description = "My description",
  className = "bg-dark text-white p-4",
  children,
}) => (
  <div>
    <div className="container-fluid">
      <div className="jumbotron bg-dark text-white text-center">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
      <footer className="footer bg-dark mt-auto py-3">
        <div className="container-fluid">
          <h4>If you got any questions</h4>
          <button className="btn btn-warning btn-lg">Contact us</button>
        </div>
        <div className="container">
          <span className="text-muted">
            <span className="text-white">Bootstrap</span> course
          </span>
        </div>
      </footer>
    </div>
  </div>
)

export default Base
