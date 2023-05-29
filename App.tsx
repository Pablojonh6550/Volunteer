import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
type StackNavigation = {
  Login: undefined;
  RegisterUser: undefined;
  RegisterInstitution: undefined;
  RegisterTask: undefined;
  UserSelect: undefined;
  Home: undefined;
  Perfil: undefined;
  Tasks: undefined;
};
const Stack = createStackNavigator<StackNavigation>();
export type StackTypes = NativeStackNavigationProp<StackNavigation>;

import Login from "./screens/Login";
import RegisterUser from "./screens/RegisterUser";
import RegisterInstitution from "./screens/RegisterInstitution";
import RegisterTask from "./screens/RegisterTask";
import UserSelect from "./screens/UserSelect";
import Home from "./screens/Home";
import Perfil from "./screens/Perfil";
import Tasks from "./screens/Tasks";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserSelect"
          component={UserSelect}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterUser"
          component={RegisterUser}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterInstitution"
          component={RegisterInstitution}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterTask"
          component={RegisterTask}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tasks"
          component={Tasks}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
