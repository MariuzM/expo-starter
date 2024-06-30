import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: 'blue',
          },
          contentStyle: {
            backgroundColor: 'orange',
          },
          headerTintColor: 'white',
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="page1" />
      </Stack>
    </>
  );
}
