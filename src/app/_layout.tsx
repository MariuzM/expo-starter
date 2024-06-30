import { Tabs } from 'expo-router';
import { useEffect } from 'react';

export default function RootLayout() {
  console.log('rendering AppLayout');

  useEffect(() => {
    return () => {
      console.log('AppLayout unmount');
    };
  }, []);

  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="page1" options={{ title: 'Page 1' }} />
      <Tabs.Screen name="settings" options={{ headerShown: false }} />
    </Tabs>
  );
}
