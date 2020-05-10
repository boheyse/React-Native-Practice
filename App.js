import React from 'react';
import { Button, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={{padding:50}}>
      <View>
        <TextInput
          placeholder="Course Goals"
          style={{borderColor:'black', borderWidth: 1, padding:10}}
          />
        <Button title="Add"/>
      </View>
      <View>
      </View>

    </View>
  );
}
