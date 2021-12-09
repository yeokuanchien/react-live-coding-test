import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function CustomTable({pokemonStats}) {
  const tableRow = [];
  pokemonStats.forEach((v, index) => {
    tableRow.push(
      <View style={styles.row} key={index}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text>{v.stat.name}</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text>{v.base_stat}</Text>
        </View>
      </View>,
    );
  });
  return (
    <View style={styles.container}>
      <View style={styles.tableHeader}>
        <View style={styles.row}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text>Stat Name</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text>Base Stat</Text>
          </View>
        </View>
      </View>
      {tableRow}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {width: 300, paddingVertical: 20},
  row: {
    flexDirection: 'row',
  },
  tableHeader: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
});
