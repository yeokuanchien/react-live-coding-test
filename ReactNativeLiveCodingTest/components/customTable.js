import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DataTable} from 'react-native-paper';

export default function CustomTable({pokemonStats}) {
  const tableRow = [];
  pokemonStats.forEach((v, index) => {
    tableRow.push(
      <DataTable.Row
        style={{
          backgroundColor: 'red',
          borderBottomColor: 'black',
          borderBottomWidth: 2,
        }}
        key={index}>
        <DataTable.Cell style={{backgroundColor: 'yellow', height: 20}}>
          {v.stat.name}
        </DataTable.Cell>
        <DataTable.Cell style={{backgroundColor: 'green', height: 20}}>
          {v.base_stat}
        </DataTable.Cell>
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
  container: {backgroundColor: 'blue', width: 300},
});
