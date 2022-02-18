import React, { useNavigation, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import getMatchedUserInfo from '../getMatchedUserInfo';
import { useTailwind } from 'tailwind-rn';

const ChatRow = ({ matchDetails }) => {
  const tw = useTailwind();
  const navigation = useNavigation();
  const [matchedUserInfo, setMatchedUserInfo] = useState(null);

  useEffect(() => {
    setMatchedUserInfo(getMatchedUserInfo(matchDetails.users, user.uid));
  }, [matchDetails, user]);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Message', {
          matchDetails,
        })
      }
      style={[
        tw('flex-row items-center py-3 px-5 bg-white mx-3 my-1 rounded-lg'),
        styles.cardShadow,
      ]}
    >
      <Image
        style={tw('rounded-full h-16 w-16 mr-4')}
        source={{
          uri:
            matchedUserInfo?.photoURL ||
            'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg',
        }}
      />

      <View>
        <Text style={tw('text-lg font-semibold')}>
          {matchedUserInfo?.displayName || 'Test'}
        </Text>
        <Text>"Say Hi"</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});

export default ChatRow;
