# Phase 4.5: Removing Angular

At this point, all code should be in either React components or pure js service files and all routes should be using react-router. We can now officially remove Angular's routing and any remaining code from our project!

* Rewrite/replace last Angular dependencies ($filter, $routeParams)
* Update index.html - Remove ng-app and ng-view and add React root element
* Replace Angular routing with react-router and add ReactDOM.render
* Prune webpack config
* Prune packages