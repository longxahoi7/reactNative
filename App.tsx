/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
  FlatList,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

interface IToDO {
    id:number,
    name:string
    };
const App = () => {
    const [name,setName] = useState<string>('');
    const [test,setTest] = useState({
        name:'Long ne',
        age:22,
        }     );
    const [count,setCount] = useState<number>(0);
    const [age,setAge] = useState<number>(0);
//     neu dung FlatList thi phai thay id thanh key nha giup tang hieuj suat do
const [todo,setTodo]=useState("");
    const [listTodo,setListTodo] = useState<IToDO>([]);

    function randomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
const handle=()=>{
    if(!todo) return;
  setListTodo([...listTodo,{id:randomInteger(1,10000),name:todo}]);
    setTodo("");
    }

  return (
    <View
    style={styles.container}>
    <View >
    <Text style={styles.header}>Long hoi ai tra loi</Text>
    </View>
    <View style={styles.body}>
       <TextInput
       value={todo}
       style={styles.inputText}
onChangeText={(value)=>setTodo(value)}
        />
    </View>
    <View style={styles.body}>
       <Button title="Add todo"
       onPress={handle}
       />
    </View>
     <View style={styles.body}>
           <Text>
           List Todo:{todo}
           </Text>
           <Text>
                   <FlatList
                   data={listTodo}
                   renderItem={ ({item}) =>{
                        return (
                         <Text>{item.name}</Text>
                            )
                       }}
                   />

                      </Text>
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
            flex:1,
padding:20

        },
    hi:{
        fontSize:40,
        borderWidth:2,
        color:'red',
        fontWieght:'600',
        },
     hi1:{
            fontSize:40,
            borderWidth:2,
            color:'red',
            backgroundColor:'pink',
            marginBottom:'30',
            padding:30,

            },
    inputText:{
        borderWidth:1,
        borderColor:'red',
        padding:2,
        marginHorizontal:20,
        marginTop:20
        },
    header:{

        marginTop:10,
      marginHorizontal:10,
      backgroundColor:"red",
        fontSize:30,
        textAlign:"center"
        }
});




export default App;
