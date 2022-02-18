import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Button,
} from 'react-native';
import Header from '../Components/Header';
import { useTailwind } from 'tailwind-rn';
import SenderMessage from '../Components/SenderMessage';
import ReceiverMessage from '../Components/ReceiverMessage';

const MessageScreen = () => {
  const tw = useTailwind();
  const { params } = useRoute();
  //const { matchDetails } = params;
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {};

  return (
    <SafeAreaView style={tw('flex-1')}>
      <Header title='chat' callEnabled />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={tw('flex-1')}
        keyboardVeticalOffset={10}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <FlatList
            data={messages}
            inverted={-1}
            style={tw('pl-4')}
            keyExtractor={(item) => item.id}
            renderItem={({ item: message }) =>
              message.userId === user.uid ? (
                <SenderMessage key={message.id} message={message} />
              ) : (
                <ReceiverMessage key={message.id} message={message} />
              )
            }
          />
        </TouchableWithoutFeedback>

        <Text>Message Screen</Text>
        <View
          style={tw(
            'flex-row justify-between bg-white items-center border-t border-gray-200 px-5 py-2',
          )}
        >
          <TextInput
            style={tw('h-10  text-lg')}
            placeholder='Send Message...'
            onChangeText={setInput}
            onSubmitEditing={sendMessage}
            value={input}
          />
          <Button
            onPress={() => {
              sendMessage;
            }}
            title='Send'
            color='#FF5864'
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default MessageScreen;
