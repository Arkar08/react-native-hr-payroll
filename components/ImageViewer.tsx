import { Image, type ImageSource } from "expo-image";
import { StyleSheet } from "react-native";


type Props = {
    image:ImageSource
}

export default function ImageViewer({image}:Props){
    return(
        <Image source={image} style={styles.image}/>
    )
}

const styles = StyleSheet.create({
    image:{
        width:50,
        height:50,
        borderRadius:100
    }
})