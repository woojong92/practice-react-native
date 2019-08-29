import React, {Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet , Dimensions} from 'react-native';

const { width, height } = Dimensions.get("window");

export default class ToDo extends Component {
    state = {
        isEditing : false,
        isCompleted : false,
    };

    render () {
        const {isCompleted} = this.state;

        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._toggleComplete}>
                    <View 
                        style={[
                            styles.circle,
                            isCompleted ? styles.completedCircle : styles.uncompletedCircle]}/>
                </TouchableOpacity>
                <Text style={styles.text}>Hello I'm ToDo.</Text>
                
            </View>
        );
    }

    _toggleComplete = () => {
        this.setState(prevState => {
            return {
                isCompleted : !prevState.isCompleted
            }
        })
    }


}

const styles = StyleSheet.create({
    container : {
        width : width -50,
        borderBottomColor : "#bbb",
        borderBottomWidth : StyleSheet.hairlineWidth,
        flexDirection : "row",
        alignItems : "center"
    },
    circle : {
        width: 20,
        height: 20,
        borderRadius : 25,
        //borderColor : "red",
        borderWidth : 2,
        //backgroundColor : "red",
        marginRight : 20
    },
    completedCircle : {
        borderColor : "#bbb"
    },
    uncompletedCircle : {
        borderColor : "red"
    },
    text : {
        fontWeight: "600",
        fontSize: 20,
        marginVertical: 20,
    }
});