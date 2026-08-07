import { Button, StyleSheet, Text, TextInput, View, Keyboard } from 'react-native';
import { useBuscaCep } from '@/hooks/useBuscacep';

export default function BuscaCEP() {
  const { cep, setCep, endereco, buscarCEP } = useBuscaCep();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consulte seu CEP</Text>

      <TextInput
        style={styles.textinput}
        value={cep}
        onChangeText={setCep}
        placeholder="Digite o CEP"
        keyboardType="numeric"
        placeholderTextColor="#777"
      />

      <Button
  title="Buscar"
  onPress={() => {
    Keyboard.dismiss();
    buscarCEP();
  }}
/>

      {endereco.logradouro !== '' && (
        <View style={styles.result}>
          <Text style={styles.resultTitle}>Endereço encontrado:</Text>

          <Text style={styles.text}>
            Logradouro: {endereco.logradouro}
          </Text>
          <Text style={styles.text}>
            Bairro: {endereco.bairro}
          </Text>
          <Text style={styles.text}>
            Cidade: {endereco.localidade}
          </Text>
          <Text style={styles.text}>
            Estado: {endereco.uf}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6cc0f8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#004c99',
    marginBottom: 20,
  },

  textinput: {
    width: '80%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    marginVertical: 15,
    fontSize: 16,
  },

  result: {
    width: '85%',
    marginTop: 25,
    padding: 18,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0066cc',
    marginBottom: 10,
  },

  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
});
