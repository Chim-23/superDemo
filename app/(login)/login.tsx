
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';
import { Button } from 'react-native';

export default function LoginScreen() {
  return (
    <ThemedView><Button title='go to home' onPress={()=>{router.push('/(tabs)/profile')}}></Button></ThemedView>
   
  );
}

