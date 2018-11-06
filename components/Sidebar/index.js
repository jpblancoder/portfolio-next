import Link from "next/link";
import Header from "./Header";

const Sidebar = props => {
  return (
    <div className="sidebar">
      <Header />

      <div className="sidebar-action">
        {props.page === "index" ? (
          <Link as="/sites" href="/portfolio">
            <a className="btn btn-primary">
              <i className="fa fa-lg fa-briefcase" aria-hidden="true" /> <strong>Portfolio</strong>
            </a>
          </Link>
        ) : (
          <Link href="/">
            <a className="btn btn-primary">
              <i className="fa fa-lg fa-android" aria-hidden="true" /> <strong>About</strong>
            </a>
          </Link>
        )}{" "}
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
