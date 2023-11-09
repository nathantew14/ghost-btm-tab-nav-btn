import "expo-dev-client";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Iconify } from "react-native-iconify";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import { Button, Pressable, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        // must render a page with the tabBar visibile at least once for "ghost button" to appear
        initialRouteName="3"
        // it does not matter if header is shown, but i'm hiding it so I can
        // display the "click here" positions accurately
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen
          name="1"
          component={Page1}
          // tabBarStyle display must be "none" for "ghost button" to appear on this screen
          options={{ tabBarStyle: { display: "none" } }}
        />
        <Tab.Screen
          name="2"
          component={Page2}
          options={{
            // tabBarStyle display must be "none" for "ghost button" to appear on this screen
            tabBarStyle: { display: "none" },
            tabBarIcon: ({ color, size }) => (
              <Iconify //iconify is necessary for "ghost button" to page 2
                color={color}
                // size={size}
                size={size + 15} //larger size is necessary for "ghost button" to page 2
                icon="material-symbols:circle-outline"
              />

              // tried replacing iconofy with these, couldn't reproduce "ghost button"
              // <View
              //   style={{
              //     backgroundColor: "grey",
              //     width: size + 15,
              //     height: size + 15,
              //   }}
              // />
              // <Ionicons name="at-circle" size={size +15} color={color}/>
              // <Pressable
              //   onPress={() => console.log("Tab 2 pressed")}
              //   style={{
              //     backgroundColor: color,
              //     height: size + 15,
              //     width: size + 15,
              //   }}
              // />
            ),
          }}
        />
        <Tab.Screen //the ghost button for page 3 only works if it is the last tab
          name="3"
          component={Page3}
          options={{
            tabBarIcon: ({ color, size }) => (
              //iconify is necessary for "ghost button" to page 3
              <Iconify
                // if pointerEvents is set to none, the ghost button will not trigger anything
                // pointerEvents="none"
                // if onPress is defined, it will be triggered but not the navigation event
                // onPress={()=>console.log('Page 3 iconify pressed')}
                color={color}
                size={size}
                icon="gg:profile"
              />

              // no ghost button with pressable or expo icon
              // <Ionicons name="person" size={size} color={color}/>
              // <Pressable
              //   onPress={() => console.log("Tab 3 pressed")}
              //   style={{
              //     backgroundColor: color,
              //     height: size,
              //     width: size,
              //   }}
              // />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
