import { Text, View } from "react-native";

export default function Page1() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Page 1</Text>
      <View style={{ position: "absolute", top: 0, left: 0 }}>
        <Text>{">     <-- Click here for page 3"}</Text>
        <Text>{">        <-- Click here for page 2"}</Text>
      </View>
    </View>
  );
}
