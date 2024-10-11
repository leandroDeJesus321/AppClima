import {View, Text, ImageBackgroundComponent, ImageBackground, Pressable, ScrollView} from "react-native";
import React, { useEffect, useState } from "react"
import { useLocalSearchParams, router } from "expo-router";
import { GalleryPreviuewData } from "@/constants/models/AffirmationsCategory";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";
import AppGradient from "@/components/AppGradient";
import AntDesign from '@expo/vector-icons/AntDesign';

const AffirmationsPractice = () => {
    const {itemId} = useLocalSearchParams();
    
    const [affirmations, setAffirmation] = useState<GalleryPreviuewData>();
    const [sentences, setSentences] = useState<string[]>([]);

    useEffect(() =>{
        for (let i = 0; i < AFFIRMATION_GALLERY.length; i++) {
            const affirmationsData = AFFIRMATION_GALLERY[i].data;

            const affirmationToStart = affirmationsData.find((a)=> a.id===Number(itemId))

            if(affirmationToStart){
                setAffirmation(affirmationToStart);

                const affirmationsArray = affirmationToStart.text.split(".");
                //remover o último elemento
                if(affirmationsArray[affirmationsArray.length - 1] === ''){
                    affirmationsArray.pop();
                }

                setSentences(affirmationsArray);

                return;
            }
            
        }
    }, [])

    return(
        <View>
            <ImageBackground source={affirmations?.image} resizeMode="cover" className="flex-1">
                <AppGradient colors={["rgba(0,0,0,0.3)","rgba(0,0,0,0.9)"]}>
                    <Pressable onPress={()=> router.back()} className="absolute top-16 left-6 z-10">
                        <AntDesign name="leftcircleo" size={50} color="white" />
                    </Pressable>
                    <ScrollView className="mt-20" showsVerticalScrollIndicator={false} >
                        <View className="h-full justify-center" >
                            <View className="h-4/5 justify-center" >
                                {sentences.map((sentence, idx)=>(

                                    <Text key={idx} className="text-white text-3xl mb-12 font-bold text-center">
                                        {sentence}.
                                    </Text>
                                ))}
                                
                            </View>
                        </View>
                    </ScrollView>

                </AppGradient>
            </ImageBackground>
            
        </View>
    )
}

export default AffirmationsPractice