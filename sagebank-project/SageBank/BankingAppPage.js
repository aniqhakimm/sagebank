import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import CreditCard from './creditcard_details';

const BankingAppPage = () => {

  const navigation = useNavigation(); // Initialize navigation

  const handleVerifyTransactions = () => {
    // Navigate to the verification page
    navigation.navigate('VerificationPage');
  };
  return (
    <LinearGradient
      colors={['#4D708F', '#93816D']}
      style={styles.container}>
      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.content}>
  {/* Welcome message */}
  <Text style={styles.welcomeText}>
    Welcome back,{' '}
    <Text style={styles.bold}>Zahandre</Text>
  </Text>
  
  {/* Balance display */}
  <View style={styles.balanceContainer}>
    <Text style={styles.balanceLabel}>My Balance</Text>
    <Text style={styles.balanceAmount}>RM10.00</Text>
  </View>
  
  {/* Buttons for withdraw and deposit */}
  <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.button}>
      <MaterialIcons name="arrow-downward" size={24} color="white" />
      <Text style={styles.buttonText}>Withdraw</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
      <MaterialIcons name="arrow-upward" size={24} color="white" />
      <Text style={styles.buttonText}>Deposit</Text>
    </TouchableOpacity>
  </View>
  
  {/* Verify transactions button */}
  <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyTransactions}>
    <MaterialIcons name="check-circle" size={20} color="white" />
    <Text style={styles.verifyButtonText}>Verify Transactions</Text>
  </TouchableOpacity>
  
  {/* Manage Card section */}
  <View style={styles.manageCardContainer}>
    <Text style={styles.cardTitle}>Manage Card</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <CreditCard style={styles.card} />
      <CreditCard style={styles.card} />
      <CreditCard style={styles.card} />
    </ScrollView>
  </View>
  
  <View>
    <Text style={styles.transactionHistoryTitle}>Transaction History</Text>
  </View>
  
  <View style={styles.transactionHistoryContainer}>
    {/* Placeholder for transaction history */}
    <View style={styles.transactionItem}>
      {/* Circle logo */}
      <View style={styles.logoContainer}>
        <View style={styles.logo}></View>
      </View>
      {/* Transaction details */}
      <View style={styles.transactionDetails}>
        <Text style={styles.transactionCompanyName}>Apele</Text>
        <Text style={styles.transactionDescription}>Transaction details</Text>
        <Text style={styles.transactionDateTime}>9:10PM | 3/24/2024</Text>
      </View>
      {/* Amount */}
      <Text style={styles.transactionAmount}>+$20.00</Text>
    </View>
    {/* Add more transaction items as needed */}
    {/* Placeholder for transaction history */}
    <View style={styles.transactionItem}>
      {/* Circle logo */}
      <View style={styles.logoContainer}>
        <View style={styles.logo}></View>
      </View>
      {/* Transaction details */}
      <View style={styles.transactionDetails}>
        <Text style={styles.transactionCompanyName}>Choca Chola</Text>
        <Text style={styles.transactionDescription}>Transaction details</Text>
        <Text style={styles.transactionDateTime}>5:56PM | 3/24/2024</Text>
      </View>
      {/* Amount */}
      <Text style={styles.transactionAmount}>+$20.00</Text>
    </View>
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
    paddingBottom: 20, // Adjust as needed
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 80, // Adjust as needed
  },
  bold: {
    fontWeight: 'bold',
  },  
  welcomeText: {
    fontSize: 20,
    marginBottom: 25,
    color: 'white',
  },
  balanceContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  balanceLabel: {
    fontSize: 16,
    color: 'white',
  },
  balanceAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 15,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(212, 212, 212, 0.2)',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginHorizontal: 10,
  },
  buttonText: {
    marginLeft: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  verifyButton: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: 'rgba(212, 212, 212, 0.2)',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  verifyButtonText: {
    marginLeft: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  manageCardContainer: {
    width: '100%',
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
  },
  card: {
    width: 300, // Adjust the width as needed
    height: 180, // Adjust the height as needed
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  transactionHistoryTitle: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
    alignSelf: 'flex-start', // Align to the left
  },
  separator: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    width: '100%',
    marginBottom: 10,
  },
  transactionHistoryContainer: {
    width: '100%',
    backgroundColor: 'white', // Add white background color
    borderRadius: 10, // Optionally, add border radius for rounded corners
    marginTop:5,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    marginTop:5,
  },
  logoContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 20,
    height: 20,
    backgroundColor: 'blue', // Example background color for the logo
    borderRadius: 10,
  },
  transactionDetails: {
    flex: 1,
    marginRight: 10,
  },
  transactionCompanyName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionDescription: {
    fontSize: 14,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight:5,
  },
  transactionDateTime: {
    fontSize: 14,
    color: 'gray',
  },
});

export default BankingAppPage;
