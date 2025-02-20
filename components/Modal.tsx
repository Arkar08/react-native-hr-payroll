import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import { PropsWithChildren } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
  yesBtn:() => void;
}>;

export default function EmojiPicker({ isVisible, onClose,yesBtn }: Props) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Are You Want To Logout?</Text>
          {/* <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable> */}
        </View>
        <View style={styles.btnGrounp}>
            <Pressable style={styles.btn} onPress={yesBtn}>
                <Text style={styles.title}>Yes</Text>
            </Pressable>
            <Pressable style={styles.btn1} onPress={onClose}>
                <Text style={styles.title}>No</Text>
            </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: '20%',
    width: '100%',
    backgroundColor: 'white',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 400,
  },
  titleContainer: {
    height: '30%',
    backgroundColor: '#464C55',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    textAlign:'center'
  },
  btnGrounp:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    gap:20,
    marginTop:'8%'
  },
  btn:{
    width:100,
    height:50,
    padding:10,
    backgroundColor:'green',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20
  },
  btn1:{
    width:100,
    height:50,
    padding:10,
    backgroundColor:'red',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
  }
});
