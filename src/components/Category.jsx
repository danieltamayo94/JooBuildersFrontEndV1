import React, {useState} from 'react'
import { StyleSheet, Text, View , SafeAreaView, FlatList, Image,ScrollView, TouchableOpacity} from 'react-native';
import CategoriesList from './categoriesList'

const Category = () => {

  return (
    <View style={styles.container}>
        
            <FlatList data={CategoriesList} numColumns={2} style={styles.cardList} renderItem={({item}) => (
                 <TouchableOpacity style={styles.card} key={item.id}>
                
                    <Image  source={item.image} style={styles.image}/>
                    <View style={styles.backgroundText}>
                        <Text style={styles.primaryText}>{item.category}</Text>
                    </View>
                
                </TouchableOpacity>
            
        )}/>
       
            
       
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: 360,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:25,
        
    },
  
    cardList:{
        flex: 1,
        flexDirection: 'row',
        margin:'auto',
        padding:5,
        paddingLeft:12,
        marginBottom:5
    },
  
    backgroundText:{
        position: 'absolute',
        top: 107,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
  
    primaryText:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        backgroundColor:'rgb(29,29,29)',
        padding:10,
        width:150,
        elevation:5,
        textAlign: 'center',
        shadowColor: 'rgba(0,0,0)',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        opacity:0.8,
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
  
    },
  
    card:{
        width:150,
        height:150,
        borderRadius:5,
        margin:7,
    },
  
    image:{
        width:150,
        height:150,
        resizeMode: 'contain',
        borderRadius: 150 / 8,
        borderWidth: 3,
        overflow: "hidden",
        elevation:-1
    },
  
    scroll:{
      color:'#fff',
      width:2,
      margin:'auto',
    }
  });



export default Category