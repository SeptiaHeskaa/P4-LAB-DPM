import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';

const ResetButton = ({ onReset }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onReset}>
        <Text style={styles.buttonText}>Reset Scores</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#4caf50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ResetButton;
