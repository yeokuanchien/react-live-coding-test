import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DataTable} from 'react-native-paper';

export default function CustomTable({pokemonStats}) {
  const tableRow = [];
  pokemonStats.forEach((v, index) => {
    tableRow.push(
      <DataTable.Row key={index}>
        <DataTable.Cell>{v.stat.name}</DataTable.Cell>
        <DataTable.Cell>{v.base_stat}</DataTable.Cell>
      </DataTable.Row>,
    );
  });
  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Stat Name</DataTable.Title>
          <DataTable.Title>Base Stat</DataTable.Title>
        </DataTable.Header>
        {tableRow}
      </DataTable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {width: 300, paddingVertical: 20},
});
