import { StatusBar } from 'expo-status-bar';
import React from 'react';
import BookList from './pages/bookList';
import Category from './pages/category';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Book from './pages/book';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BookList" component={BookList} />
        <Stack.Screen name="Category" component={Category} options={({ route }) => ({ title: route.params.name })}/>
        <Stack.Screen name="Book" component={Book} options={({ route }) => ({ title: route.params.name })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}