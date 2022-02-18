import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useTailwind } from 'tailwind-rn';
import { Foundation, Ionicons } from '@expo/vector-icons';

const Header = ({ title, callEnabled }) => {
  const tw = useTailwind();
  const navigation = useNavigation();
  return (
    <View style={tw('p-2 flex-row items-center justify-between')}>
      <View style={tw('flex flex-row items-center ')}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={tw('p-2')}>
          <Ionicons name='chevron-back-outline' size={34} color='#FF5864' />
        </TouchableOpacity>
        <Text style={tw('text-2xl font-bold pl-2')}>{title}</Text>
      </View>

      {callEnabled && (
        <TouchableOpacity onPress={() => navigation.goBack()} style={tw('p-2')}>
          <Foundation name='telephone' size={34} color='red' />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
