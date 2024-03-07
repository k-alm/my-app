import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import MadeBy from './components/MadeBy';

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
          <Text style={styles.title}>Piscar devagar: </Text>
          <Text style={styles.text}>Quando um gato pisca lentamente para você, é considerado um sinal de afeto e confiança. Retribuir o gesto pode fortalecer ainda mais o vínculo entre vocês.</Text>
          <Text style={styles.title}>Barulho da barriga:</Text>
          <Text style={styles.text}>Os gatos têm um ronronar característico, mas também é possível ouvir um som semelhante vindo de seus estômagos. Esse barulho é chamado de "borbulhar" e é normal, indicando que o sistema digestivo está funcionando corretamente.</Text>        
          <Text style={styles.title}>Saltos impressionantes:</Text>
          <Text style={styles.text}>Gatos são notoriamente bons saltadores. Eles podem pular até cinco vezes a altura do seu corpo em um único salto. Isso se deve à estrutura muscular e ao sistema esquelético flexível.</Text>        
          <Text style={styles.title}>Afiação constante:</Text>
          <Text style={styles.text}>Os gatos têm garras retráteis e as afiam regularmente arranhando objetos. Além de ser uma forma de manter as garras afiadas, isso também marca território e alonga os músculos.</Text>        
          <Text style={styles.title}>Comunicação vocal:</Text>
          <Text style={styles.text}>Gatos podem fazer uma variedade impressionante de sons para se comunicar, incluindo miados, ronronados, grunhidos e até mesmo trinados. Cada som pode ter um significado diferente, dependendo do contexto.</Text>        
          <Text style={styles.title}>Limpeza meticulosa:</Text>
          <Text style={styles.text}>Os gatos são conhecidos por sua limpeza obsessiva. Passam grande parte do tempo se lambendo para remover sujeira e manter o pelo em boas condições. Além disso, eles usam a língua áspera para remover pelos soltos.</Text>        
          <Text style={styles.title}>Noturnos por natureza:</Text>
          <Text style={styles.text}>Os gatos são animais crepusculares, o que significa que são mais ativos durante o amanhecer e o entardecer. Essa característica é herdada dos seus ancestrais selvagens, que caçavam principalmente nesses períodos.</Text>        
          <Text style={styles.title}>Sentido apurado:</Text>
          <Text style={styles.text}>Os gatos têm sentidos aguçados, especialmente a visão noturna. Sua capacidade de ver em níveis de pouca luz é cerca de seis vezes melhor do que a dos humanos.</Text>        
          <Text style={styles.title}>Preguiçosos profissionais:</Text>
          <Text style={styles.text}>Apesar de serem ágeis e caçadores natos, os gatos são conhecidos por dormir muito. Em média, um gato adulto pode passar de 12 a 16 horas por dia dormindo.</Text>        
          <Text style={styles.title}>Olfato poderoso:</Text>
          <Text style={styles.text}>O sentido do olfato dos gatos é extremamente desenvolvido. Eles possuem cerca de 50 a 80 milhões de células olfativas, enquanto os humanos têm apenas 5 milhões. Isso faz com que os gatos sejam excelentes em detectar odores.</Text>        
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
