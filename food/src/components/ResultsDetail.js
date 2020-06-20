import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'


const ResultsDetail = ({item}) => {
  return (
  <View style={styles.view}>
    <Image style={styles.img} source={{ uri: item.image_url }}/>
    <Text style={styles.name}>{item.name}</Text>
    <Text>Stars: {item.rating} | Reviews: {item.review_count}</Text>
  </View>
)}

const styles = StyleSheet.create({
  img: {
    width: 250,
    height: 120,
    marginBottom: 5
  },
  name: {
    fontWeight: "bold"
  },
  view:{
    marginLeft: 15
  }
})


export default ResultsDetail