import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import MainScreen from './screens/NewsScreens/MainScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WallpapersScreen from './screens/WallpapersScreens/WallpapersScreen';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from './styles/colors/GlobalColors';
import WallpaperDetailScreen from './screens/WallpapersScreens/WallpaperDetailScreen';
import NewsDetails from './screens/NewsScreens/NewsDetails';
import PlayerScreen from './screens/PlayerScreen/PlayerScreen';
import AuthContextProvider, { AuthContext } from './store/auth-context';
import { useContext, useEffect, useState } from 'react';
import LoginScreen from './screens/AuthScreens/Login/LoginScreen';
import SignupScreen from './screens/AuthScreens/Register/RegisterScreen';
import UserScreen from './screens/UserScreen/UserScreen';

const Stack = createNativeStackNavigator()
const Tabs = createBottomTabNavigator()

const UpathleticsOverview = () => {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <Tabs.Navigator screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#D7D9CE',
        tabBarStyle: {
          borderTopWidth: 0.2,
          borderTopColor: '#252424',
          backgroundColor: GlobalStyles.colors.background,
          height: 80
        }
      }}>
        <Tabs.Screen name='Main' component={MainScreen}
          options={{
            tabBarLabel: () => { return null },
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='home' size={size} color={color} />
            )
          }} />
        <Tabs.Screen name='PLayer' component={PlayerScreen}
          options={{
            tabBarLabel: () => { return null },
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='play-circle' size={size} color={color} />
            )
          }} />
        <Tabs.Screen name='Wallpapers' component={WallpapersScreen}
          options={{
            tabBarLabel: () => { return null },
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='images' size={size} color={color} />
            )
          }} />
        <Tabs.Screen name='UserInfo' component={UserScreen}
          options={{
            headerShown: false,
            tabBarLabel: () => { return null },
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='person' size={size} color={color} />
            )
          }} />
      </Tabs.Navigator>
    </>
  )
}

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: GlobalStyles.colors.background },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <SafeAreaView style={styles.safeArea} />
      <Stack.Navigator screenOptions={({ navigation }) => ({
        presentation: 'fullScreenModal',
        headerTintColor: '#D7D9CE',
        headerStyle: {
          backgroundColor: 'black',
          headerTintColor: '#D7D9CE'
        },
        headerLeft: () => (
          <Pressable onPress={() => {
            navigation.goBack()
          }}>
            <Ionicons name="chevron-back-outline" size={25} color="#D7D9CE" />
          </Pressable>
        ),
      })}>
        <Stack.Screen name='UpathleticsOverview' component={UpathleticsOverview} options={{
          headerShown: false
        }} />
        <Stack.Screen name='WallpaperDetails' component={WallpaperDetailScreen} options={{
          headerTitle: 'Wallpapers',
        }} />
        <Stack.Screen name='NewsDetails' component={NewsDetails} options={{
          headerTitle: "News",
        }} />
      </Stack.Navigator>
    </>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem('token');

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }

      setIsTryingLogin(false);
    }

    fetchToken();
  }, []);


  return <Navigation />;
}

export default function App() {

  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'black'
  },
  logo:{
    height: 50,
    width: 120,
    marginHorizontal: 20
  }
});

