import { StyleSheet, ImageBackground, Text, View, SafeAreaView } from 'react-native'

import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import CustomButton from '@/components/custombutton';

const beachimage = require('@/assets/meditation-images/beach.webp');

const App = () => {
    return (
      <View className='flex-1 justify-center items-center'>
        <ImageBackground
        source={beachimage}
        resizeMode="cover"
        className="flex-1"
        style={styles.image}
        
        >
          
          <LinearGradient 
            className='flex-1' 
            colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
            
            <SafeAreaView className='flex-1 mx-5 my-12 justify-between'>

              {/*  */}
              <View>
                <Text className='text-center text-white font-bold text-4xl' >
                  Simple Meditation
                </Text>
                <Text className='text-white text-center text-2xl mt-3'>
                  Meditação simples é para todos!
                </Text>
              </View>

                {/* Botão do APP */}
              <View>
                  <CustomButton 
                  onPress={()=> console.log('Clicado!')} 
                  title="Clique aqui!" />
              </View>

              <StatusBar style="light" />
            </SafeAreaView>

          </LinearGradient>
          

        </ImageBackground>
        
      </View>
    )
  
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignContent: 'center',
    alignItems: 'center',
    color: 'white'
  },
  image:{
    flex:1,
    height:'100%',
    width: '100%',
  }

});


export default App
