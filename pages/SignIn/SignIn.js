import { View, Text , StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'

const SignIn = () => {
    const [telN, setTelN] = useState()
    const [password, setPassword] = useState()


   const signIn = async ()=> {
        await axios.post('https://eduon-backend.uz/api/v1/accounts/login/' , {
            phone_number: telN,
            password: password,
         }).then(data => console.log(data))
        }
      

  return (
    <View style={styles.view}>
     <View style={styles.container}>
        <Text style={styles.authTitle}>Frofilga kirish</Text>
        <TextInput style={styles.input} placeholder='nomeringizni kiriting' onChangeText={(e) => setTelN(e)}></TextInput>
        <TextInput style={styles.input} placeholder='parolingizni kiriting' onChangeText={(e) => setPassword(e)}></TextInput>
        <TouchableOpacity style={styles.btn} onPress={signIn}><Text style={styles.btnText}>Tizimga Kirish</Text></TouchableOpacity>
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

export default SignIn