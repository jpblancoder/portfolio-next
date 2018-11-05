const SiteInfo = () => (
  <div className="project-wrapper">
    <div ng-if="vm.selectedSite.tech.length > 0">
      <h3 className="project-subtitle">
        <i className="fa fa-cog" /> Technology
      </h3>
      <ul className="project-tech">
        <li ng-repeat="t in vm.selectedSite.tech">
          <span ng-bind="t" />
        </li>
      </ul>
    </div>

    <div ng-if="vm.selectedSite.features.length > 0">
      <h3 className="project-subtitle">
        <i className="fa fa-check-circle" /> Features
      </h3>
      <ul className="project-tech">
        <li ng-repeat="f in vm.selectedSite.features">
          <span ng-bind="f" />
        </li>
      </ul>
    </div>

    <div ng-if="vm.selectedSite.category">
      <h3 className="project-subtitle">
        <i className="fa fa-copyright" /> Copyright
      </h3>
      <div className="project-copyright">
        <div ng-if="vm.selectedSite.category === 'morneau'">
          Site Design &amp; Programming:{" "}
          <a href="http://www.morneaushepell.com" target="_blank" rel="noopener noreferrer">
            Morneau Shepell
          </a>
          .
        </div>
        <div ng-if="vm.selectedSite.category === 'shepell'">
          Site Design &amp; Programming:{" "}
          <a href="http://www.shepellfgi.com" target="_blank" rel="noopener noreferrer">
            Shepell&middot;fgi
          </a>
          .
        </div>
        <div ng-if="vm.selectedSite.category === 'quidnovis'">
          Site Design &amp; Programming:{" "}
          <a href="http://www.quidnovis.net/" target="_blank" rel="noopener noreferrer">
            Quid Novis Internet Productions
          </a>
          .
        </div>
      </div>
    </div>
  </div>
);

export default SiteInfo;
