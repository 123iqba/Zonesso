import * as React from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import NewAccount from './src/screen/start';
import LoginForm from './src/screen/Login';
import SignupForm from './src/screen/Signup';
import Home from './src/screen/Home';
import Activity from './src/screen/Activity';
import Post from './src/screen/Post';
import Chat from './src/screen/Chat';
import User from './src/screen/User';
import { View } from 'react-native';


const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="#e91e63"
    barStyle={{ backgroundColor: '#fff',height:70,margin:0, }}
    tabBarOptions={{
      showLabel: false,
    
      style: {
        height: 60,
        backgroundColor: 'red',
        borderTopWidth: 1,
        borderTopColor: 'gray',
        elevation: 0, // Remove shadow on Android
        shadowOpacity: 0, // Remove shadow on iOS
      }
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={28} />
        ),
      }}
    />
    <Tab.Screen
      name="Activity"
      component={Activity}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bell" color={color} size={28} />
        ),
      }}
    />
    <Tab.Screen
      name="Post"
      component={Post}
      options={{
        tabBarIcon: ({ color }) => (
          <View style={{ backgroundColor: 'red', width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
            <MaterialCommunityIcons name="plus" color='#fff' size={28} />
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Chat"
      component={Chat}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="chat" color={color} size={28} />
        ),
      }}
    />
    <Tab.Screen
      name="User"
      component={User}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={28} />
        ),
      }}
    />
  </Tab.Navigator>
  
  );
}
const AuthStack = () => {

  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={LoginForm} />
      <Stack.Screen name="NewAccount" component={SignupForm} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='MyTabs' component={MyTabs}/>
        <Stack.Screen name='AuthStack' component={AuthStack}/>
        <Stack.Screen name="NewAccount" component={NewAccount} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}