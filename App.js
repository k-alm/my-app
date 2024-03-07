import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View, useColorScheme } from 'react-native';
import MadeBy from './components/MadeBy';
import Curiosity from './components/Curiosity';

export default function App() {

  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={colorScheme === 'dark' ? styles.containerDark : styles.containerLight}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView>

        <View style={styles.header}>
          <Text style={colorScheme === 'dark' ? styles.titleDark : styles.titleLight}>Checkpoint Mobile</Text>
          <Text style={colorScheme === 'dark' ? styles.titleDark : styles.titleLight}>Curiosidades sobre gatos</Text>

          <MadeBy style={colorScheme === 'dark' ? styles.titleDark : styles.titleLight}/>
        </View>

        <View style={styles.content}>
          <Image
              source={require('./assets/gato.gif')}
              style={styles.logo}
              resizeMode="contain"
          />
          
          <Text style={colorScheme === 'dark' ? styles.titleDark : styles.titleLight}>Curiosidades: </Text>
          <Curiosity 
          title='Piscar devagar:' 
          text='Quando um gato pisca lentamente para você, é considerado um sinal de afeto e confiança. Retribuir o gesto pode fortalecer ainda mais o vínculo entre vocês.'
          titleStyle={colorScheme === 'dark' ? styles.titleDark : styles.titleLight}
          textStyle={colorScheme === 'dark' ? styles.textDark : styles.textLight}/>
          <Curiosity 
          title='Barulho da barriga:' 
          text='Os gatos têm um ronronar característico, mas também é possível ouvir um som semelhante vindo de seus estômagos. Esse barulho é chamado de "borbulhar" e é normal, indicando que o sistema digestivo está funcionando corretamente.'
          titleStyle={colorScheme === 'dark' ? styles.titleDark : styles.titleLight}
          textStyle={colorScheme === 'dark' ? styles.textDark : styles.textLight}/>
          <Curiosity 
          title='Saltos impressionantes:' 
          text='Gatos são notoriamente bons saltadores. Eles podem pular até cinco vezes a altura do seu corpo em um único salto. Isso se deve à estrutura muscular e ao sistema esquelético flexível.'
          titleStyle={colorScheme === 'dark' ? styles.titleDark : styles.titleLight}
          textStyle={colorScheme === 'dark' ? styles.textDark : styles.textLight}/>
          <Curiosity 
          title='Afiação constante:' 
          text='Os gatos têm garras retráteis e as afiam regularmente arranhando objetos. Além de ser uma forma de manter as garras afiadas, isso também marca território e alonga os músculos.'
          titleStyle={colorScheme === 'dark' ? styles.titleDark : styles.titleLight}
          textStyle={colorScheme === 'dark' ? styles.textDark : styles.textLight}/>
          <Curiosity 
          title='Comunicação vocal:' 
          text='Gatos podem fazer uma variedade impressionante de sons para se comunicar, incluindo miados, ronronados, grunhidos e até mesmo trinados. Cada som pode ter um significado diferente, dependendo do contexto.'
          titleStyle={colorScheme === 'dark' ? styles.titleDark : styles.titleLight}
          textStyle={colorScheme === 'dark' ? styles.textDark : styles.textLight}/>
          <Curiosity 
          title='Limpeza meticulosa:' 
          text='Os gatos são conhecidos por sua limpeza obsessiva. Passam grande parte do tempo se lambendo para remover sujeira e manter o pelo em boas condições. Além disso, eles usam a língua áspera para remover pelos soltos.'
          titleStyle={colorScheme === 'dark' ? styles.titleDark : styles.titleLight}
          textStyle={colorScheme === 'dark' ? styles.textDark : styles.textLight}/>
          <Curiosity 
          title='Noturnos por natureza:' 
          text='Os gatos são animais crepusculares, o que significa que são mais ativos durante o amanhecer e o entardecer. Essa característica é herdada dos seus ancestrais selvagens, que caçavam principalmente nesses períodos.'
          titleStyle={colorScheme === 'dark' ? styles.titleDark : styles.titleLight}
          textStyle={colorScheme === 'dark' ? styles.textDark : styles.textLight}/>
          <Curiosity 
          title='Sentido apurado:' 
          text='Os gatos têm sentidos aguçados, especialmente a visão noturna. Sua capacidade de ver em níveis de pouca luz é cerca de seis vezes melhor do que a dos humanos.'
          titleStyle={colorScheme === 'dark' ? styles.titleDark : styles.titleLight}
          textStyle={colorScheme === 'dark' ? styles.textDark : styles.textLight}/>
          <Curiosity 
          title='Preguiçosos profissionais:' 
          text='Apesar de serem ágeis e caçadores natos, os gatos são conhecidos por dormir muito. Em média, um gato adulto pode passar de 12 a 16 horas por dia dormindo.'
          titleStyle={colorScheme === 'dark' ? styles.titleDark : styles.titleLight}
          textStyle={colorScheme === 'dark' ? styles.textDark : styles.textLight}/>
          <Curiosity 
          title='Olfato poderoso:' 
          text='O sentido do olfato dos gatos é extremamente desenvolvido. Eles possuem cerca de 50 a 80 milhões de células olfativas, enquanto os humanos têm apenas 5 milhões. Isso faz com que os gatos sejam excelentes em detectar odores.'
          titleStyle={colorScheme === 'dark' ? styles.titleDark : styles.titleLight}
          textStyle={colorScheme === 'dark' ? styles.textDark : styles.textLight}/>    
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerLight: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerDark: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },

  header: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 400,
    height: 400,
  },

  titleLight: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#000',
    textAlign: 'center',
  },
  titleDark: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#fff',
    textAlign: 'center',
  },

  content: {
    alignItems: 'center',
    padding: 20,
  },

  textLight: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#000',
    textAlign: 'center',
  },
  textDark:{
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    color: '#fff',
  }
});
