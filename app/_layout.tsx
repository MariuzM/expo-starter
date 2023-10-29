import { Tabs } from 'expo-router/tabs';

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="about" options={{ title: 'About' }} />
      <Tabs.Screen name="bottom-sheet" options={{ title: 'Bottom Sheet', headerShown: false }} />
      <Tabs.Screen name="drawer" options={{ title: 'Drawer', headerShown: false }} />
      <Tabs.Screen name="stack" options={{ title: 'Stack', headerShown: false }} />
    </Tabs>
  );
}
