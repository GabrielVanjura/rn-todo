import { styles } from './styles'
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert, Image, TouchableHighlight, Keyboard } from "react-native";
import { ToDo } from "../../components/ToDo"
import { useState } from 'react';

import uuid from 'react-native-uuid'

type ITodo = {
  id: string;
  description: string;
  done: boolean,
  created_at: Date
}

export default function Home() {
  const [toDoList, setToDoList] = useState<ITodo[]>([]);

  const [todoDescription, setTodoDescription] = useState<string>('')

  async function handleToDoAdd() {
    const toDo = toDoList.find(t => t.description === todoDescription)
    if (toDo) {
      return Alert.alert("Tarefa já Existe", "Já existe uma tarefa na lista com essa descrição!")
    }
    setToDoList(prevState => [...prevState,
    {
      id: uuid.v4() as string,
      description: todoDescription,
      done: false,
      created_at: new Date()
    }])
    setTodoDescription('')
  }

  function handleToDoRemove(id: string) {
    const toDo = toDoList.find(t => t.id === id)
    Alert.alert("Remover", `Deseja remover a tarefa "${toDo?.description}"?`, [
      {
        text: 'Sim',
        onPress: () => setToDoList(prevState => prevState.filter(t => t.id !== id))
      },
      {
        text: 'Não',
        style: 'cancel'
      },
    ])
  }
  function handleDone(id: string) {
    const toDo = toDoList.find(el => el.id === id)
    if (toDo != undefined) {
      const newToDoList = toDoList.filter(t => t.id !== id);
      newToDoList.push(
        {
          id: toDo.id,
          description: toDo.description,
          done: toDo.done === true ? false : true,
          created_at: toDo.created_at
        })
        const ordered = newToDoList.sort((a, b) => {
          if (a.created_at > b.created_at) {
            return 1
          } else {
            if (a.created_at < b.created_at) {
              return -1
            } else {
              return 0
            }
          }
        })
      setToDoList(ordered)
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../../../assets/Logo.png')} />
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#6b6b6b"
          keyboardAppearance='dark'
          onChangeText={text => setTodoDescription(text)}
          value={todoDescription}
        />

        <TouchableOpacity style={styles.button} onPress={handleToDoAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tasksList}>
        <View style={styles.taskViewCreate}>
          <Text style={styles.taskButtonCreate}>
            Criadas
          </Text>
          <TouchableHighlight style={styles.taskCountCreate}>
            <Text style={styles.taskCount}>{toDoList.length}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.taskViewCreate}>
          <Text style={styles.taskButtonDone}>
            Concluídas
          </Text>
          <TouchableHighlight style={styles.taskCountDone}>
            <Text style={styles.taskCount}>{toDoList.filter(t => t.done === true).length}</Text>
          </TouchableHighlight>
        </View>
      </View>
      <FlatList
        data={toDoList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ToDo
            key={item.id}
            description={item.description}
            onRemove={() => handleToDoRemove(item.id)}
            onDone={() => handleDone(item.id)}
            done={item.done}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <>
            <View
              style={styles.lineStyle}
            />
            <View style={styles.clipboard}>
              <Image source={require('../../../assets/Clipboard.png')} />
            </View>
            <Text style={styles.listEmptyTextTitle}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.listEmptyTextSubTitle}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </>
        )}
      />
    </View>
  );
}