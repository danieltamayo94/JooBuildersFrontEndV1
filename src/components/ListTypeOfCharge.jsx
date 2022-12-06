import React, {useEffect, useState } from 'react';
import {View, Text, StyleSheet, Image,  TouchableOpacity, Button} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'

function ListTypeOfCharge() {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('cun');
    

    const [items, setItems] = useState([
        {label: 'Metro 2', value: 'm2'  },
        {label: 'Metro Lineal', value: 'ml' },
        {label: 'Por Proyecto', value: 'pp' },
        {label: 'Por Caso', value: 'pc' },
        {label: 'Por Hora', value: 'ph' }
    ]);

  return (
    <View style={styles.container}>
        <DropDownPicker
                    open={open}
                    items = {items}
                    value={value}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    style={styles.select}
                    dropDownStyle={{ backgroundColor:'#fff'}}
                    zIndex={5000} zIndexInverse={6000}
                    placeholder={'Seleccione tipo de cobro'}
        />
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        paddingLeft:20,
    },

    select:{
        marginTop:20,
        height:50,
        width:220,
        marginBottom: 15,
        fontSize:25,
        borderWidth: 2,
        borderColor:'gray',
        backgroundColor:'#ffffff',
    },
})

export default ListTypeOfCharge