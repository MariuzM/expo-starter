import { Stack } from 'expo-router/stack';
import { Tabs } from 'expo-router/tabs';
import { KeyboardProvider } from 'react-native-keyboard-controller';

export default function AppLayout() {
  return (
    <KeyboardProvider>
      {/* <Stack /> */}

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
