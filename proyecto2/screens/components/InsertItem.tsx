import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
interface Props {
    action: (action: String) => void
}

const InsertItem = (props: Props) => {
    const [item, onChangeItem] = React.useState('');
    return (
        <View>
            <Text>InsertItem</Text>
            <TextInput
                onChangeText={onChangeItem}
                value={item}
            />
            <Button
                onPress={() => props.action(item.toString())}
                title=" Agregar Alumno"
                color="#841584"
            />
    </View>
  )
}

export default InsertItem

const styles = StyleSheet.create({})