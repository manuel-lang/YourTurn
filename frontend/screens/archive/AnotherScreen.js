import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import Collapsible from 'react-native-collapsible';

import { Button } from 'react-native-material-ui';
import { Checkbox } from 'react-native-material-ui'
import { Badge, Icon, Avatar } from 'react-native-material-ui';
import { RadioButton } from 'react-native-material-ui';
import { ActionButton } from 'react-native-material-ui';

import Colors from '../../constants/Colors';

export default function OwnScreen() {

  const [showPic, setShowPic] = React.useState(true);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColorLight,
  },
  contentContainer: {
    paddingTop: 15,
  },
});
