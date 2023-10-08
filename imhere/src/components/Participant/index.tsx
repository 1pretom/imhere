import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
    name: string;
    onRemove: () => void;
}

export function Participant({name, onRemove} : Props){


    function handleParticipantAdd(){
        console.log("Você clicou no botão")
    }

   

    return(
        <View style={styles.container}>
            
            <Text style={styles.name}>
                {name}  
            </Text>
           
            <TouchableOpacity style={styles.button} onPress={onRemove}>
            <Text style={styles.buttonText}>
                Del
            </Text>
            </TouchableOpacity>

        </View>
    )
}