import { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  const frases = [
    "Grandes coisas começam com pequenos passos.",
    "Hoje pode ser o começo de algo incrível.",
    "Confie mais no seu processo.",
    "Persistência vence talento quando o talento desiste.",
    "Uma boa oportunidade está mais perto do que parece.",
    "Seu esforço de hoje será resultado amanhã.",
    "Nem todo bug é um problema. Às vezes é uma feature.",
    "Continue. Até o código perfeito começou com erro.",
    "A sorte ajuda quem também faz o commit.",
    "Respire. Salve. Teste de novo.",
    "Acredite em você e continue tentando.",
    "Cada dia é uma nova oportunidade.",
    "Não desista dos seus sonhos.",
    "Você é capaz de coisas incríveis.",
  ];

  const [frase, setFrase] = useState("");
  const [aberto, setAberto] = useState(false);
  const [contador, setContador] = useState(0);

  function abrirBiscoito() {
    const indice = Math.floor(Math.random() * frases.length);
    const fraseSorteada = frases[indice];

    setFrase(fraseSorteada);
    setAberto(true);
    setContador(contador + 1);
  }

  function voltarBiscoito() {
    setFrase("");
    setAberto(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Biscoito da Sorte</Text>

      {!aberto ? (
        <>
          <Pressable onPress={abrirBiscoito}>
            <Image
              source={require("./assets/biscoito.svg")}
              style={styles.imagem}
              resizeMode="contain"
            />
          </Pressable>

          <Text style={styles.instrucao}>
            Toque no biscoito para quebrar
          </Text>

          <Text style={styles.contador}>
            Biscoitos quebrados: {contador}
          </Text>
        </>
      ) : (
        <>
          <Image
            source={require("./assets/biscoito-quebrado.svg")}
            style={styles.imagem}
            resizeMode="contain"
          />

          <View style={styles.caixaFrase}>
            <Text style={styles.frase}>"{frase}"</Text>
          </View>

          <Pressable style={styles.botao} onPress={voltarBiscoito}>
            <Text style={styles.textoBotao}>Voltar</Text>
          </Pressable>

          <Text style={styles.contador}>
            Biscoitos quebrados: {contador}
          </Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEAF3",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#D94F87",
    marginBottom: 35,
  },

  imagem: {
    width: 250,
    height: 250,
    marginBottom: 25,
  },

  instrucao: {
    fontSize: 16,
    color: "#B83B70",
    marginBottom: 25,
  },

  contador: {
    fontSize: 16,
    color: "#B83B70",
    marginTop: 20,
  },

  caixaFrase: {
    width: "100%",
    backgroundColor: "#FFF7FA",
    padding: 20,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#F5A6C7",
    marginBottom: 30,
  },

  frase: {
    fontSize: 18,
    textAlign: "center",
    color: "#9C3D68",
    fontStyle: "italic",
  },

  botao: {
    backgroundColor: "#E86A9B",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#D94F87",
  },

  textoBotao: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
  },
});