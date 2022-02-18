import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import ChatRow from './ChatRow';

const ChatList = () => {
  const tw = useTailwind();
  const [matches, setMatches] = useState([]);

  useEffect(() => {}, []);

  return (
    <FlatList
      style={tw('h-full')}
      data={matches}
      keyExtractor={(item) => item.id}
      renderItem={(item) => <ChatRow matchDetails={item} />}
    />
  );
};

export default ChatList;
