import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

const TabNav = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <TabNav.Navigator>
          <TabNav.Screen name="Home" component={HomeScreen} />
        </TabNav.Navigator>
      </NavigationContainer>
    </>
  );
};

registerRootComponent(App);

const HomeScreen = () => {
  return (
    <View>
      <Text>122</Text>
      <Text>122</Text>
      <Text>122</Text>
      <Text>122</Text>
      <Text>122</Text>
    </View>
  );
};
