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


import db from "../Config";


const bgImg = require('../assets/bgImgAppLeis.jpg');

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      id: "",
    };
  }

  getUser=()=>{
    db.collection("Users")
      .get()
      .then((response)=>{
        console.log(response.data())
      })
  }

  componentDidMount(){
    this.getUser()
  }
  
  render() {
    return (
      <View style={styles.container}>


        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground style={styles.bgImage} source={bgImg}>
          <Text style={styles.title}> O poder dos seus direitos </Text>
           <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ user: text })}
            value={this.state.user}
            placeholder={"Digite o seu usuário"}
            placeholderTextColor={"red"}
          />
           <TextInput
            style = {styles.input2}
            onChangeText={(text) => this.setState({ id: text })}
            value={this.state.id}
            placeholder={"Digite o seu Id"}
            placeholderTextColor={"red"}
          />
          <TouchableOpacity onPress = {()=>{this.props.navigation.navigate("HelpScreen")}} style = {styles.button}>
          <Text> Enviar </Text>
          </TouchableOpacity>
        </ImageBackground>
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
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 35,
  },
  input:{
    borderWidth: 2,
    backgroundColor: "white",
    width: 270,
    alignSelf: "center",
    marginTop: 230
  },
   input2:{
    borderWidth: 2,
    backgroundColor: "white",
    width: 270,
    alignSelf: "center",
    marginTop: 20
  },
  button: {
    width: "95%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DAA520",
    borderRadius: 15,
    marginTop: 15,
  }
})
