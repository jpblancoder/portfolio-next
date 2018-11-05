import Link from "next/link";
import Header from "../components/Header.js";

const Sidebar = props => {
  const pages = {
    index: {
      icon: "fa-briefcase",
      label: "Portfolio",
      href: "/sites"
    },
    sites: {
      icon: "fa-android",
      label: "About",
      href: "/"
    }
  };
  const anchor = pages[props.page];

  return (
    <div className="sidebar">
      <Header />

      <div className="sidebar-action">
        <Link href={anchor.href}>
          <a className="btn btn-primary">
            <i className={`fa fa-lg ${anchor.icon}`} aria-hidden="true" /> <strong>{anchor.label}</strong>
          </a>
        </Link>{" "}
        <a
          className="btn btn-success"
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/document/d/16S1HfHxvKnCP8eointMSnB7t4V_3CPD_5zSNWWclWfM/edit?usp=sharing"
        >
          <i className="fa fa-lg fa-file-text-o" aria-hidden="true" /> <strong>Resume</strong>
        </a>
      </div>

      {props.children}
    </div>
  );
};

export default Sidebar;
