import Header from "@/components/Header";
import LeaveCard from "@/components/LeaveCard";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header />
      </View>
      <ScrollView style={styles.mainContainer}>
        <Text style={styles.mainText}>Leave</Text>
        <View>
          <View style={styles.box}>
            <View style={styles.cardBox}>
              <Text style={styles.cardText}>Sick Leave</Text>
              <Text style={styles.cardText}>1/2</Text>
            </View>
            <View style={styles.cardBox}>
              <Text style={styles.cardText}>Urgent Leave</Text>
              <Text style={styles.cardText}>0/2</Text>
            </View>
            <View style={styles.cardBox}>
              <Text style={styles.cardText}>Personal Leave</Text>
              <Text style={styles.cardText}>3</Text>
            </View>
            <View style={styles.cardBox}>
              <Text style={styles.cardText}>Time Leave</Text>
              <Text style={styles.cardText}>1</Text>
            </View>
          </View>
        </View>
        <View style={styles.leaveContainer}>
          <View style={styles.leave}>
            <Text style={styles.leaveText}>Issue Leave</Text>
          </View>
          <View style={styles.leave}>
            <Text style={styles.leaveText}>Time Leave</Text>
          </View>
        </View>
        <View style={styles.recentContainer}>
          <Text style={styles.recentText}>Recent Leave Activity</Text>
          <View style={styles.recentList}>
            <View style={styles.recentListBox}>
              <View style={styles.listBox1}>
                <Text style={styles.listBox1Text}>This Month</Text>
              </View>
              <View style={styles.listBox2}>
                <Text style={styles.listBox1Text}>This Year</Text>
              </View>
            </View>
            <View style={styles.history}>
              <Text style={styles.historyText}>Filter</Text>
              <View style={styles.month}>
                <Text style={styles.historyText1}>SelectLeave Type</Text>
                <Text style={styles.historyText1}>{">"}</Text>
              </View>
            </View>
            <View style={styles.leaveCard}>
              <LeaveCard />
              <LeaveCard />
              <LeaveCard />
              <LeaveCard />
              <LeaveCard />
              <LeaveCard />
              <LeaveCard />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0c0161",
  },
  mainContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
    paddingBottom:10
  },
  mainText: {
    fontSize: 24,
    fontWeight: 500,
    color: "white",
  },
  box: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  cardBox: {
    width: 165,
    height: 100,
    backgroundColor: "#9c9fa1",
    borderTopStartRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 400,
    color: "white",
    marginTop: 10,
    textAlign: "center",
  },
  leaveContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginTop: 20,
  },
  leave: {
    height: 60,
    borderTopStartRadius: 20,
    borderBottomRightRadius: 20,
    width: 165,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0641d6",
  },
  leaveText: {
    color: "white",
  },
  recentContainer: {
    marginTop: 20,
  },
  recentText: {
    fontSize: 24,
    fontWeight: 500,
    textAlign: "center",
    color: "white",
  },
  recentList: {
    width: 350,
    backgroundColor: "#686969",
    marginTop: 50,
    borderRadius: 10,
    position: "relative",
    padding:5
  },
  recentListBox: {
    width: 200,
    height: 50,
    position: "absolute",
    left: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    top:-25
  },
  listBox1: {
    backgroundColor: "black",
    width: "50%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  listBox2: {
    backgroundColor: "#9c9fa1",
    width: "50%",
    height: "100%",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  listBox1Text: {
    color: "white",
  },
  history:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    marginTop:30,
    padding:10
  },
  month:{
    width:180,
    height:50,
    backgroundColor:'whitesmoke',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    padding:10,
    borderTopStartRadius:20,
    borderBottomRightRadius:20
  },
  historyText:{
    color:'white',
    fontSize:18,
    fontWeight:600
  },
  historyText1:{
    color:'black',
    fontSize:14,
    fontWeight:600
  },
  leaveCard:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    gap:10,
    marginTop:10
  }
});
