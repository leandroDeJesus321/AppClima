import { View, Text, Pressable } from 'react-native'
import React, { useContext } from 'react'
import AppGradient from '@/components/AppGradient'
import AntDesign from '@expo/vector-icons/AntDesign'
import { router } from 'expo-router'
import CustomButton from '@/components/custombutton'
import { TimerContext } from '@/context/TimerContext'

const aAdjustMeditationDuration = () => {
  const {setDuration} = useContext(TimerContext);

  const handlePress = (duration: number)=>{
    setDuration(duration);
    router.back();
  }
  return (
    <View className='flex-1 relative'>
      <AppGradient colors={["#161b2e","0a4d4a","766e67"]}>
        <Text>
          Teste
        </Text>
        <Pressable onPress={()=> router.back()} className='absolute top-8 z-10'>
          <AntDesign name="leftcircleo" size={50} color="white" />
        </Pressable>
        <View className='justify-center h-4/5'>
          <Text className='text-center bold text-3xl text-white mb-8'>
            Ajustar seu horário de meditação
          </Text>
          <View>
            <CustomButton title="10" onPress={()=> handlePress(10)} containerStyles='mb-5'/>
            <CustomButton title="5 minutes" onPress={()=> handlePress(5 * 60)} containerStyles='mb-5'/>
            <CustomButton title="10 minutes" onPress={()=> handlePress(10 * 60)} containerStyles='mb-5'/>
            <CustomButton title="15 minutes" onPress={()=> handlePress(15 * 60)} containerStyles='mb-5'/>
          </View>
        </View>
      </AppGradient>
      <Text>aAdjustMeditationDuration</Text>
    </View>
  )
}

export default aAdjustMeditationDuration