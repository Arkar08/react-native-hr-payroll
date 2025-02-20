import {View,Text,StyleSheet} from 'react-native'

export default function LeaveCard(){
    return(
        <View style={styles.cardContainer}>
            <Text style={styles.mainText}>Personal Leave</Text>
            <View style={styles.card}>
                <View>
                    <Text style={styles.boxText}>May 09 12:00PM -</Text>
                    <Text style={styles.boxText}> May 10 12:00PM</Text>
                </View>
                <View>
                    <Text style={styles.boxText}>May 01 05:21AM</Text>
                    <View style={styles.statusBox}>
                        <Text style={styles.statusText}>Approve</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer:{
        flex:1,
        height:100,
        width:300,
        padding:10,
        paddingLeft:15,
        paddingRight:15,
        borderTopStartRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor:'#9c9fa1',
        boxShadow:'3px solid black'
    },
    card:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    statusBox:{
        backgroundColor:'green',
        width:100,
        height:30,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        marginTop:10
    },
    statusText:{
        color:'white'
    },
    mainText:{
        fontSize:18,
        fontWeight:500,
        color:'white'
    },
    boxText:{
        fontSize:12,
        fontWeight:400,
        color:'white'
    }
})