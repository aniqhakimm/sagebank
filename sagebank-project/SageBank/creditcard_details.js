import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const CreditCard = () => {
    return (
      <ImageBackground
        source={require('./assets/creditcard.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
        imageStyle={styles.imageStyle}
      >
        <View style={styles.cardContent}>
          <Text style={styles.cardType}>VISA</Text>
          <Text style={styles.cardNumber}>1234 5678 9012 3456</Text>
          <View style={styles.cardDetails}>
            <Text style={styles.cardName}>John Cena</Text>
            <Text style={styles.cardExpiration}>Exp: 12/24</Text>
          </View>
        </View>
      </ImageBackground>
    );
  };
  
  const styles = StyleSheet.create({
    backgroundImage: {
      width: 300,
      height: 180,
      borderRadius: 10,
      overflow: 'hidden', // Ensures the border radius is applied to the image
      marginHorizontal:8,
    },
    imageStyle: {
      // Additional styling for the image if needed
    },
    cardContent: {
      padding: 20,
      alignItems: 'center',
    },
    cardType: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      color: 'white', // Set text color to contrast with the image background
    },
    cardNumber: {
      fontSize: 16,
      marginBottom: 10,
      color: 'white', // Set text color to contrast with the image background
    },
    cardDetails: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    cardName: {
      fontSize: 14,
      flex: 1,
      color: 'white', // Set text color to contrast with the image background
    },
    cardExpiration: {
      fontSize: 14,
      color: 'white', // Set text color to contrast with the image background
    },
  });
  
  export default CreditCard;
  