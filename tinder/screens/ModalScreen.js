import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import { useTailwind } from 'tailwind-rn';

const ModalScreen = () => {
  const tw = useTailwind();

  const [image, setImage] = useState(null);
  const [job, setJob] = useState(null);
  const [age, setAge] = useState(null);
  const navigation = useNavigation();

  const incompleteForm = !image || !job || !age;
  const updateUserProfile = () => {
    //Register user
    navigation.navigate('Home');
  };

  return (
    <View style={tw('flex-1 items-center pt-1')}>
      <Image
        style={tw('h-20 w-full')}
        resizeMode='contain'
        source={{ uri: 'https://links.papareact.com/2pf' }}
      />
      <Text style={tw('text-xl text-gray-500 p-2 font-bold')}>
        Welcome user
      </Text>

      <Text style={tw('text-xl text-gray-500 p-2 font-bold')}>
        Step 1: Profile Pic
      </Text>
      <TextInput
        value={image}
        onChangeText={(text) => setImage(text)}
        style={tw('text-center text-xl pb-2')}
        placeholder='Enter a profile pic URL'
      />

      <Text style={tw('text-xl text-gray-500 p-2 font-bold')}>
        Step 2: The Job
      </Text>
      <TextInput
        value={job}
        onChangeText={(text) => setJob(text)}
        style={tw('text-center text-xl pb-2')}
        placeholder='Enter a job'
      />

      <Text style={tw('text-xl text-gray-500 p-2 font-bold')}>Step 3: Age</Text>
      <TextInput
        value={age}
        onChangeText={(text) => setAge(text)}
        style={tw('text-center text-xl pb-2')}
        placeholder='Enter age'
        keyboardType='numeric'
        maxLength={2}
      />

      <TouchableOpacity
        disabled={incompleteForm}
        style={[
          tw('w-64 p-3 rounded-xl absolute bottom-10'),
          incompleteForm ? tw('bg-gray-400') : tw('bg-red-400'),
        ]}
        onPress={() => updateUserProfile()}
      >
        <Text style={tw('text-center text-white text-xl')}>Update Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModalScreen;
