import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function TabLayout() {
  return (
  <Tabs
    screenOptions={{
      tabBarActiveTintColor: '#07e5f5',
      headerStyle: {
        backgroundColor: '#086296f5',
      },
      headerShadowVisible: false,
      headerTintColor: '#fff',
      tabBarStyle: {
        backgroundColor: '#086296f5',
      },
    }}
  >

    <Tabs.Screen name="index" 
    options={{ title: 'VIAGENS', 
    tabBarIcon: ({ color, focused }) => (
      <Ionicons name={focused ? 'airplane' : 'airplane-outline'} color={color} size={24} />
      ),
    }}
 />
    <Tabs.Screen name="about" 
    options={{ title: 'AGENCIA', 
    tabBarIcon: ({ color, focused }) => (
      <Ionicons name={focused ? 'sunny' : 'sunny-outline'} color={color} size={24} />
      ),
    }}
 />

  <Tabs.Screen name="toDoList" 
    options={{ title: 'LISTA', 
    tabBarIcon: ({ color, focused }) => (
      <Ionicons name={focused ? 'list' : 'list-outline'} color={color} size={24} />
      ),
    }}
 />
    <Tabs.Screen name="edit" 
    options={{ title: 'EDIÇÂO', 
    tabBarIcon: ({ color, focused }) => (
      <Ionicons name={focused ? 'camera' : 'camera-outline'} color={color} size={24} />
      ),
    }}
 />
  </Tabs> 
  );
}
