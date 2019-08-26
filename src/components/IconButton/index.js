import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';

/* from app */
import styles from './styles';

const IconButton = () => {
  const initialState = {
    name: 'ios-arrow-back',
    size: 32,
    color: Constants.manifest.extra.textColor,
    style: null,
    onPress: () => {},
  };

  const [state] = useState(initialState);

  return (
    // アイコンをタップしたときのフィードバックを再現
    <TouchableOpacity style={[styles.button, state.style]} onPress={state.onPress()}>
      <Ionicons name={state.name} size={state.size} color={state.color} />
    </TouchableOpacity>
  );
};

export default IconButton;
