import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import MadeBy from './components/MadeBy';
import Curiosity from './components/Curiosity';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView>

        <View style={styles.header}>
          <Text style={styles.title}>Checkpoint Mobile</Text>
          <Text style={styles.title}>Curiosidades sobre gatos</Text>

          <MadeBy style={styles.title}/>
        </View>

        <View style={styles.content}>
          <Image
              source={require('./assets/gato.gif')}
              style={styles.logo}
              resizeMode="contain"
          />
          
          <Text style={styles.title}>Curiosidades: </Text>
          <Curiosity 
          title='Piscar devagar:' 
          text='Quando um gato pisca lentamente para você, é considerado um sinal de afeto e confiança. Retribuir o gesto pode fortalecer ainda mais o vínculo entre vocês.'
          titleStyle={styles.title}
          textStyle={styles.text}/>
          <Curiosity 
          title='Barulho da barriga:' 
          text='Os gatos têm um ronronar característico, mas também é possível ouvir um som semelhante vindo de seus estômagos. Esse barulho é chamado de "borbulhar" e é normal, indicando que o sistema digestivo está funcionando corretamente.'
          titleStyle={styles.title}
          textStyle={styles.text}/>
          <Curiosity 
          title='Saltos impressionantes:' 
          text='Gatos são notoriamente bons saltadores. Eles podem pular até cinco vezes a altura do seu corpo em um único salto. Isso se deve à estrutura muscular e ao sistema esquelético flexível.'
          titleStyle={styles.title}
          textStyle={styles.text}/>
          <Curiosity 
          title='Afiação constante:' 
          text='Os gatos têm garras retráteis e as afiam regularmente arranhando objetos. Além de ser uma forma de manter as garras afiadas, isso também marca território e alonga os músculos.'
          titleStyle={styles.title}
          textStyle={styles.text}/>
          <Curiosity 
          title='Comunicação vocal:' 
          text='Gatos podem fazer uma variedade impressionante de sons para se comunicar, incluindo miados, ronronados, grunhidos e até mesmo trinados. Cada som pode ter um significado diferente, dependendo do contexto.'
          titleStyle={styles.title}
          textStyle={styles.text}/>
          <Curiosity 
          title='Limpeza meticulosa:' 
          text='Os gatos são conhecidos por sua limpeza obsessiva. Passam grande parte do tempo se lambendo para remover sujeira e manter o pelo em boas condições. Além disso, eles usam a língua áspera para remover pelos soltos.'
          titleStyle={styles.title}
          textStyle={styles.text}/>
          <Curiosity 
          title='Noturnos por natureza:' 
          text='Os gatos são animais crepusculares, o que significa que são mais ativos durante o amanhecer e o entardecer. Essa característica é herdada dos seus ancestrais selvagens, que caçavam principalmente nesses períodos.'
          titleStyle={styles.title}
          textStyle={styles.text}/>
          <Curiosity 
          title='Sentido apurado:' 
          text='Os gatos têm sentidos aguçados, especialmente a visão noturna. Sua capacidade de ver em níveis de pouca luz é cerca de seis vezes melhor do que a dos humanos.'
          titleStyle={styles.title}
          textStyle={styles.text}/>
          <Curiosity 
          title='Preguiçosos profissionais:' 
          text='Apesar de serem ágeis e caçadores natos, os gatos são conhecidos por dormir muito. Em média, um gato adulto pode passar de 12 a 16 horas por dia dormindo.'
          titleStyle={styles.title}
          textStyle={styles.text}/>
          <Curiosity 
          title='Olfato poderoso:' 
          text='O sentido do olfato dos gatos é extremamente desenvolvido. Eles possuem cerca de 50 a 80 milhões de células olfativas, enquanto os humanos têm apenas 5 milhões. Isso faz com que os gatos sejam excelentes em detectar odores.'
          titleStyle={styles.title}
          textStyle={styles.text}/>    
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  header: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 400,
    height: 400,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#5e5e5e'
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#fff',
  },
});
