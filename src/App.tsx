import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

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

  if (!appIsReady) {
    return (
      <View
        style={{
          alignItems: 'center',
          backgroundColor: 'orange',
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
      <StatusBar style="dark" />
      <View
        style={{
          alignItems: 'center',
          backgroundColor: '#556ad3',
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
