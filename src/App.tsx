import { registerRootComponent } from 'expo';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';

SplashScreen.preventAutoHideAsync();

// const TabNav = createBottomTabNavigator();

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    })();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return (
      <View
        style={{
          alignItems: 'center',
          backgroundColor: '#2D2E49',
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <View
        onLayout={onLayoutRootView}
        style={{
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <Text>Home Screen</Text>
      </View>
    </>
  );
};

registerRootComponent(App);
