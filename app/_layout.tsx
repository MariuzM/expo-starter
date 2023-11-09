import { Tabs } from 'expo-router/tabs';

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Chat' }} />
      <Tabs.Screen name="chatv2" options={{ title: 'ChatV2' }} />
    </Tabs>
  );
}
