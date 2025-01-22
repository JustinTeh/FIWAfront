import { Tabs } from 'expo-router';
import { MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: styles.secondaryAccent.color, // the color of the icons when you click them
      headerStyle: {
        backgroundColor: styles.backgrounds.color // the background color of the top
      },
      headerShadowVisible: false,
      headerTintColor: styles.secondaryAccent.color, // the words at the top of the page
      tabBarStyle: {
        backgroundColor: styles.backgrounds.color // the background color of the bottom
      }
    }}>

    <Tabs.Screen
      name="index"
      options={{
        title: 'Home',
        tabBarIcon: ({ color, focused }) => (
          //<Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          <MaterialIcons name="home" color={color} size={24}/>
          
        ),
      }}
    />
    <Tabs.Screen
      name="AddItems"
      options={{
        title: 'Add',
        tabBarIcon: ({ color, focused }) => (
          <MaterialIcons name="add" color={color} size={24} />
        ),
      }}
    />
    <Tabs.Screen
      name="inventory"
      options={{
        title: 'Inventory',
        tabBarIcon: ({ color, focused }) => (
          <MaterialIcons name="format-list-bulleted" color={color} size={24}/>
        ),
      }}
    />
  </Tabs>
  );

}

const styles = StyleSheet.create({
  primaryAccent : {
    color: "#537FE7", // muted blue
  },
  secondaryAccent : {
    color: "#C3B1E1", // lavender
  },
  backgrounds: {
        color: "#F7F8FA", // light grayish white
  },
  textPrimary: {
    color: "#3C3C3C" // dark gray
  },
  textSecondary: {
    color: "#6F6F6F" // med gray
  },
  textPlaceholder: {
    color: "#9C9C9C" // light gray
  }
}



) ;