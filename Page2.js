import React from "react";
import { View, Text } from "react-native";

export default function Page2() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Page 2</Text>
      <View style={{ position: "absolute", top: 0, left: 0 }}>
        <Text>{">     <-- Click here for page 3"}</Text>
      </View>
    </View>
  );
}
