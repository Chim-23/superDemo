
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Redirect } from 'expo-router';
import { useState } from 'react';

export default function HomeScreen() {
  const [isLogin,setIsLogin]=useState(false)
  if (!isLogin) {
    setIsLogin(true)
    return <Redirect href="/login" />;
  }
  return (
    <ThemedView><ThemedText>HomeScreen</ThemedText></ThemedView>
  );
}