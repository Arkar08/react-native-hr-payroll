import Header from "@/components/Header";
import { Text, View,StyleSheet } from "react-native";

export default function Index() {
  return (
     <View style={styles.container}>
      <View >
        <Header />
      </View>
      <View>
        <Text>More</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#625dcf'
  }
})
