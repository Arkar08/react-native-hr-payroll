import Header from "@/components/Header";
import { Text, View,StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
     <SafeAreaView style={styles.container}>
      <View >
        <Header />
      </View>
      <View>
        <Text>More</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#0c0161'
  }
})
