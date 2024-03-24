import React from 'react';
import { StatusBar, Linking } from 'react-native'; 
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const DetailsVerifyPage = () => {
  const navigation = useNavigation();

  const handleDecline = () => {
    // Navigate back to the homepage when Decline is pressed
    navigation.navigate('BankingAppPage');
  };

  const handleVerify = () => {
    // Implement your logic to call someone when Verify is pressed
    // For example, let's say you want to call a specific phone number
    const phoneNumber = '447488883811'; // Replace with the desired phone number
    Linking.openURL(`tel:${phoneNumber}`);
    navigation.navigate('VerificationComplete');
  };

  return (
    <LinearGradient
      colors={['#4D708F', '#93816D']}
      style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <Text style={styles.pageTitle}>Transaction Details</Text>
          {/* Receipt details */}
          <View style={styles.receiptContainer}>
            <Text style={styles.amountText}>RM10,000</Text>
            <Text style={styles.receiptText}>Company Name: Honeybee Corp.</Text>
            <Text style={styles.receiptText}>Transaction ID: 123456</Text>
            <Text style={styles.receiptText}>Date: March 20, 2024</Text>
            <Text style={styles.receiptText}>Requested by: Anidri</Text>
            {/* Add more receipt details as needed */}
          </View>
          {/* Buttons for decline and request call */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.declineButton]} onPress={handleDecline}>
              <Text style={styles.buttonText}>Decline</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.requestCallButton]} onPress={handleVerify}>
              <Text style={styles.buttonTextVerify}>Verify</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  content: {
    flex: 1,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white', // Text color
  },
  receiptContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  receiptText: {
    fontSize: 16,
    marginBottom: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  amountText: {
    fontWeight: 'bold',
    color: '#4D708F',
    fontSize: 42,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 50,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonTextVerify: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  declineButton: {
    backgroundColor: '#4D708F',
  },
  requestCallButton: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#4D708F',
  },
});

export default DetailsVerifyPage;
