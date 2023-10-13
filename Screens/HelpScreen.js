import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Platform,
  StatusBar,
} from 'react-native';
import axios from "axios"

const iconPoint = require('../assets/IconAppLeis.jpg');

export default class HelpScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        search: {}
    }
}

  getSearch=(search)=>{
    var url = "https://cloudsearch.googleapis.com/v1/query/" + search
    axios
        .get(url)
        .then(response => {
            this.setState({search: response.results})
        })
        .catch(error => {
            Alert.alert(error.message)
        })
}

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <Text style={styles.title}>Digite aqui sua dúvida!!</Text>
        <TextInput onChange = {(text)=> {this.getSearch(text)}} style={styles.input} />
        <View style={styles.imageContainer}>
          <Image style={styles.icon} source={iconPoint} />
        </View>
        <View>
          <Text>
            {this.state.search}
          </Text>
        </View>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Gloria Hallelujah,cursive;',
    fontSize: 25,
  },
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  imageContainer: {
    flex: 0.7,
    width: '100%',
    justifyContent: 'center',
    alignItems: "center",
  },
  input: {
    borderWidth: 2,
    backgroundColor: '#E0E0E0',
    width: 300,
    alignSelf: 'center',
    marginTop: 10,
  },
  icon: {
    resizeMode: 'contain',
    height: 200,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 35,
  },
});
