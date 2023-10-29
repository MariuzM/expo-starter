import { Stack } from 'expo-router/stack';

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Page 1' }} />
      <Stack.Screen name="page2" options={{ title: 'Page 2' }} />
    </Stack>
  );
}
