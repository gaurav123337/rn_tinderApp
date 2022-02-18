import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Header from '../Components/Header';

export default function ChatScreen() {
  return (
    <SafeAreaView>
      <Header title='chat' />
      <ChatList />
    </SafeAreaView>
  );
}
