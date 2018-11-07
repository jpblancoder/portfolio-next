import React from "react";

class Info extends React.Component {
  render() {
    if (!this.props.site) return null;
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
          <span role="img" aria-label="gear">
            ⚙️
          </span>{" "}
          <span>Technology</span>
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
          <span role="img" aria-label="check mark">
            ✅
          </span>{" "}
          <span>Features</span>
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
          <span role="img" aria-label="copyright">
            ©
          </span>{" "}
          <span>Copyright</span>
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
