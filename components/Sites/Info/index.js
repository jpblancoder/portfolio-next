import React from "react";

class Info extends React.Component {
  render() {
    const { tech, features, category } = this.props.site;

    return (
      <div className="project-wrapper">
        {this.renderTech(tech)}
        {this.renderFeatures(features)}
        {this.renderCategory(category)}
      </div>
    );
  }
  renderTech = tech => {
    return tech.length === 0 ? null : (
      <div>
        <h3 className="project-subtitle">
          <i className="fa fa-cog" /> Technology
        </h3>
        <ul className="project-tech">
          {Object.keys(tech).map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </div>
    );
  };
  renderFeatures = features => {
    return features.length === 0 ? null : (
      <div>
        <h3 className="project-subtitle">
          <i className="fa fa-check-circle" /> Features
        </h3>
        <ul className="project-tech">
          {Object.keys(features).map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>
    );
  };
  renderCategory = category => {
    return (
      <div>
        <h3 className="project-subtitle">
          <i className="fa fa-copyright" /> Copyright
        </h3>
        <div className="project-copyright">{this.renderCopyRight(category)}</div>
      </div>
    );
  };
  renderCopyRight = category => {
    switch (category) {
      case "morneau":
        return (
          <div>
            Site Design &amp; Programming:{" "}
            <a href="http://www.morneaushepell.com" target="_blank" rel="noopener noreferrer">
              Morneau Shepell
            </a>
            .
          </div>
        );
      case "shepell":
        return (
          <div>
            Site Design &amp; Programming:{" "}
            <a href="http://www.shepellfgi.com" target="_blank" rel="noopener noreferrer">
              Shepell&middot;fgi
            </a>
            .
          </div>
        );
      case "quidnovis":
        return (
          <div>
            Site Design &amp; Programming:{" "}
            <a href="http://www.quidnovis.net/" target="_blank" rel="noopener noreferrer">
              Quid Novis Internet Productions
            </a>
            .
          </div>
        );
    }
  };
}

export default Info;
