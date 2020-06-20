import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({term, onChange, onSubmit}) => {
  return (
  <View style={styles.backgroundStyle}>
    <Feather name="search" style={styles.icon}/>
    <TextInput 
      style={styles.input} 
      placeholder="Search"
      value={term}
      autoCapitalize="none"
      autoCorrect={false}
      onChangeText={onChange}
      onEndEditing={onSubmit}
    />
  </View>
  )}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5, 
    marginHorizontal: 15,
    marginTop: 15,
    flexDirection: 'row',
    marginBottom: 10
  },
  input: {
    flex: 1,
    fontSize: 18
  },
  icon: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15
  }
})

export default SearchBar