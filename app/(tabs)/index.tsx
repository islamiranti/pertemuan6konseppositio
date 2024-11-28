import React from 'react';
import { View, ScrollView } from 'react-native';
import SampleComponent from './SampleComponent';
import MateriFlexBox from './Materiflexbox';
import PositionReactNative from './Positionreactnative';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent></SampleComponent> */}
        {/* <StylingReactNativeComponent /> */}
        {/* <MateriFlexBox /> */}
        <PositionReactNative />
      </ScrollView>
    </View>
  );
};

export default App;
