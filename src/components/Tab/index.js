import React from 'react';
import { View } from 'react-native';
import { BottomTabBar } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

/* from app */
import styles from './styles';

export const HomeTabIcon = ({ tintColor }) => {
  return (
    <Ionicons name='md-home' size={26} style={styles.icons} color={tintColor}/>
  );
};

export const SearchTabIcon = ({ tintColor }) => {
  return (
    <Ionicons name='md-search' size={26} style={styles.icons} color={tintColor}/>
  );
};

export const NotificationTabIcon = ({ tintColor }) => {
  return (
    <Ionicons name='md-heart' size={26} style={styles.icons} color={tintColor}/>
  );
};

export const MeTabIcon = ({ tintColor }) => {
  return (
    <Ionicons name='md-person' size={26} style={styles.icons} color={tintColor}/>
  );
};

export const TakeTabIcon = ({ tintColor }) => {
  return (
    <View style={styles.takeTab}>
      <View style={[styles.takeTabRounded, { borderColor: tintColor }]}>
        <Ionicons name='md-add' size={18} style={styles.takeTabIcon} color={tintColor}/>
      </View>
    </View>
  );
};

export const TabBar = BottomTabBar;
