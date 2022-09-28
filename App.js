import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/MainScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WallpapersScreen from './screens/WallpapersScreens/WallpapersScreen';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from './styles/colors/GlobalColors';
import WallpaperDetailScreen from './screens/WallpapersScreens/WallpaperDetailScreen';
import NewsDetails from './screens/NewsScreens/NewsDetails';

const Stack = createNativeStackNavigator()
const Tabs = createBottomTabNavigator()

const UpathleticsOverview = () => {
  return (
    <>
      <Tabs.Navigator screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#D7D9CE',
        tabBarStyle: {
          borderTopWidth: 0.2,
          borderTopColor: '#252424',
          backgroundColor: GlobalStyles.colors.background,
        }
      }}>
        <Tabs.Screen name='Main' component={MainScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='home' size={size} color={color} />
            )
          }} />
        <Tabs.Screen name='Wallpapers' component={WallpapersScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='images' size={size} color={color} />
            )
          }} />
      </Tabs.Navigator>
    </>
  )
}

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.safeArea} />
      <NavigationContainer>
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
             headerTitle: 'News',
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'black'
  },
});
