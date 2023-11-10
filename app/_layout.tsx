import { Tabs } from 'expo-router/tabs';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function AppLayout() {
  return (
    <KeyboardProvider>
      <Tabs
      // tabBar={() => {
      //   return null;
      // }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Chat',
            // tabBarHideOnKeyboard: true,
          }}
        />
      </Tabs>
    </KeyboardProvider>
  );
}
