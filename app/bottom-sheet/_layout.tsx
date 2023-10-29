import { Stack } from 'expo-router/stack';

export default function BottomSheetLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Bottom Sheet' }} />
    </Stack>
  );
}
