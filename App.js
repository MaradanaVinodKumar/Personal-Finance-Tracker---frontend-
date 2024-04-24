import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './Navigations/StackNavigation';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#00A82F' />
      <StackNavigation />
    </NavigationContainer>
  );
}

