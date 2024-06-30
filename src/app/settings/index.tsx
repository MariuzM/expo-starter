import { router } from 'expo-router';
import { Button, View } from 'react-native';

export default function SettingsPage() {
  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <View style={{ marginTop: 100 }}>
        <Button title="Go to Page 2" onPress={() => router.push('/settings/page2')} />
      </View>
    </View>
  );
}
