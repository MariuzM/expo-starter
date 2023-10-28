import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const TabNav = createBottomTabNavigator();

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 3000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return <MySplashScreen />;
  }

  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      onLayout={onLayoutRootView}
    >
      <Text>SplashScreen Demo! 👋</Text>
    </View>
    // <>
    //   <StatusBar style="light" />
    //   <NavigationContainer>
    //     <TabNav.Navigator>
    //       <TabNav.Screen name="Home" component={HomeScreen} />
    //     </TabNav.Navigator>
    //   </NavigationContainer>
    // </>
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

const MySplashScreen = () => {
  return (
    <View
      style={{ alignItems: 'center', backgroundColor: 'red', flex: 1, justifyContent: 'center' }}
    >
      <Text>Splash Screen</Text>
    </View>
  );
};
