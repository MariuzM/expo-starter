import { Stack } from 'expo-router';
import { useEffect } from 'react';

export default function SettingsLayout() {
  console.log('rendering AppLayout');

  useEffect(() => {
    return () => {
      console.log('AppLayout unmount');
    };
  }, []);

  return (
    <Stack
      screenOptions={{
        animation: 'ios',
        headerStyle: {
          backgroundColor: 'blue',
        },
        contentStyle: {
          backgroundColor: 'orange',
        },
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Settings' }} />
      <Stack.Screen name="page2" options={{ title: 'Page 2' }} />
    </Stack>
  );
}
