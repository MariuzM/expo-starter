import { useFonts } from 'expo-font';
import { Tabs } from 'expo-router/tabs';

export default function AppLayout() {
  const [fontsLoaded] = useFonts({
    Angelina: require('../assets/fonts/Angelina.otf'),
    Angelina2: require('../assets/fonts/Angelina.otf'),
  });

  if (!fontsLoaded) {
    return null;
  }

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
