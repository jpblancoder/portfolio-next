const Shots = () => (
  <div className="project-wrapper" ng-if="vm.selectedSite !== null">
    <h2 className="project-title">
      {/* vm.selectedSite.title */} <small>{/* vm.selectedSite.year */}</small>
    </h2>

    <div ng-if="vm.selectedSite.url" className="project-url">
      <a target="_blank" href="{/* vm.selectedSite.url */}">
        {/* vm.selectedSite.url */} <i className="fa fa-external-link" />
      </a>
    </div>

    <div ng-if="vm.selectedSite.intro" className="project-intro">
      {/* vm.selectedSite.intro */}
    </div>

    <div ng-if="vm.selectedSite.screens > 0" className="project-screens-wrap">
      <ul className="project-screens-list">
        <li ng-repeat="i in vm.getNumberArray(vm.selectedSite.screens) track by $index">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/img/screens/{/* vm.selectedSite.category */}/{/* vm.selectedSite.project */}/source/{/* $index + 1 */}.png"
          >
            <img
              className="img-responsive"
              ng-src="/img/screens/{/* vm.selectedSite.category */}/{/* vm.selectedSite.project */}/{/* $index + 1 */}.png"
              alt="{/* vm.selectedSite.project */} #{/* $index + 1 */}"
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Shots;
