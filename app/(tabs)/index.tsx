import Header from "@/components/Header";
import { Text, View,StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import dayjs from 'dayjs';
import { useEffect,useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [date, setDate] = useState(dayjs())

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(dayjs()); 
    }, 1000 * 1);

    return () => clearInterval(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header />
      </View>
      <View>
        <View style={styles.clockContainer}>
            <View style={styles.time}>
              <Text style={styles.normalTime}>{dayjs().format("A")}</Text>
              <Text style={styles.mainTime}>{dayjs().format("hh:mm")}</Text>
              <Text style={styles.normalTime}>{dayjs().format("ss")}</Text>
            </View>
            <View>
              <Text style={styles.date}>{dayjs().format("dddd, DD MMMM")}</Text>
            </View>
            <View style={styles.fingerPrint}>
              <Ionicons name="finger-print-outline" size={48} color="black" />
            </View>
            <View>
              <Text style={styles.checkText}>CheckIn | CheckOut</Text>
            </View>
            <View style={styles.timeSecond}>
              <Text style={styles.timeSecondText}>0 hr 0 min</Text>
            </View>
        </View>
        <View style={styles.overview}>
            <Text style={styles.overviewText}>Overview</Text>
            <View style={styles.box}> 
              <View style={styles.cardBox}>
                <View style={styles.emojiContainer}>
                  <FontAwesome5 name="user-check" size={24} color="white" />
                  <Text style={styles.cardText}>Present</Text>
                </View>
                <View style={styles.textCount}>
                  <Text>1</Text>
                </View>
              </View>
              <View style={styles.cardBox}>
                <View style={styles.emojiContainer}>
                  <Entypo name="emoji-sad" size={24} color="white" />
                  <Text style={styles.cardText}>Leave</Text>
                </View>
                <View style={styles.textCount}>
                  <Text>1</Text>
                </View>
              </View>
              <View style={styles.cardBox}>
                <View style={styles.emojiContainer}>
                  <MaterialIcons name="request-page" size={24} color="white" />
                  <Text style={styles.cardText}>Request</Text>
                </View>
                <View style={styles.textCount}>
                  <Text>1</Text>
                </View>
              </View>
              <View style={styles.cardBox}>
                <View style={styles.emojiContainer}>
                  <MaterialIcons name="payment" size={24} color="white" />
                  <Text style={styles.cardText}>Payroll</Text>
                </View>
                <View style={styles.textCount}>
                  <Text>1</Text>
                </View>
              </View>
            </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#0c0161'
  },
  // header:{
  //   flex:1
  // },
  // headerContainer:{
  //   flex:4
  // },
  clockContainer:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  time:{
    display:'flex',
    flexDirection:'row'
  },
  mainTime:{
    fontSize:48,
    fontWeight:600,
    color:'white'
  },
  normalTime:{
    fontWeight:400,
    fontSize:18,
    margin:10,
    color:'white'
  },
  fingerPrint:{
    width:100,
    height:100,
    borderRadius:100,
    backgroundColor:'whitesmoke',
    margin:10,
    display:'flex',
    justifyContent:'center',
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
    backgroundColor:'#9c9fa1',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  },
  timeSecondText:{
    color:'white',
    fontSize:14
  },
  date:{
    color:'white',
    fontSize:14
  },
  overview:{
    padding:20,
    marginTop:10
  },
  overviewText:{
    fontSize:24,
    fontWeight:400,
    color:'white'
  },
  box:{
    display:'flex',
    flexDirection: "row",
    flexWrap: "wrap",
    gap:20,
    marginTop:10,
    alignItems:'center',
    justifyContent:'center'
  },
  cardBox:{
    width:165,
    height: 100,
    backgroundColor: "#9c9fa1",
    borderTopStartRadius:20,
    borderBottomRightRadius:20,
    borderColor: "#fff",
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    padding:10
  },
  cardText:{
    fontSize:15,
    fontWeight:400,
    color:'white',
    marginLeft:10
  },
  textCount:{
    width:30,
    height:30,
    borderRadius:100,
    backgroundColor:'whitesmoke',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  emojiContainer:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }
})