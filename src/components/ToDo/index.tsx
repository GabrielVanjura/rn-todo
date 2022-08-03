import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Icon from '@expo/vector-icons/FontAwesome';

type props = {
  description: string;
  done?: boolean;
  onRemove: () => void;
  onDone: () => void;
}

export function ToDo({ description, onDone, onRemove, done = false }: props) {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={onDone}>
          {
            done ?
              <Icon name="check-circle" style={styles.radioCheckedIcon} /> :
              <Icon name="circle-o" style={styles.radioIcon} />
          }
        </TouchableOpacity>
        {
          done ?
            <Text style={styles.done}>{description}</Text> :
            <Text style={styles.todo}>{description}</Text>
        }
        <TouchableOpacity onPress={onRemove}>
          <Icon name="trash-o" style={styles.trashIcon} />
        </TouchableOpacity>
      </View>
    </>
  )
}