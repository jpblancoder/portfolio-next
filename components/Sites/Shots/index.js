import React from "react";

class Shots extends React.Component {
  render() {
    if (!this.props.site) return null;
    const { title, year, url, intro, category, project, screens } = this.props.site;
    return (
      <div className="project-wrapper">
        {this.renderTitle(title, year)}
        {this.renderUrl(url)}
        {this.renderIntro(intro)}
        {this.renderScreens(category, project, screens)}
      </div>
    );
  }
  renderTitle = (title, year) => {
    return !title || !year ? null : (
      <h2 className="project-title">
        {title} <small>{year}</small>
      </h2>
    );
  };
  renderUrl = url => {
    return !url ? null : (
      <div className="project-url">
        <a target="_blank" rel="noopener noreferrer" href={url}>
          {url}{" "}
          <span role="img" aria-label="link">
            🔗
          </span>
        </a>
      </div>
    );
  };
  renderIntro = intro => {
    return !intro ? null : <div className="project-intro">{intro}</div>;
  };
  renderScreens = (category, project, screens) => {
    if (screens === 0) return null;

    let pics = [];
    for (let i = 1; i <= screens; i++) {
      pics.push(
        <a target="_blank" rel="noopener noreferrer" href={`/static/screens/${category}/${project}/source/${i}.png`}>
          <img
            className="img-responsive"
            src={`/static/screens/${category}/${project}/${i}.png`}
            alt={`${project} #${i}`}
          />
        </a>
      );
    }

    return (
      <div className="project-screens-wrap">
        <ul className="project-screens-list">
          {pics.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>
    );
  };
}

export default Shots;
