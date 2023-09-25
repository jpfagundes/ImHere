import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {

  function handleAddParticipant(){
    console.log("oi")
  }

  return (
    <View style={styles.container}> 

      <Text style={styles.eventName}> 
        Nome do Evento 
      </Text>

      <Text style= {styles.eventDate}> 
        Sexta, 4 de Novembro de 2023 
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={"#6B6B6B"}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>

      </View>

      <Participant />
      <Participant />

    </View>
  )
}

