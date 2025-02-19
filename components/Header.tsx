import { Text, View,StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import ImageViewer from "./ImageViewer";


const placeHolderImage = require("@/assets/images/girl2.jpg");
export default function Header(){
    return (
        <>
            <View style={styles.container}>
                <View style={styles.imageHolder}>
                    <ImageViewer image={placeHolderImage}/>
                    <View style={styles.textContainer}>
                        <View style={styles.text1Container}>
                            <Text style={styles.text1}>Hi,</Text>
                             <Text style={styles.text1}>There</Text>
                        </View>
                        <Text style={styles.text2}>Arkar</Text>
                        <Text style={styles.text1}>test</Text>
                    </View>
                </View>
                <View>
                    <Ionicons name="notifications" color="white" size={24} />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        padding:10,
    },
    text1:{
        fontSize:14,
        fontWeight:400,
        color:'white'
    },
    text2:{
        fontSize:20,
        fontWeight:500,
        color:'white'
    },
    imageHolder:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    textContainer:{
        marginLeft:10
    },
    text1Container:{
        display:'flex',
        flexDirection:'row'
    }
})