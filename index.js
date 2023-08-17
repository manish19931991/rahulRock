import { View, Text } from 'react-native'
import React from 'react'
// import queryString from 'query-string';
import { enc, Uri } from 'crypto-js';
const Friday = () => {
JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}', (key, value) => {
  console.log(key);
  return value;
});
  
  return (
    <View>
      <Text>Original URL</Text>
      
    </View>
  )
}

export default Friday