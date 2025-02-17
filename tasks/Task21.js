import {React,Component,useState, useEffect} from "react";
import {Text,View,Button,StyleSheet,ActivityIndicator} from 'react-native'
const Task21 = () => {
        const [showPage, setshow] = useState(false);
        return(
        <View>
            <Button
            title = "go to the MyFunctionPage"
            onPress={() => setshow(!showPage)}/>
            {showPage?<MyFunctionPage/>:null}
            {}
        </View>
        );
    
}

const MyFunctionPage = () => {
        function componentDidMount(){
            console.log("MyFunctionPage did mount");
        }
        function componentWillUnmount(){
            console.log("MyFunctionPage will unmount");
        }
        useEffect(()=>{componentDidMount()

            return()=>{
                componentWillUnmount();
            };
        },[]);
            return(
                <View>
                    <Text>
                        this is the MyFunctionPage page
                    </Text>
                </View>
            );
}

export default Task21;