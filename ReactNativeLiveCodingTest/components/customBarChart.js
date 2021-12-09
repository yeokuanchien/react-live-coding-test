import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {BarChart} from 'react-native-chart-kit';

const CustomBarChart = ({pokemonStats}) => {
  const statNameList = [];
  const baseStatList = [];
  pokemonStats.forEach((v, index) => {
    statNameList.push(v.stat.name);
    baseStatList.push(v.base_stat);
  });
  return (
    <View style={styles.mainContainer}>
      <BarChart
        data={{
          labels: statNameList,
          datasets: [{data: baseStatList}],
        }}
        width={0.75 * Dimensions.get('window').width}
        height={200}
        verticalLabelRotation={30}
        chartConfig={{
          useShadowColorFromDataset: false,
          barPercentage: 0.5,
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#458336',
          backgroundGradientTo: '#458336',
          decimalPlaces: 0,

          color: (opacity = 255) => '#ECEFF1',
          propsForVerticalLabels: {
            fontSize: 10,
            fontWeight: 'bold',
          },
          propsForHorizontalLabels: {
            fontSize: 10,
            fontWeight: 'bold',
          },
        }}
      />
    </View>
  );
};
export default CustomBarChart;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
