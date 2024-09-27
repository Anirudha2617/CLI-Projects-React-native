import { View, Text } from 'react-native'
import React, { PropsWithChildren } from 'react'

type Props = {}

const Button = (props: Props) => {
  return (
    <View>
      <Text>Button</Text>
      <Button ></Button>
      
    </View>
  )
}
type ButtonProps = PropsWithChildren<{
  label: string;
  image: string;
  setSelectedValue: () => void;
}>;


export default Button