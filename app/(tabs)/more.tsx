import Header from "@/components/Header";
import { Text, View,StyleSheet,Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from "expo-router";
import { useState } from "react";
import Modal from '@/components/Modal'


export default function Index() {
    const [modalVisible , setModalVisible] = useState(false)
    const onClose = ()=>{
      setModalVisible(false)
    }

    const yesBtnClick = () =>{
      setModalVisible(false)
    }
  return (
     <SafeAreaView style={styles.container}>
      <View >
        <Header />
      </View>
      <View style={styles.moreContainer}>
        <Text style={styles.mainText}>Account</Text>
        <Link  href='/profile'  style={styles.btn}>
         <View style={styles.btnbox}>
            <FontAwesome5 name="user-check" size={20} color="white" />
            <Text  style={styles.btnText}>Profile</Text>
         </View>
        </Link>
        <Link href='/paySlip' style={styles.btn}>
         <View style={styles.btnbox}>
          <FontAwesome name="paypal" size={20} color="white" />
          <Text style={styles.btnText}>PaySlip</Text>
         </View>
        </Link>
        <Pressable style={styles.btn} onPress={() => setModalVisible(true)}>
          <View style={styles.btnbox}>
            <AntDesign name="logout" size={20} color="white" />
            <Text style={styles.btnText}>Logout</Text>
          </View>
        </Pressable>
        <Modal isVisible={modalVisible} onClose={onClose} yesBtn={yesBtnClick}/>
      </View>
   
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#0c0161'
  },
  moreContainer:{
    padding:20,
    marginTop:20,
  },
  mainText:{
    color:'white',
    fontSize:18,
    fontWeight:500,
    paddingLeft:10,
  },
  btn:{
    width:350,
    height:50,
    padding:10,
    paddingLeft:20,
    borderBottomWidth:0.5,
    borderBottomColor:'white',
    marginTop:30,
    borderRadius:10,
    boxShadow:'5px',
  },
  btnbox:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    width:200
  },
  btnText:{
    color:'white',
    fontSize:18,
    fontWeight:500,
    paddingLeft:30
  },
  modalContainer:{
    flex:1
  }
})
