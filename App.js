import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import { KeyboardAvoidingView, Platform } from 'react-native';
import Register from './screen/Register';
import Splash from './screen/Splash';
import Login from './screen/Login'
import Home from './screen/Home';
import ViewMovie from './screen/ViewMovie';
import SearchScreen from './screen/SearchScreen';
import ForgotPassword from './screen/ForgotPassword';
import PaymentScreen from './screen/PaymentScreen';
import History from './screen/History';
import {AntDesign, MaterialIcons, Ionicons} from '@expo/vector-icons';
import { SafeAreaViewProvider } from 'react-native-safe-area-context'
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {

  function BottomStackScreen() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "#5B5B5B",
          tabBarStyle: {
            backgroundColor: '#141414',
            borderTopWidth: 0,
            elevation: 0,   // for Android
            shadowOffset: {
              width: 0, height: 0 // for iOS
            },
            height: 60,
            paddingBottom: 10
          },
          tabBarLabelStyle: {
            flexDirection: 'row'
          },
          headerShown : false,
        }}
      >
        <Tab.Screen
          name="Trang chủ"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="home" size={24} color={color} style={{ marginBottom: -10 }} />
            )
          }}
        />
        <Tab.Screen
          name="Mới nhất"
          component={PaymentScreen}
          options={{
            
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="video-library" size={24} color={color} style={{ marginBottom: -10 }} />
            )
          }}
        />
        <Tab.Screen
          name="Tôi"
          component={History} 
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="person" size={24} color={color} style={{ marginBottom: -10 }} />
            )
          }}
        />
      </Tab.Navigator>
    );
  }

  const screenOptions = {
    headerShown: false,
    ...TransitionPresets.SlideFromRightIOS,
  }

  return (
    <NavigationContainer>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1, }} keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}>
        <Stack.Navigator initialRouteName="Splash" screenOptions={screenOptions}>
        <Stack.Screen name="Login" component={Login} options={{
            gestureEnabled: true,
            animationEnabled: true,
            gestureDirection: "horizontal",
          }} />
          <Stack.Screen name="Register" component={Register} options={{
            gestureEnabled: true,
            animationEnabled: true,
            gestureDirection: "horizontal",
          }} />
          <Stack.Screen name="BottomStack" component={BottomStackScreen} />
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="ViewMovie" component={ViewMovie} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="PaymentScreen" component={SearchScreen} />
          <Stack.Screen name="History" component={History} />
        </Stack.Navigator>
      </KeyboardAvoidingView>
    </NavigationContainer>
  )
}

export default App

