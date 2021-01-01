import React from 'react';
import BookList from './pages/bookList';
import Category from './pages/category';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Book from './pages/book';
import TopBooks from './pages/top5';
import Review from './pages/review';

const Stack = createStackNavigator();
const StackTop = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'home'
                      : 'home-outline'
                  }
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Top') {
              return (
                <Ionicons
                  name={focused ? 'book' : 'book-outline'}
                  size={size}
                  color={color}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#1a237e',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={StackScreen} />
        <Tab.Screen name="Top" component={TopStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function StackScreen() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="BookList" component={BookList} options={() => ({ 
            headerStyle: {
              backgroundColor: '#1a237e'
            },
            headerTintColor: '#fff',
          })} />
        <Stack.Screen name="Category" component={Category} options={({ route }) => ({ 
            title: route.params.name,
            headerStyle: {
              backgroundColor: '#1a237e'
            },
            headerTintColor: '#fff',
          })}/>
        <Stack.Screen name="Book" component={Book} options={({ route }) => ({ 
            title: route.params.name,
            headerStyle: {
              backgroundColor: '#1a237e'
            },
            headerTintColor: '#fff',
          })}/>
          <Stack.Screen name="Review" component={Review} options={({ route }) => ({ 
            title: route.params.name,
            headerStyle: {
              backgroundColor: '#1a237e'
            },
            headerTintColor: '#fff',
          })}/>
    </Stack.Navigator>
  );
}

function TopStackScreen() {
  return (
    <StackTop.Navigator>
        <StackTop.Screen name="Top5" component={TopBooks} options={() => ({ 
            headerStyle: {
              backgroundColor: '#1a237e'
            },
            headerTintColor: '#fff',
          })} />
        <StackTop.Screen name="Book" component={Book} options={({ route }) => ({ 
            title: route.params.name,
            headerStyle: {
              backgroundColor: '#1a237e'
            },
            headerTintColor: '#fff',
          })}/>
        <Stack.Screen name="Review" component={Review} options={({ route }) => ({ 
            title: route.params.name,
            headerStyle: {
              backgroundColor: '#1a237e'
            },
            headerTintColor: '#fff',
          })}/>
    </StackTop.Navigator>
  );
}
