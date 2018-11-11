import { library, config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // add copied CSS styles manually

import {
  faAndroid,
  faTwitterSquare,
  faLinkedin,
  faInstagram,
  faGithubSquare,
  faMedium
} from "@fortawesome/free-brands-svg-icons";
library.add(faAndroid, faTwitterSquare, faLinkedin, faInstagram, faGithubSquare, faMedium);

import {
  faBriefcase,
  faFileAlt,
  faFolder,
  faFolderOpen,
  faExternalLinkAlt,
  faCog,
  faCheckCircle,
  faCopyright
} from "@fortawesome/free-solid-svg-icons";
library.add(faBriefcase, faFileAlt, faFolder, faFolderOpen, faExternalLinkAlt, faCog, faCheckCircle, faCopyright);
