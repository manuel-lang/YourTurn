import * as React from 'react';
import { Text } from 'react-native';

export default function styleText(props) {
return <Text {...props} style={[props.style, { fontFamily: 'montserrat' }]} />;
}
