import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const VerificationCompletePage = () => {
  const navigation = useNavigation();

  const handleBackHome = () => {
    // Navigate back to the homepage when the button is pressed
    navigation.navigate('BankingAppPage');
  };

  return (
    <LinearGradient
      colors={['#4D708F', '#93816D']}
      style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Verification Complete</Text>
        <Text style={styles.message}>Your transaction has been successfully verified.</Text>
        <TouchableOpacity style={styles.button} onPress={handleBackHome}>
          <Text style={styles.buttonText}>Return to Home</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
    color: 'white',
  },
  button: {
    backgroundColor: '#FFF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4D708F',
  },
});

export default VerificationCompletePage;
