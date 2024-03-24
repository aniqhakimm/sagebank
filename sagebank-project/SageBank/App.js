// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import BankingAppPage from './BankingAppPage';
import VerificationPage from './VerificationPage';
import DetailsVerifyPage from './DetailsVerify';
import VerificationCompletePage from './VerificationComplete';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BankingAppPage">
        <Stack.Screen name="BankingAppPage" component={BankingAppPage} options={{ headerShown: false }} />
        <Stack.Screen name="VerificationPage" component={VerificationPage} />
        <Stack.Screen name="DetailsVerify" component={DetailsVerifyPage} />
        <Stack.Screen name="VerificationComplete" component={VerificationCompletePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
