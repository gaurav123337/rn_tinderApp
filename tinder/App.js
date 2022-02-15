import { TailwindProvider, useTailwind } from 'tailwind-rn';
import utilities from './tailwind.json';

import Hello from './Components/Hello';
import StackNavigator from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './hooks/useAuth';

export default function App() {
  const tailwind = useTailwind();
  return (
    // <NavigationContainer>
    //   <AuthProvider>
    //     <TailwindProvider utilities={utilities}>
    //       <StackNavigator />
    //     </TailwindProvider>
    //   </AuthProvider>
    // </NavigationContainer>

    <NavigationContainer>
      <AuthProvider>
        <TailwindProvider utilities={utilities}>
          <StackNavigator />
        </TailwindProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
