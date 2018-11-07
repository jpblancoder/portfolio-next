import React from "react";
import Router from "next/router";
import Link from "next/link";

class Nav extends React.Component {
  render() {
    const { sites, category } = this.props;
    return (
      <ul className="list-unstyled sidebar-list-sites clearfix">
        {Object.keys(sites).map(cat => this.renderCategoryLink(sites, category, cat))}
      </ul>
    );
  }
  renderCategoryLink = (sites, selected, category) => {
    return (
      <li key={category}>
        <h2 className="text-capitalize">
          <Link href={`/sites/${category}`}>
            <a>
              <span role="img" aria-label="folder">
                {category === selected ? "📂" : "📁"}
              </span>{" "}
              {category}
            </a>
          </Link>
        </h2>
        {this.renderSiteLinks(sites, selected, category)}
      </li>
    );
  };
  renderSiteLinks = (sites, selected, category) => {
    const handleChange = event => this.handleSelectOption(category, event.currentTarget.value);
    const keys = Object.keys(sites[category]);
    return category !== selected ? null : (
      <div>
        <select className="sidebar-select hidden-md hidden-lg hidden-xl" onBlur={handleChange} onChange={handleChange}>
          <option value="">Select project...</option>
          {keys.map(site => this.renderSelectOption(sites[category][site]))}
        </select>
        <ul className="hidden-xs hidden-sm">{keys.map(site => this.renderSiteLink(sites[category][site]))}</ul>
      </div>
    );
  };
  renderSelectOption = site => {
    return (
      <option key={site.project} value={site.project}>
        {site.title}
      </option>
    );
  };
  renderSiteLink = site => {
    const url = `${site.category}/${site.project}`;
    return (
      <li key={url}>
        <Link href={`/sites/${url}`}>
          <a>{site.title}</a>
        </Link>
      </li>
    );
  };
  handleSelectOption = (cat, value) => {
    const slash = value.length > 0 ? "/" : "";
    const asPath = `/portfolio/${cat}${slash}${value}`;
    Router.push({
      asPath: asPath,
      pathname: "/sites",
      query: { category: cat, site: value }
    });
  };
}

export default Nav;
