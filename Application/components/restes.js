import React, { Component } from 'react'

import { View,
        Text,
        TouchableOpacity,
        Image, StyleSheet,
        ScrollView,
        TextInput } from 'react-native'

class Restes extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.containerTitre}>
		<TouchableOpacity
          onPress={() => this.props.navigation.navigate("Menu")}
          style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={require('../image/icons8-gauche-50.png')}
            style={styles.icon}
            />
        </TouchableOpacity>

          <View style={{flex: 6, justifyContent: 'center'}}>
            <Text style={styles.titrePage}>Marché des restes</Text>
          </View>
          <View style={{flex : 1}}>
		  <TouchableOpacity
            onPress={() => this.props.navigation.openDrawer('myNav')}
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={require('../image/icons8-menu-arrondi-50.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          </View>
        </View>
        <View style={{margin: 5, alignItems: 'center'}}>
          <TextInput
            style={styles.textinput}
            placeholder='Rechercher des restes'
            placeholderTextColor='#FFFFFF'
          />
          <View>
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <Image
                source={require('../image/icons8-chercher-50.png')}
                style={styles.iconSearch}/>
              <Text style={styles.searchText}>Rechercher</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles= StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  },
  iconSearch: {
    width: 20,
    height: 20,
    margin: 2
  },
  searchText: {
    alignItems: 'center',
    fontSize: 16,
    color: '#3A4750'
  },
  textinput: {
    width:300,
		backgroundColor:'#3A4750',
		borderRadius: 25,
		paddingVertical:12,
		fontSize:16,
		color:'#FFFFFF',
		textAlign:'center',
		marginVertical: 10
  },
  containerTitre: {
    backgroundColor:'#3A4750',
    flexDirection: 'row',
    height: 60
  },
  titrePage: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center'
  },
  annonce: {
    alignItems: 'center',
    fontSize: 16,

  }
})

export default Restes
