import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.title}>✈️ Sobre a VivaVoo Turismo</Text>

        <Text style={styles.text}>
          Na VivaVoo Turismo, nossa missão é transformar cada viagem em uma experiência inesquecível.
          Planejamos tudo com cuidado para que você só precise se preocupar em aproveitar.
        </Text>

        <Text style={styles.section}>💰 Melhores Preços</Text>
        <Text style={styles.text}>
          Trabalhamos com valores acessíveis e pacotes completos, garantindo que você viaje mais pagando menos.
        </Text>

        <Text style={styles.section}>🛏️ Conforto Garantido</Text>
        <Text style={styles.text}>
          Selecionamos os melhores hotéis, transportes e roteiros para oferecer conforto e tranquilidade em toda a sua viagem.
        </Text>

        <Text style={styles.section}>🤝 Atendimento de Qualidade</Text>
        <Text style={styles.text}>
          Nossa equipe está sempre pronta para te ajudar, desde o planejamento até o final da viagem.
        </Text>

        <Text style={styles.section}>🌍 Experiências Inesquecíveis</Text>
        <Text style={styles.text}>
          Mais do que viagens, entregamos momentos únicos, cheios de emoção, cultura e diversão.
        </Text>

        <Text style={styles.footer}>
          ✨ Viajar bem não precisa ser caro — precisa ser com a VivaVoo!
        </Text>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6cc0f8',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  section: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 15,
  },
  text: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
  },
  footer: {
    fontSize: 16,
    color: '#fff',
    marginTop: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});