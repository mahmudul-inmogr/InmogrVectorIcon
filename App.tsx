import { Image, SafeAreaView, Text } from 'react-native'
import React from 'react'
import ApplyPhoto from './images/Apply.svg'
import { SvgUri } from 'react-native-svg';

export default function App() {
  return (
    <SafeAreaView>
      <Text>App</Text>
      {/* <SvgUri
        width="100%"
        height="100%"
        uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
      /> */}
      <ApplyPhoto />
      {/* <Image
        source={require('./images/Apply.svg')}
        style={{ height: 50, width: 50 }}
      /> */}
    </SafeAreaView>
  )
}