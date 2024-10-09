import { View, Text, FlatList, Pressable, ImageBackground, StyleSheet, Button } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import { StatusBar } from "expo-status-bar";

import { MEDITATION_DATA } from "@/constants/meditation-data";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import { useRouter } from "expo-router";
import CustomButton from '@/components/custombutton';
import { LinearGradient } from "expo-linear-gradient";

const NatureMeditate = () =>{
    const router = useRouter();
    return (
        <View className="flex-1" >
            <AppGradient colors={["#161b2e","#0a4d4a","#766e67"]}>
                <View className="mb-6" >
                    <Text className="text-gray-200 mb-3 font-bold text-4xl text-left" >Faça meditação ou cheire um baseado, meu amigão</Text>
                    <Text className="text-indigo-100">Meditação é coisa boa...</Text>
                </View>
                <View>
                    <FlatList 
                    data={MEDITATION_DATA} 
                    className="mb-20"
                    keyExtractor={(item)=> item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item})=>(
                        <Pressable
                            onPress={()=>console.log("Pressionado")}
                            className="h-48 my-3 rounded-md overflow-hidden"
                        >
                            <ImageBackground
                                source={MEDITATION_IMAGES[item.id - 1]}
                                resizeMode="cover"
                                className="flex-1 rounded-lg justify-center"
                            >
                                <LinearGradient
                                colors={["transparent", "rgba(0,0,0,0.8)"]}
                                className="flex-1 justify-center items-center"
                                >
                                    <Text
                                        className="text-gray-100 text-3xl font-bold text-center"
                                    >
                                        {item.title}
                                    </Text> 
                                </LinearGradient>
                                
                            </ImageBackground>
                        </Pressable>
                    )}
                    
                    ></FlatList>
                </View>
                <View>
                <CustomButton
                    onPress={() => router.push("/")} 
                    title="Clique aqui!"/>
                </View>
            </AppGradient>
            

            <StatusBar style="light" ></StatusBar>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent: 'center',
        alignItems: 'center',
        borderColor: 'white'
    },
    
})

export default NatureMeditate;


