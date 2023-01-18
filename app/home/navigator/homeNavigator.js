import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
import RecordNav from "../../record/navigator/recordNavigator";
import RoutineNav from "../../routine/navigator/routineNavigator";
import Home from "../homeScreen";
import Tabata from "../../tabata/tabataScreen";
import User from "../../user/userScreen";
import HeaderUsuario from "../../user/headerUsuario";

export default function HomeNav(props) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="oder"
      screenOptions={{ tabBarActiveTinColor: "#23529E" }}
    >
      <Tab.Screen
        name="RecordNav"
        component={RecordNav}
        options={{
          tabBarLabel: "RecordNav",
          headerShown: false,
          tabBarIcon: () => (
            <MaterialIcons name="alarm-on" size={30} color="#23529E" />
          ),
        }}
      />
      <Tab.Screen
        name="RoutineNav"
        component={RoutineNav}
        options={{
          tabBarLabel: "RoutineNav",
          headerShown: false,
          tabBarIcon: () => (
            <MaterialIcons name="timer" size={30} color="#23529E" />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: () => (
            <MaterialIcons name="home" size={30} color="#23529E" />
          ),
        }}
      />
      <Tab.Screen
        name="Tabata"
        component={Tabata}
        options={{
          tabBarLabel: "Tabata",
          headerShown: false,
          tabBarIcon: () => (
            <MaterialIcons name="directions-run" size={30} color="#23529E" />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarLabel: "User",
          headerTitle: () => <HeaderUsuario />,
          tabBarIcon: () => (
            <MaterialIcons name="face" size={30} color="#23529E" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
