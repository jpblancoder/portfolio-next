const Header = () => (
  <div>
    <div className="pic-hex pic-hex-point">
      <div className="pic-hex-2">
        <div className="pic-hex-3" />
      </div>
    </div>
    <h1 className="sidebar-title">Jean Pierre Blanchette</h1>
    <div className="sidebar-desc">
      <strong>
        <span className="sidebar-desc-line">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://en.wikipedia.org/wiki/Front-end_web_development"
            title="Wikipedia: Front-end web development"
          >
            Senior Front End Developer
          </a>
        </span>
        <div className="sidebar-desc-break visible-xs visible-md" />
        <span className="sidebar-desc-line">
          {" "}
          in{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.ca/maps/place/Toronto,+ON"
            title="Google Maps: Toronto"
          >
            Toronto, Ontario, Canada
          </a>
        </span>
      </strong>
    </div>
  </div>
);

export default Header;
