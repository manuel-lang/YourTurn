'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _core = require('@react-navigation/core');

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getTopNavigation = navigation => {
  const parent = navigation.dangerouslyGetParent();
  if (parent) {
    return getTopNavigation(parent);
  }
  return navigation;
};

class LinkWithNavigation extends _react.Component {
  render() {
    const {
      children,
      params,
      routeName,
      routeKey,
      navigation,
      action
    } = this.props;
    const topNavigation = getTopNavigation(navigation);
    const topRouter = topNavigation.router;
    const navAction = action || _core.NavigationActions.navigate({
      routeName,
      key: routeKey,
      params
    });
    if (!action && !routeName && !routeKey) {
      throw new Error('Must provide a routeName, routeKey, or a navigation action prop to <Link>');
    }
    if (action && routeKey) {
      throw new Error('Cannot specify a conflicting "routeKey" and a navigation "action" prop. Either use routeName with routeKey to specify a navigate action, or provide the specific navigation "action" prop.');
    }
    if (action && routeName) {
      throw new Error('Cannot specify a conflicting "routeName" and a navigation "action" prop. Either use routeName with routeKey to specify a navigate action, or provide the specific navigation "action" prop.');
    }
    const navActionResponse = topRouter.getStateForAction(navAction, topNavigation.state);
    const nextState = navActionResponse === null ? topNavigation.state : navActionResponse;
    const pathAndParams = topRouter.getPathAndParamsForState(nextState);
    const href = Object.keys(pathAndParams.params).length ? `/${pathAndParams.path}?${_queryString2.default.stringify(pathAndParams.params)}` : `/${pathAndParams.path}`;
    return _react2.default.createElement(
      'a',
      {
        href: href,
        onClick: e => {
          navigation.dispatch(navAction);
          e.preventDefault();
        }
      },
      children
    );
  }
}
const Link = (0, _core.withNavigation)(LinkWithNavigation);

exports.default = Link;