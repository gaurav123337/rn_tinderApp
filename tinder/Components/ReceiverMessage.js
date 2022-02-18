import React from 'react';
import { View, Text, Image } from 'react-native';
import { useTailwind } from 'tailwind-rn';

const ReceiverMessage = ({ message }) => {
  const tw = useTailwind();
  return (
    <View
      style={[
        tw('bg-red-400 rounded-lg rounded-tl-none px-5 py-3 mx-3 my-2'),
        { alignSelf: 'flex-start', marginLeft: 'auto' },
      ]}
    >
      <Image
        style={tw('h-12 w-12 rounded-full absolute top-0 -left-14')}
        source={{
          uri: 'https://hips.hearstapps.com/ell.h-cdn.co/assets/16/18/1600x2356/gallery-1462452604-gettyimages-527502536.jpg?resize=480:*',
        }}
      />
      <Text>fdfdf</Text>
    </View>
  );
};

export default ReceiverMessage;
