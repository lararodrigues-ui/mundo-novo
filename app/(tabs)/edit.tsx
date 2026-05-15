import { View, StyleSheet } from 'react-native';

import Button from '@/components/Button';
import ImageViewer from '@/components/ImageViewer';

const PlaceholderImage = require('@/assets/images/fotoviagem.avif');

export default function edit() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme='primary' label="Escolha uma imagem da galeria" />
        <Button label="Salvar imagem" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6cc0f8',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageContainer: {
    flex: 1,    
    justifyContent: 'center',
  },

  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
