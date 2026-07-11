// ADAME CRUZ JOSE MARIA
// 000087493
import { useState } from "react";
import { StyleSheet, Pressable, Text, TextInput, View } from "react-native";
import { updateItemById } from "../services/api";
import { deleteItemById } from "../services/api";

export default function DetailScreen({route, navigation}){
  console.log("CLASE - DetailScreen");
  console.log("Info route params: ", route.params);

  const { item } = route.params;
  const idItem = item.id;
  const [ title, setTitle ] = useState(item.title);
  const [ description, setDescription ] = useState(item.description);

  function handleUpdate() {
    modificarItem();
  }

  function handleDel() {
    eliminarItem();
  }

  async function modificarItem() {
  console.log("log del item", idItem)

  if (title.trim() === '' || description.trim() === '') {
    console.log("Item vacio");
    return;
  }
  else {
    const bodyItem = {
      id: idItem,
      title: title.trim(),
      description: description
    };

    try{
      console.log("Llamada a peticion");
      const data = await deleteItemById(idItem);
      console.log(data);
      console.log("Peticion finalizada");
    }catch(err){
      console.log("Peticion no realizada 01: ", err.message);
    }
  }
    navigation.navigate('Items');
  }

  async function eliminarItem() {
  console.log("log del item", idItem)
    try{
      console.log("Llamada a peticion");
      const data = await updateItemById(idItem);
      console.log(data);
      console.log("Peticion finalizada");
    }catch(err){
      console.log("Peticion no realizada 01: ", err.message);
    }

    navigation.navigate('Items');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <View style={styles.actions}>
          <Pressable style={styles.delButton} onPress={handleDel}>
              <Text style={styles.addButtonText}>Eliminar</Text>
          </Pressable>

          <Text style={styles.label}> </Text>

          <Pressable style={styles.addButton}
          onPress={handleUpdate}>
              <Text style={styles.addButtonText}>Modificar</Text>
          </Pressable>
          </View>
      </View>

      <Text style={styles.label}>Título</Text>
      <TextInput
              style={styles.input}
              placeholder="Ejemplo: Revisar proyecto"
              value={title}
              onChangeText={setTitle}
      />

      <Text style={styles.label}>Descripción</Text>
      <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Describe el elemento"
              value={description}
              onChangeText={setDescription}
              multiline
            />
    </View>

    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f5f7fb',
  },
  label: {
    fontWeight: 'bold',
    color: '#666',
    marginTop: 12,
    marginBottom: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
  addButton: {
    backgroundColor: '#16a34a',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  delButton: {
    backgroundColor: '#da3737',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
  }
});