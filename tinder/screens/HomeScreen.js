import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
import Swiper from 'react-native-deck-swiper';

const DUMMY_DATA = [
  {
    firstName: 'Madonna',
    lastName: 'Ciccone',
    occupation: 'Singer-songwriter',
    photoURL:
      'https://hips.hearstapps.com/ell.h-cdn.co/assets/16/18/1600x2356/gallery-1462452604-gettyimages-527502536.jpg?resize=480:*',
    age: 63,
    id: 123,
  },
  {
    firstName: 'Elon',
    lastName: 'Musk',
    occupation: 'Software Developer',
    photoURL:
      'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg',
    age: 40,
    id: 235,
  },
];

export default function HomeScreen() {
  const tw = useTailwind();
  const navigation = useNavigation();

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: false,
  //   });
  // }, []);

  return (
    <SafeAreaView style={tw('flex-1')}>
      <View style={tw('flex-row items-center justify-between px-5')}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Image
            style={tw('h-10 w-10 rounded-full')}
            source={{ uri: 'https://tinder.com/static/tinder.png' }}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={tw('h-14 w-14 ')} source={require('../logo.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <Ionicons name='chatbubble-sharp' size={30} color='#FF5864' />
        </TouchableOpacity>
      </View>
      <View style={tw('flex-1 -mt-6')}>
        <Swiper
          containerStyle={{ backgroundColor: 'transparent' }}
          cards={DUMMY_DATA}
          stackSize={5}
          cardIndex={0}
          animateCardOpacity
          verticalSwipe={false}
          renderCard={(card) => (
            <View
              key={card.id}
              style={tw('relative bg-white h-3/4 rounded-xl  ')}
            >
              <Text>{card.firstName}</Text>
              <Image
                style={tw('absolute top-0 h-full w-full rounded-xl')}
                source={{ uri: card.photoURL }}
              />
              <View
                style={[
                  tw(
                    'absolute bottom-0 bg-white h-20 w-full justify-between items-between flex-row px-6 py-2 rounded-b-xl',
                  ),
                  styles.cardShadow,
                ]}
              >
                <View>
                  <Text style={tw('text-xl font-bold')}>
                    {card.firstName} {card.lastName}
                  </Text>
                  <Text>{card.occupation}</Text>
                </View>
                <Text style={tw('text-2xl font-bold')}>{card.age}</Text>
              </View>
            </View>
          )}
        />
      </View>

      {/* <Text>I am a home screen</Text>
      <Button
        title='Go to chat screen'
        onPress={() => navigation.navigate('Chat')}
      />
      <Button
        title='Go to Login screen'
        onPress={() => navigation.navigate('Login')}
      /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: '$000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
