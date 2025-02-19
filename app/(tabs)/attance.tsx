import Header from "@/components/Header";
import { Text, View,StyleSheet } from "react-native";
import DataTable from '@/components/DataTable';
export default function Index() {
  return (
     <View style={styles.container}>
      <View >
        <Header />
      </View>
      <View style={styles.mainContainer}>
        <View  style={styles.attanceContainer}>
          <View>
            <Text style={styles.checkText}>CheckIn | CheckOut</Text>
          </View>
          <View style={styles.timeSecond}>
            <Text style={styles.timeSecondText}>0 hr 0 min</Text>
          </View>
        </View>
        <View style={styles.time}>
          <Text style={styles.timeText}>10:35 AM</Text>
          <Text style={styles.timeText}>5:00 PM</Text>
        </View>
        <View>
          <View style={styles.history}>
            <Text style={styles.historyText}>Attance History</Text>
            <View style={styles.month}>
              <Text style={styles.historyText1}>May</Text>
              <Text style={styles.historyText1}>{">"}</Text>
            </View>
          </View>
          <View style={styles.box}> 
            <View style={styles.cardBox}>
              <Text style={styles.cardText}>Present Days</Text>
              <Text style={styles.cardText}>1</Text>
            </View>
            <View style={styles.cardBox}>
              <Text style={styles.cardText}>Worked Hours</Text>
              <Text style={styles.cardText}>0h 0m</Text>
            </View>
          </View>
        </View>
        <View>
          <DataTable />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#625dcf'
  },
  mainContainer:{
    paddingLeft:20,
    paddingRight:20,
    marginTop:20
  },
  attanceContainer:{
    display:'flex',
    alignItems:'center'
  },
  checkText:{
    fontSize:16,
    fontWeight:500,
    color:'white'
  },
  timeSecond:{
    marginTop:10,
    width:350,
    height:40,
    backgroundColor:'#a3a1c7',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  },
  timeSecondText:{
    color:'white',
    fontSize:14
  },
  time:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    marginTop:10
  },
  timeText:{
    fontSize:14,
    fontWeight:400,
    color:'white'
  },
  history:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    marginTop:20
  },
  month:{
    width:150,
    backgroundColor:'white',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    padding:10,
    paddingLeft:20,
    paddingRight:20,
    borderTopStartRadius:20,
    borderBottomRightRadius:20
  },
  historyText:{
    color:'white',
    fontSize:18,
    fontWeight:500
  },
  historyText1:{
    color:'black',
    fontSize:18,
    fontWeight:500
  },
  box:{
    display:'flex',
    flexDirection: "row",
    flexWrap: "wrap",
    gap:20,
    marginTop:20,
    alignItems:'center',
    justifyContent:'center'
  },
  cardBox:{
    width:165,
    height: 80,
    backgroundColor: "#a3a1c7",
    borderTopStartRadius:20,
    borderBottomRightRadius:20,
    borderColor: "#fff",
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:10
  },
  cardText:{
    fontSize:18,
    fontWeight:400,
    color:'white',
    marginTop:10,
    textAlign:'center'
  },
})
