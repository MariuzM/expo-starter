import React, { useEffect, useRef } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  View,
} from 'react-native';

export default function ChatScreen() {
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      if (Keyboard.isVisible() && scrollViewRef.current) {
        scrollViewRef.current.scrollToEnd();
      }
    });
    return () => {
      Keyboard.removeAllListeners('keyboardDidShow');
    };
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}
      style={{
        backgroundColor: 'blue',
        flex: 1,
      }}
    >
      <ScrollView
        ref={scrollViewRef}
        // automaticallyAdjustKeyboardInsets={true}
        // contentContainerStyle={{ flexGrow: 1 }}
        style={{ backgroundColor: 'orange' }}
      >
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
}
