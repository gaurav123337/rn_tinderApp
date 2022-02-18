import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { useTailwind } from 'tailwind-rn';

const MatchScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation();
  const { params } = useRoute();

  return (
    <View style={[tw('h-full bg-red-500 pt-20'), { opacity: 0.89 }]}>
      <View style={tw('justify-center px-10 pt-20')}>
        <Image
          style={tw('h-20 w-full')}
          source={{ uri: 'https://links.papareact.com/mg9' }}
        />
      </View>

      <Text style={tw('text-white text-center mt-5')}>You liked eachother</Text>

      <View style={tw('flex-row justify-evenly mt-5')}>
        <Image
          style={tw('h-32 w-32 rounded-full')}
          source={{
            uri: 'https://hips.hearstapps.com/ell.h-cdn.co/assets/16/18/1600x2356/gallery-1462452604-gettyimages-527502536.jpg?resize=480:*',
          }}
        />
        <Image
          style={tw('h-32 w-32 rounded-full')}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg',
          }}
        />
      </View>

      <TouchableOpacity
        style={tw('bg-white m-5 px-10 py-8 rounded-full mt-20')}
        onPress={() => {
          navigation.goBack();
          navigation.navigate('Chat');
        }}
      >
        <Text style={tw('text-center')}>Send a message</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MatchScreen;
