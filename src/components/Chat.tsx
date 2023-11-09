import { KeyboardAvoidingView, Platform, ScrollView, TextInput, View } from 'react-native';

export const Chat = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        backgroundColor: 'blue',
        flex: 1,
      }}
    >
      <ScrollView style={{ backgroundColor: 'orange' }}>
        <View style={{ height: 200, width: '100%', backgroundColor: 'red', marginBottom: 10 }} />
        <View style={{ height: 200, width: '100%', backgroundColor: 'red', marginBottom: 10 }} />
        <View style={{ height: 200, width: '100%', backgroundColor: 'red', marginBottom: 10 }} />
        <View style={{ height: 200, width: '100%', backgroundColor: 'red', marginBottom: 10 }} />
        <View style={{ height: 200, width: '100%', backgroundColor: 'red', marginBottom: 10 }} />
        <View style={{ height: 200, width: '100%', backgroundColor: 'red', marginBottom: 10 }} />
      </ScrollView>

      <TextInput style={{ backgroundColor: 'green', margin: 12, height: 50 }} />
    </KeyboardAvoidingView>
  );
};
