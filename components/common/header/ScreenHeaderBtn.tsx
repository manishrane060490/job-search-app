import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS, SIZES } from "../../../constants"

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl, dimension, handlePress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image source={iconUrl} resizeMode='cover' style={{height: dimension, width: dimension, borderRadius: SIZES.small / 1.25}} />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn