import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import NewRecord from "../newRecordScreen";
import RecordDetail from "../recordDetailScreen";
import Record from "../recordScreen";
const Stack = createStackNavigator()
export default function RecordNav(){
  return(

    <Stack.Navigator>
            <Stack.Screen
                name="Record"
                component={Record}
            />
            <Stack.Screen
                name="NewRecord"
                component={NewRecord}
            />
            <Stack.Screen
                name="RecordDetail"
                component={RecordDetail}
            />
        </Stack.Navigator>
  );
};