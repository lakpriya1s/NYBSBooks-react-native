import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BookList from './pages/bookList';
import Home from './pages/home';

export default function App() {
  return (
    <BookList/>
  );
}