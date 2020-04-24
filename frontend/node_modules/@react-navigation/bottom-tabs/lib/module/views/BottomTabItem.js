function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { View, TouchableWithoutFeedback, Animated, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Color from 'color';
import TabBarIcon from './TabBarIcon';
export default function BottomTabBarItem({
  focused,
  route,
  label,
  icon,
  button = (_ref) => {
    let {
      children,
      style
    } = _ref,
        rest = _objectWithoutProperties(_ref, ["children", "style"]);

    return /*#__PURE__*/React.createElement(TouchableWithoutFeedback, rest, /*#__PURE__*/React.createElement(View, {
      style: style
    }, children));
  },
  accessibilityLabel,
  testID,
  onPress,
  onLongPress,
  horizontal,
  activeTintColor: customActiveTintColor,
  inactiveTintColor: customInactiveTintColor,
  activeBackgroundColor = 'transparent',
  inactiveBackgroundColor = 'transparent',
  showLabel = true,
  showIcon = true,
  allowFontScaling,
  labelStyle,
  style
}) {
  const {
    colors
  } = useTheme();
  const activeTintColor = customActiveTintColor === undefined ? colors.primary : customActiveTintColor;
  const inactiveTintColor = customInactiveTintColor === undefined ? Color(colors.text).mix(Color(colors.card), 0.5).hex() : customInactiveTintColor;

  const renderLabel = ({
    focused
  }) => {
    if (showLabel === false) {
      return null;
    }

    const color = focused ? activeTintColor : inactiveTintColor;

    if (typeof label === 'string') {
      return /*#__PURE__*/React.createElement(Animated.Text, {
        numberOfLines: 1,
        style: [styles.label, {
          color
        }, showIcon && horizontal ? styles.labelBeside : styles.labelBeneath, labelStyle],
        allowFontScaling: allowFontScaling
      }, label);
    }

    if (typeof label === 'string') {
      return label;
    }

    return label({
      focused,
      color
    });
  };

  const renderIcon = ({
    focused
  }) => {
    if (showIcon === false || icon === undefined) {
      return null;
    }

    const activeOpacity = focused ? 1 : 0;
    const inactiveOpacity = focused ? 0 : 1;
    return /*#__PURE__*/React.createElement(TabBarIcon, {
      route: route,
      size: horizontal ? 17 : 24,
      activeOpacity: activeOpacity,
      inactiveOpacity: inactiveOpacity,
      activeTintColor: activeTintColor,
      inactiveTintColor: inactiveTintColor,
      renderIcon: icon,
      style: horizontal ? styles.iconHorizontal : styles.iconVertical
    });
  };

  const scene = {
    route,
    focused
  };
  const backgroundColor = focused ? activeBackgroundColor : inactiveBackgroundColor;
  return button({
    onPress,
    onLongPress,
    testID,
    accessibilityLabel,
    accessibilityRole: 'button',
    accessibilityStates: focused ? ['selected'] : [],
    style: [styles.tab, {
      backgroundColor
    }, horizontal ? styles.tabLandscape : styles.tabPortrait, style],
    children: /*#__PURE__*/React.createElement(React.Fragment, null, renderIcon(scene), renderLabel(scene))
  });
}
const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center'
  },
  tabPortrait: {
    justifyContent: 'flex-end',
    flexDirection: 'column'
  },
  tabLandscape: {
    justifyContent: 'center',
    flexDirection: 'row'
  },
  iconVertical: {
    flex: 1
  },
  iconHorizontal: {
    height: '100%'
  },
  label: {
    textAlign: 'center',
    backgroundColor: 'transparent'
  },
  labelBeneath: {
    fontSize: 11,
    marginBottom: 1.5
  },
  labelBeside: {
    fontSize: 12,
    marginLeft: 20
  }
});
//# sourceMappingURL=BottomTabItem.js.map