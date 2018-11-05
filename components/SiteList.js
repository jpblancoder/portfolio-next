const SiteList = () => (
  <ul className="list-unstyled sidebar-list-sites clearfix">
    <li ng-repeat="(cat, value) in vm.projects | groupBy: 'category'">
      <h2 className="text-capitalize">
        <a href="/todo" ui-sref="sites({ categoryID: cat, projectID: null })">
          <i className="sidebar-cat-link" ng-class="vm.categoryClass(cat)" /> <span ng-bind="cat" />
        </a>
      </h2>
      <div ng-show="vm.isCategorySelected(cat)">
        <select
          className="sidebar-select hidden-md hidden-lg hidden-xl"
          ng-change="vm.setProjectSelected(cat, vm.selectedSiteOption.project)"
          ng-options="site.title for site in value"
          ng-model="vm.selectedSiteOption"
        >
          <option value="">Select project...</option>
        </select>
        <ul className="hidden-xs hidden-sm">
          <li ng-repeat="site in value">
            <a href="/todo" ui-sref="sites({ categoryID: cat, projectID: site.project })">
              <span ng-bind="site.title" />
            </a>
          </li>
        </ul>
      </div>
    </li>
  </ul>
);

export default SiteList;
