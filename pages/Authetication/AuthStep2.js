import { View, Text, StyleSheet, TextInput , TouchableOpacity} from 'react-native'
import React, { useState } from 'react'

const AuthStep2 = () => {
    const [sms, setSms] = useState()

      async function  sendData () {
        await axios.post('https://eduon-backend.uz/api/v1/accounts/step-two/' , {
            otp : sms
         }).then(data => console.log(data))
        }
      
  return (
    <View  style={styles.view}>
      <View style={styles.container}>
        <Text style={styles.authTitle}>Ro'yhatdan o'tish step2</Text>
        <TextInput style={styles.input} placeholder='parolni kiriting' onChangeText={(e) => setSms(e)}></TextInput>
        <TouchableOpacity style={styles.btn} onPress={sendData}><Text style={styles.btnText}>Davom Etish</Text></TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    view : {
      flex: 1,
      alignItems: 'center'
    },
    container: {
      color: '#000',
      width: '90%',
    },
    rubik: {
      fontFamily: 'Ultraf'
    },
    authTitle: {
      fontWeight: '900',
      // margin: 50
      marginVertical: 25,
      textAlign: 'center',
      fontSize: 24
    },
    input: {
      padding: 20,
      fontSize: 21, 
      borderWidth: 2,
      borderColor: '#cacaca',
      color: '#000',
      borderRadius: 15,
      marginBottom: 25,
    },
    btn: {
      paddingVertical: 20,
      backgroundColor: 'rgb(128, 181, 255)',
      borderRadius: 15,
    },
    btnText: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 24,
    }
  });
  

export default AuthStep2