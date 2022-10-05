import {
  StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: "#cacaca",
  },
  bigDiv: {
    position: 'relative',
    height: '92%',
  },
  block : {
    position: 'absolute',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
  },
  closeIcon: {
    paddingHorizontal: 20,
  },
  list: {
    width: '100%',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cacaca'
  },
  lists: {
    paddingVertical: 40,
  },
  item: {
    display : 'flex', 
    justifyContent : 'space-between',
    flexDirection : 'row',
    alignItems  : "center",
    padding: 10,
    fontSize: 18,
    height: 44,
    fontSize: 18,
    color: '#1c1c1c',
    fontWeight: '700',
    width: '100%',
  },
  listCon: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#f00',
  },
  navbarBg : {
    width: '100%',
  },
  navbarTop: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 100,
    backgroundColor: '#fff',
    borderBottomWidth: 2,
    marginTop: 10,
    borderBottomColor: '#cacaca',
    paddingHorizontal: 20,
  },
  SignBtn: {
    backgroundColor: '#006aff',
    padding: 10 ,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  SignBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff'
  },
  FlatList2: {
  paddingHorizontal: 20,
  }

});


export default styles