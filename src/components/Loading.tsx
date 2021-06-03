import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

export const Loading = () => {
  return (
    <View style={localStyles.activityContainer}>
      <ActivityIndicator color="grey" size={50} />
      <Text>Cargando...</Text>
    </View>
  );
};

const localStyles = StyleSheet.create({
  activityContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
