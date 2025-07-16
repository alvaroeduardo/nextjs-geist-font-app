import React from 'react';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';

const HomeScreen = () => {
  const handlePress = () => {
    // For demonstration purposes, show a simple alert
    Alert.alert('Olá!', 'Bem-vindo à sua aplicação Expo React Native.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Expo App</Text>
      <Text style={styles.subtitle}>
        Esta aplicação foi criada usando Expo com React Native e TypeScript.
      </Text>
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Pressione Aqui</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 25,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500',
  },
});
