import Link from "next/link";
import Header from "./Header";
import map from "../../lib/routes";

const Sidebar = props => {
  return (
    <div className="sidebar">
      <Header />

      <div className="sidebar-action">
        {props.page === "index" ? (
          <Link as={map.sites.route} href={map.sites.page}>
            <a className="btn btn-primary">
              <span role="img" aria-label="briefcase">
                🖥
              </span>{" "}
              <strong>Portfolio</strong>
            </a>
          </Link>
        ) : (
          <Link href={map.index.route}>
            <a className="btn btn-primary">
              <span role="img" aria-label="nerd">
                🤓
              </span>{" "}
              <strong>About</strong>
            </a>
          </Link>
        )}{" "}
        <a
          className="btn btn-success"
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/document/d/16S1HfHxvKnCP8eointMSnB7t4V_3CPD_5zSNWWclWfM/edit?usp=sharing"
        >
          <span role="img" aria-label="paper">
            📄
          </span>{" "}
          <strong>Resume</strong>
        </a>
      </div>

      {props.children}
    </div>
  );
};

export default Sidebar;
