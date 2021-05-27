import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export const SearchInput = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textBackGrund}>
        <TextInput />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  textBackGrund: {
    backgroundColor: '#F3F1F3',
    borderRadius: 40,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
