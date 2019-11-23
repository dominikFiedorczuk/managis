import React, { Component } from 'react'

import {Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native'


export default class AjoutInvites extends Component {
  render() {
    return (
      <ScrollView>
      <View style={styles.containerTitre}>
        <Text style={styles.titrePage}>Ajoute des invités !</Text>
      </View>
        <View style={styles.inputContainer}>
          <TextInput
            style = {styles.inputBox}
            placeholder = 'Adresse mail'
            placeholderTextColor = '#FFFFFF'
          />
        </View>
        <View style={styles.submitContainer}>
          <TouchableOpacity>
            <Text style={styles.submitButton}>Valider</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  logo: {
    width: 350,
    height: 350
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  submitContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  inputBox : {
		width:300,
		backgroundColor:'#3A4750',
		borderRadius: 25,
		paddingVertical:12,
		fontSize:16,
		color:'#FFFFFF',
		textAlign:'center',
		marginVertical: 10
	},
  submitButton: {
    backgroundColor:'#3A4750',
		width:100,
		borderRadius: 25,
		marginVertical: 10,
		paddingVertical: 13,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  titrePage: {
      color: '#FFFFFF',
      fontSize: 18
    },
  containerTitre: {
    backgroundColor:'#3A4750',
    width:200,
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
    textAlign: 'center',
  },
  signupButton: {
    textAlign: 'center',
    marginVertical: 10,
    paddingVertical: 13,
    color: '#3A4750'

  }
})