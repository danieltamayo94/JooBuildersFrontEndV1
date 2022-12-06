import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import {View ,ViewPropTypes, StyleSheet, Text, Image} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Category from './Category'
import JooBuilders from './JooBuilders'
import WorkWithUs from './WorkWithUs'
import Icon from 'react-native-vector-icons/FontAwesome'


const Tab = createBottomTabNavigator();

const myIcon = <Icon name="rocket" size={30} color="#900" />

function MyTabs(){
    return (
        <Tab.Navigator 
         initialRouteName="Categorias"
         screenOptions={({route}) =>({
            activeTintColor:'#900',
            inactiveTintColor:'gray',
            showLabel:true,
            style:{backgroundColor: 'rgb(18, 18, 18)'},
            // tabBarActiveTintColor:'black',
            tabBarIcon: ({focused, color, size}) => {
                let iconName = '';
                switch(route.name){
                    case 'categorias':
                        iconName = 'home';
                        size = focused ? size +8 : size + 5;
                        break;
                    case 'joobuilders':
                        iconName = 'wrench';
                        size = focused ? size +8 : size + 5;
                        break;
                    case 'Ser un JooBuilder':
                        iconName = 'user';
                        size = focused ? size + 8 : size + 5;
                        break;

                }
                return <Icon name={iconName} size={size} color={color}/>

                
            }
         })}
        
        >
            <Tab.Screen name='categorias' component={Category} 
            options={{tabBarLabel:'Categorías'}}
            />
            <Tab.Screen name='joobuilders' component={JooBuilders}  options={{tabBarLabel:'JooBuilders'}}/>
            <Tab.Screen name='Ser un JooBuilder' component={WorkWithUs}  options={{tabBarLabel:'Ser un JooBuilder'}}/>
        </Tab.Navigator>
    );
}




export default function Navigation(){
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
}