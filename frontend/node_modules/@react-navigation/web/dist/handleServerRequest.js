'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = handleServerRequest;

var _core = require('@react-navigation/core');

function handleServerRequest(Router, pathWithLeadingSlash, query) {
  const path = pathWithLeadingSlash.slice(1);

  // Get initial action from the URL
  const navigationAction = Router.getActionForPathAndParams(path, query) || _core.NavigationActions.init();

  // Get state from reducer
  const navigationState = Router.getStateForAction(navigationAction);

  const actionSubscribers = new Set();

  // Prepare top-level navigation prop
  let navigation = null;
  function getCurrentNavigation() {
    return navigation;
  }

  navigation = (0, _core.getNavigation)(Router, navigationState, () => {}, actionSubscribers, () => ({}), getCurrentNavigation);

  // Get title from active screen options
  const activeKey = navigationState.routes[navigationState.index].key;
  const activeChildNavigation = navigation.getChildNavigation(activeKey);
  const options = Router.getScreenOptions(activeChildNavigation);
  const title = options.title || options.headerTitle;

  return { navigation, title, options };
}