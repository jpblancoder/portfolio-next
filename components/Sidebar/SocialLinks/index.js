import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialLinks = () => (
  <ul className="sidebar-social-list">
    <li>
      <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/jpblancoder">
        <span role="img" aria-label="bird" title="Twitter">
          <FontAwesomeIcon icon={["fab", "twitter-square"]} size="md" />
        </span>
      </a>
    </li>{" "}
    <li>
      <a target="_blank" rel="noopener noreferrer" href="https://ca.linkedin.com/in/jpblanchette">
        <span role="img" aria-label="chain" title="LinkedIn">
          <FontAwesomeIcon icon={["fab", "linkedin"]} size="md" />
        </span>
      </a>
    </li>{" "}
    <li>
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/jpblancoder/">
        <span role="img" aria-label="camera" title="Instagram">
          <FontAwesomeIcon icon={["fab", "instagram"]} size="md" />
        </span>
      </a>
    </li>{" "}
    <li>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/jpblancoder">
        <span role="img" aria-label="octopus" title="GitHub">
          <FontAwesomeIcon icon={["fab", "github-square"]} size="md" />
        </span>
      </a>
    </li>{" "}
    <li>
      <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@jpblancoder">
        <span role="img" aria-label="octopus" title="Medium">
          <FontAwesomeIcon icon={["fab", "medium"]} size="md" />
        </span>
      </a>
    </li>
  </ul>
);

export default SocialLinks;
