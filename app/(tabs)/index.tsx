import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function Index() {
  return (
    
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        
        <Text style={styles.title}>🌍 VivaVoo Turismo ✈️</Text>
        
        <Text style={styles.subtitle}>
          Descubra o mundo e viva experiências inesquecíveis!
        </Text>

        <Text style={styles.section}>🌴 Porto Seguro - BA</Text>
        <Text style={styles.text}>
          Um verdadeiro paraíso brasileiro! Praias lindas, clima animado e muita história.
          Perfeito pra relaxar e curtir ao máximo.
        </Text>

        <Text style={styles.section}>🌆 Rio de Janeiro</Text>
        <Text style={styles.text}>
          A cidade maravilhosa te espera com paisagens incríveis, praias famosas
          e uma energia única.
        </Text>

        <Text style={styles.section}>🗼 Paris - França</Text>
        <Text style={styles.text}>
          Romance, cultura e elegância! Um destino perfeito para viver momentos
          inesquecíveis na cidade do amor.
        </Text>

        <Text style={styles.section}>🍁 Canadá</Text>
        <Text style={styles.text}>
          Natureza incrível, cidades organizadas e experiências únicas,
          desde neve até passeios urbanos modernos.
        </Text>

        <Text style={styles.footer}>
          ✨ Viaje com a VivaVoo e transforme seus sonhos em realidade!
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
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 15,
  },
  text: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  footer: {
    fontSize: 16,
    color: '#fff',
    marginTop: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});