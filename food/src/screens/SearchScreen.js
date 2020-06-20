import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'


const SearchScreen = () => {
  const [term, setTerm] = useState("")
  const [searchApi, results, errorMessage] = useResults()

  const filterByPrice = (price) => {
    return results.filter(result => {
      return result.price === price
    })
  }

  return (
  // <> Instead of <View> so it does not wrap the contents and have it go off the edge of the screen (to stop this with <View>, we'd add flex:1 for styling)
  <> 
    <SearchBar 
      term={term} 
      onChange={setTerm}
      onSubmit={() => searchApi(term)}
    />
    { errorMessage ? <Text>{errorMessage}</Text> : null }
    <ScrollView>
      <ResultsList results={filterByPrice('$')} title="Cost Effective"/>
      <ResultsList results={filterByPrice('$$')}title="Bit Pricier"/>
      <ResultsList results={filterByPrice('$$$')} title="Big Spender"/>
    </ScrollView>
  </>
)}

const styles = StyleSheet.create({
  margin: {
    marginLeft: 15
  }
})


export default SearchScreen