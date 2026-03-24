import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function EditarContatoScreen({ route }) {
  const { contato } = route.params;
  const [nome, setNome] = useState(contato.nome);

  return (
    <View>
      <Text>Editar</Text>

      <TextInput value={nome} onChangeText={setNome} />

      <TouchableOpacity>
        <Text>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}