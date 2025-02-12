import {React,Component} from "react";
import {Text,View,Button,StyleSheet} from 'react-native'
class Task17 extends Component{
    constructor(){
        super();
        this.state = {
            content: false,
            name: "show"
        }
    }

    show_hide = () => {
        this.setState({content:!this.state.content});
        this.state.content?this.state.name = "Show" : this.state.name = "Hide"
    }

    render(){
        return (
        <View style={styles.container}>
            {this.state.content?<Text>Omar suhail altoom</Text>:<Text></Text>}
            <Button
            title = {this.state.name}
            onPress={this.show_hide}
            />
        </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f8f9fa',
      padding: 20,
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#2c3e50',
      marginBottom: 20,
    }
  });

export default Task17;