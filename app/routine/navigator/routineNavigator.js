import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import NewRoutine from "../newRoutineScreen";
import RoutineDetail from "../routineDetailScreen";
import Routine from "../routineScreen";
const Stack = createStackNavigator()
export default function RoutineNav(){
  return(

    <Stack.Navigator>
            <Stack.Screen
                name="Routine"
                component={Routine}
            />
            <Stack.Screen
                name="NewRoutine"
                component={NewRoutine}
            />
            <Stack.Screen
                name="RoutineDetail"
                component={RoutineDetail}
            />
        </Stack.Navigator>
  );
};