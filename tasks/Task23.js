import React, { Component, useState } from "react";
import { Text, View, TextInput} from 'react-native';

const Task23 = ({namee}) =>{
    return (
        <View>
            <Text>your name is : {namee}</Text>
        </View>
    );
};
class MyClass extends Component{
    
    constructor(){
        super();
        this.state = {
            name:''
        }
    }
    changeName = (nn) => {
        this.setState({name : nn});
    };
    render(){
        return(
            <View>
                <TextInput
                    value={this.state.name}
                    onChangeText={this.changeName}
                    placeholder="name"                
                />
                <Task23 namee = {this.state.name}/>                
            </View>
            
        );
        
    }
}

export default MyClass;