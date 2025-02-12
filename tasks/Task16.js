import React, { Component  } from 'react';
import { View, Text ,Button,Alert} from 'react-native';




class Task16 extends Component {
  constructor(){
    super();
    this.state = {
      content: true
    };
  }
  hide_show = () => {
    this.setState({content : !this.state.content});
  }
 render(){ 
  return (
    <View>
      { this.state.content && <Text>Hello from Task16!</Text> || <Text></Text>}
      <Button
      title = "show or hide"
      onPress={this.hide_show}
      />
    </View>
    //onPress={() => Alert.alert('Simple Button pressed')} inside button
      //<Button
      //title = "test"
      //onPress={() => Alert.alert("Button in react native")}
      ///>
  );
};
}
export default Task16;
