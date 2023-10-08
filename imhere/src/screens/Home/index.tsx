import {Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant'
import { useState } from 'react'

export default function Home (){

    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setparticipantName] = useState('');

    function handleParticipantAdd(){
        if(participants.includes(participantName)){
            return Alert.alert("Participante existe", " Ja existe um participante com esse nome")
        }
        setParticipants(prevState => [...prevState, participantName]);
        setparticipantName('');
        
    }
    function handleParticipantRemove (name: string){
        Alert.alert("Remover", `Remover o participante ${name}?`,
        [{
            text: "Cancelar",
            onPress: () => Alert.alert("Cancelado"),
            style: "cancel"
        },
        {
            text:"Sim",
            onPress: () => setParticipants(prevState => participants.filter(participant => participant !== name))

        }
    ]);
        console.log(`Você clicou no botão de delete ${name}`)
    }
    

  return(
    <View style={styles.container}>
    <Text style={styles.title}>Adm do baba</Text>
    <Text style={styles.subtitle}>Nomes dos adm</Text>

   <View style={styles.form}>
    <TextInput 
    style={styles.input}
    placeholder="Insira o nome"
    placeholderTextColor="#6B6B6B"
    keyboardType="email-address"
    onChangeText={setparticipantName}
    value={participantName}
    />

    <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>
            Add    
        </Text>
    </TouchableOpacity>
    </View >

    {/* <ScrollView showsVerticalScrollIndicator={false}> */}

    <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => (
            <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
            />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() =>(
                <Text style={styles.listEmptyText}>
                    Ninguém é adm? oxe, como assim carai
                </Text>
            )}
        />
        </View >
    
  )
}

/* {
        participants.map(participant => (
            <Participant 
            key={participant} 
            name={participant} 
            onRemove={() => handleParticipantRemove (participant)}/>
            ))
        } */
    /* </ScrollView> */