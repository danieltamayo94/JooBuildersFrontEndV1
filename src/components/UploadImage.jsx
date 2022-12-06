import React, {useState, useEffect} from  'react';
import {Text, View, Button, Image, TouchableOpacity, StyleSheet} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Home from '../icon/camera.png';




export default function UploadImage() {
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const[ image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted');
    })();
  }, []);

  const pickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log("resultado:"+JSON.stringify(result));

    if (!result.canceled){
      setImage(result.assets[0].uri);
    }
   
   
  };

 
  if(hasGalleryPermission === false){
    return <Text>No access to Internal Storage</Text>
  }

  

  return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => pickImage()}  style={styles.inputImage} ><Image source={Home} style={styles.logoCamera}/></TouchableOpacity>
        {image && <Image source={{ uri: image }} style={styles.imageOutput} />}
      </View>
  );
}


const styles = StyleSheet.create({
container:{
  justifyContent:'center',
  alignItems: 'center',
},

inputImage:{
  width:200,
  height:60,
  marginTop:2,
  backgroundColor:'white',
  borderColor:'gray',
  borderWidth:2,
  borderRadius:3,
  alignItems: 'center',
},

imageOutput:{
  marginTop:10,
  width: 70,
  height: 60,
},

logoCamera:{
  width:30,
  height:30,
  resizeMode:'contain', 
  overflow: "hidden",
  padding:5,
  margin:'auto',
  marginTop:'auto',
  marginBottom:'auto'

}

});


