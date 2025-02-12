import {React,Component,useState} from "react";
import {Text,View,Button,StyleSheet,ActivityIndicator} from 'react-native'
const Task19 = () => {
        const [showPage, setshow] = useState(false);
        return(
        <View>
            <Button
            title = "go to the MyClassPage"
            onPress={() => setshow(true)}/>
            {showPage?<MyClassPage/>:null}
        </View>
        );
    
}
class MyClassPage extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <View>
                <Text>
                    this is the MyClassPage page
                </Text>
            </View>
        );
    }
}

export default Task19;