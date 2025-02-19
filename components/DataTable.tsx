
import { StyleSheet,View,Text } from 'react-native';

const TableExample = () => {

  return (
    <View style={styles.container}>
        <View>
            <View style={styles.head}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Date</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Days</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Start Time</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.headerText}>End Time</Text>
                </View>
            </View>
            <View style={styles.tableBody}>
                <View style={styles.tableBody1}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>08</Text>
                    </View>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Weds</Text>
                    </View>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>11:08AM</Text>
                    </View>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>11:09AM</Text>
                    </View>
                </View>
                <View style={styles.tableBody1}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>08</Text>
                    </View>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Weds</Text>
                    </View>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>11:08AM</Text>
                    </View>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>11:09AM</Text>
                    </View>
                </View>
                <View style={styles.tableBody1}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>08</Text>
                    </View>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Weds</Text>
                    </View>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>11:08AM</Text>
                    </View>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>11:09AM</Text>
                    </View>
                </View>
            </View>
        </View>
       
    </View>
  );
};

export default TableExample;

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        paddingTop: 20,
        width:"100%" 
    },
    head:{
        backgroundColor:'black',
        height:50,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
    },
    header:{
        width:"25%"
    },
    headerText:{
        textAlign:'center',
        color:'white',
    },
    tableBody:{
        width:'100%',
        backgroundColor:'transaprent',
        height:150,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    tableBody1:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        borderWidth:1.5,
        padding:5,
        height:50,
        backgroundColor:'#a3a1c7'
    }
});
