
import React, { useState } from 'react';
import {
  Alert,
  Clipboard,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {

  const copyToClipboard = () => {
    Clipboard.setString(randomBackground);
    Alert.alert("Copied to Clipboard", randomBackground)
  };

  const [randomBackground, setRandomBackground] = useState("#ffffff");

  const generateColor = () => {
    // Clipboard.setString(randomBackground);
    // Alert.alert("Color Changed");
    const hexaRange = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += hexaRange[Math.floor(Math.random() * 16)];
    }
    setRandomBackground(color);
  }

  return (
    <>
      <StatusBar backgroundColor={randomBackground} />
      <View style={[styles.contrainer, { backgroundColor: randomBackground }]}>
        <View>
          <Text style={styles.colorValue} onPress={copyToClipboard}>{randomBackground}</Text>
        </View>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnText}>Change Color</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: 'green',
    paddingHorizontal: 40,
    paddingVertical: 12
  },
  actionBtnText: {
    fontSize: 24,
    color: '#fff',
    textTransform: 'uppercase'
  },
  colorValue: {
    fontSize: 35,
    paddingBottom: 50,
    fontWeight: 'bold',
    color: '#ffffff'
  }
});

export default App;
