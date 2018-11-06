import React from "react";
import Router from "next/router";
import Link from "next/link";

class Nav extends React.Component {
  render() {
    return (
      <ul className="list-unstyled sidebar-list-sites clearfix">
        {Object.keys(this.props.sites).map(this.renderCategoryLink)}
      </ul>
    );
  }
  renderCategoryLink = cat => {
    return (
      <li key={cat}>
        <h2 className="text-capitalize">
          <Link href={`/sites/${cat}`}>
            <a>
              <i className={`sidebar-cat-link ${this.classIconFolder(cat, this.props.category)}`} /> {cat}
            </a>
          </Link>
        </h2>
        {this.renderSiteLinks(cat)}
      </li>
    );
  };
  renderSiteLinks = cat => {
    const handleChange = event => this.handleSelectOption(cat, event.currentTarget.value);
    const keys = Object.keys(this.props.sites[cat]);
    return cat !== this.props.category ? null : (
      <div>
        <select className="sidebar-select hidden-md hidden-lg hidden-xl" onBlur={handleChange} onChange={handleChange}>
          <option value="">Select project...</option>
          {keys.map(site => this.renderSelectOption(this.props.sites[cat][site]))}
        </select>
        <ul className="hidden-xs hidden-sm">{keys.map(site => this.renderSiteLink(this.props.sites[cat][site]))}</ul>
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
    const route = `/sites/${cat}${slash}${value}`;
    Router.push(route);
  };
  classIconFolder = (current, selected) => {
    return current === selected ? "fa fa-folder-open-o" : "fa fa-folder-o";
  };
}

export default Nav;
