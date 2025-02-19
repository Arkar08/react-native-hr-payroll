import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';



export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown:false,
        tabBarActiveTintColor: "#625dcf",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title:'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={18} />
          ),
        }}
      />
      <Tabs.Screen
        name="leave" // folder name
        options={{
          title:'Leave',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'ticket-sharp' : 'ticket-outline'} color={color} size={18}/>
          ),
        }}
      />

      <Tabs.Screen
        name="attance" // folder name
        options={{
          title:'Attance',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'man' : 'man-outline'} color={color} size={18}/>
          ),
        }}
      />

      <Tabs.Screen
        name="more" // folder name
        options={{
          title:"More",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'apps' : 'apps-outline'} color={color} size={18}/>
          ),
        }}
      />
    </Tabs>
  );
}
