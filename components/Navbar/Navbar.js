import {StyleSheet, View, Text, Image, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome,AntDesign } from '@expo/vector-icons';
import styles from "./NavbarCss"
const Navbar = () => {
  const [show, setShow] = useState(true)
  return (
 <View style={styles.bigDiv}>
    <View style={styles.view}>
      <FontAwesome onPress={() => setShow(!show)} name="bars" size={24} color="black" />
      <Image source={require('../../assets/images/logo.png')} />
      <FontAwesome name="user-circle" size={40} color="black" />
    </View>
    <View style={styles.block}>
      {show ? 
      <View style={styles.navbarBg}>
        <View style={styles.navbarTop}>
        <TouchableOpacity style={styles.SignBtn}>
          <Text style={styles.SignBtnText}>Boshlash</Text>
        </TouchableOpacity>
        <AntDesign onPress={() => setShow(false)} style={styles.closeIcon} name="closecircle" size={24} color="black" />
        </View>
        <View style={styles.list}>
        <FlatList style={styles.lists}
        data={[
          {key: 'Barchasi'},
          {key: 'BIznes'},
          {key: 'IT va Dasturlash'},
          {key: 'Foto va video'},
          {key: 'Ta`lim va ilmiy fanlar'},
          {key: 'Marketing'},
          {key: 'San `at'},
          {key: 'Shaxsiy o`sish'},
          {key: 'Boshqalar'},
        ]}
        renderItem={({ item, index, separators }) => (
          <TouchableHighlight
            key={item.key}
            // onPress={() => this._onPress(item)}
            // onShowUnderlay={separators.highlight}
          >
            <View style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>{item.key}</Text>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </TouchableHighlight>
        )} />
        </View>
        <View style={styles.FlatList2}>
        <FlatList style={styles.lists}
        data={[
          {key: 'Spiker'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key} </Text>} />
        <View></View>
        </View>
      </View> : null}
    </View>
 </View>
  )
}


// const styles = StyleSheet.create({
//     view : {
//       // flex: 1,
//       flexDirection: 'row',
//       backgroundColor: 'red',
//       padding: 20,
//       alignItems: 'center',
//       justifyContent: 'space-between',
//       height: 10
//     },
   
//   });

export default Navbar