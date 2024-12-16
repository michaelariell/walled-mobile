import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#19918F' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="transfer"
        options={{
          title: 'Transfer',
          tabBarIcon: ({ color }) => <FontAwesome size={22} name="send" color={color} />,
        }}
      />
      <Tabs.Screen
        name="topup"
        options={{
          title: 'Top Up',
          tabBarIcon: ({ color }) => <FontAwesome size={26} name="money" color={color} />,
        }}
      />
      <Tabs.Screen
        name="card"
        options={{
          title: 'Cards',
          tabBarIcon: ({ color }) => <FontAwesome size={22} name="credit-card" color={color} />,
        }}
      />
    </Tabs>
  );
}
