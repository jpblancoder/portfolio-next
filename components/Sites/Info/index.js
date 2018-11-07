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
          {tech.map((t, i) => (
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
          {features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>
    );
  };
  renderCategory = category => {
    const companies = {
      morneau: {
        href: "http://www.morneaushepell.com",
        label: "Morneau Shepell"
      },
      shepell: {
        href: "http://www.shepellfgi.com",
        label: "Shepell&middot;fgi"
      },
      quidnovis: {
        href: "http://www.quidnovis.net/",
        label: "Quid Novis Internet Productions"
      }
    };
    const { href, label } = companies[category];
    return !href || !label ? null : (
      <div>
        <h3 className="project-subtitle">
          <i className="fa fa-copyright" /> Copyright
        </h3>
        <div className="project-copyright">
          <div>
            Site Design &amp; Programming:{" "}
            <a href={href} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
            .
          </div>
        </div>
      </div>
    );
  };
}

export default Info;