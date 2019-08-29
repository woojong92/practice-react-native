import React, { Component} from 'react';
import { StyleSheet, Text, View, StatusBar, Dimensions, TextInput, Platform, ScrollView } from 'react-native';
import ToDo from './ToDo';

const { height, width } = Dimensions.get("window");

export default class App extends Component {
  state = {
    newToDo : "",
  }

  _controlNewToDo = (t) => {
    this.setState({ newToDo: t })
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>TODO</Text>
        <View style={styles.card}> 
          <TextInput 
            style={styles.input} 
            placeholder={"New To Do"} 
            onChangeText={this._controlNewToDo}
            placeholderTextColor={"#999"}
            returnKeyType={"done"}
            autoCorrect={false}
            >
          </TextInput>
          <ScrollView contentContainerStyle={styles.ToDos}>
            <ToDo/>
          </ScrollView>
            
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f23657',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color : "white",
    fontSize : 30,
    marginTop: 50,
    fontWeight : "200",
    marginBottom : 30,
  },
  card : {
    backgroundColor : "white",
    flex : 1, 
    width : width - 25,
    borderTopLeftRadius : 10,
    borderTopRightRadius : 10,
    ...Platform.select({
      ios: {
        shadowColor : 'rgb(50, 50, 50)',
        shadowOpacity : 0.5,
        shadowRadius : 5,
        shadowOffset : {
          height : -1,
          width: 0
        }
      },
      android: {
        elevation: 3,
      }
    })
  },
  input : {
    padding : 20,
    borderBottomColor : "#bbb",
    borderBottomWidth: 1
  },
  ToDos : {
    alignItems : "center"
  }

});
