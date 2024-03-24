import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const VerificationPage = () => {
  const navigation = useNavigation();

  const handleTransactionPress = () => {
    // Navigate to the DetailsVerify page when a transaction is clicked
    navigation.navigate('DetailsVerify');
  };

  return (
    <LinearGradient
      colors={['#4D708F', '#93816D']}
      style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <Text style={styles.pageTitle}>Pending Verification</Text>
          {/* Placeholder for multiple cards with lists of transactions on hold */}
          <View style={styles.cardContainer}>
            {/* First card */}
            <TouchableOpacity style={styles.card} onPress={handleTransactionPress}>
              <Text style={styles.cardTitle}>RM10,000</Text>
              {/* List of transactions on hold */}
              <View style={styles.transactionList}>
                
                  <Text>HoneyBee Corp.</Text>
                  <Text> </Text>
                  <Text>Request by Anidri </Text>
               
                {/* Add more transactions as needed */}
              </View>
            </TouchableOpacity>
            {/* Add more cards as needed */}
             {/* First card */}
             <TouchableOpacity style={styles.card}>
              <Text style={styles.cardTitle}>RM3.99</Text>
              {/* List of transactions on hold */}
              <View style={styles.transactionList}>
                
                  <Text>MidasBuy PUBG</Text>
                  <Text> </Text>
                  <Text>Request by Kandre </Text>
               
                {/* Add more transactions as needed */}
              </View>
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
    paddingHorizontal: 15,
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
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  card: {
    width: '45%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  transactionList: {
    marginTop: 5,
  },
  transactionItem: {
    paddingVertical: 5,
  },
});

export default VerificationPage;
