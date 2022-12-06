import React from 'react'
import { StyleSheet, Text, View ,ScrollView,  TextInput, TouchableOpacity } from 'react-native';
import ListTypeOfCharge from './ListTypeOfCharge';
import UploadImage from './UploadImage';
import ListStates from './ListStates';
import ListOccupation from './ListOccupation';
import ListAssociatedProjects from './ListAssociatedProjects'


const WorkWithUs = () => {
    
  return (

        <View style={styles.container}>
            <ScrollView style={styles.form}>   
                    <Text style={styles.primaryText}>Nombre Completo</Text>
                    <TextInput style={styles.inputForm} placeholder={'Fernando Perez'}></TextInput>
                    <ListTypeOfCharge/>
                    <Text style={styles.primaryText}>Precio $</Text>
                    <TextInput style={styles.inputForm} keyboardType='numeric' placeholder={'60000'} 
                        maxLength={10}></TextInput>
                    <Text style={styles.primaryText}>Trabajos realizados</Text>
                    <UploadImage/>
                    <ListStates/>
                    <Text style={styles.primaryText}>Ubicación</Text>
                    <TextInput style={styles.inputForm} placeholder={'Cra 43a 34-17'}></TextInput>
                    <ListOccupation/>
                    <ListAssociatedProjects/>
                    <View style={styles.viewButtons}>
                    <TouchableOpacity style={styles.button} ><Text style={styles.textButton}>Cancelar</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} ><Text style={styles.textButton}>Guardar</Text></TouchableOpacity>
                    </View>
            </ScrollView>
        </View>

  )
}
const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:25,
        marginLeft:10,
        marginRight:10,
        flexDirection: 'row',
        margin:'auto'
    },
    form:{
        width:280,
        height:550,
        backgroundColor:'white',
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        marginLeft:20,
        marginTop:20,
        marginRight:20,
    },

    primaryText: {
        color:'black',
        padding:25,
        fontWeight:'bold',
        fontSize:20,
    },

    inputForm:{
        width:220,
        margin:5,
        marginLeft:20,
        borderColor:'gray',
        borderWidth:2,
        borderRadius:3,
        color:'black',
        padding:5,
        fontSize:20
    },

    button:{
        width:90,
        height:40,
        borderColor:'gray',
        borderRadius:3,
        borderWidth:2,
        padding:10,
        margin:10,
        backgroundColor:'rgb(37,37,37)'
    },

    viewButtons:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textButton:{
        color:'white',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:15,
    }

  });
  
  
export default WorkWithUs