import React from 'react';
import { View } from 'react-native';
import Pdf from 'react-native-pdf';

function PDFViewer()
{
  const source = { uri: '../../../assets/PDF_test.pdf'};

  return (
    <View style={styles.container}>
      <Pdf
        source={source}
        style={styles.pdf}
      />
    </View>
  );
};



export default PDFViewer;