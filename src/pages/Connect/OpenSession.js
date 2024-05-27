import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'

const OpenSession = () => {
  return (
<View>
    <TextInput placeholder='MASUKKAN KELAS'/>
    <TextInput placeholder='HARI TANGGAL'/>
    <Button title='simpan'/>
</View>
  )
}

const CloseSession = () => {
    return (
        <View>
            <Button title = 'close session nnt disimpan di bagian absensi'/>
        </View>
    )
}

export default OpenSession
