

// import React from 'react';
// import { DrawerItem } from '@react-navigation/drawer';
// import { View, StyleSheet } from 'react-native';

// const CustomDrawerItem = (props) => {
//   return (
//     <View style={styles.itemContainer}>
//       <DrawerItem {...props} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   itemContainer: {
//     marginVertical: -5, 
//   },
// });

// export default CustomDrawerItem;





import React from 'react';
import { DrawerItem } from '@react-navigation/drawer';
import { View, StyleSheet } from 'react-native';

const CustomDrawerItem = ({ label, onPress }) => {
  return (
    <View style={styles.itemContainer}>
      <DrawerItem
        label={label}
        onPress={onPress}
        labelStyle={styles.label} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginVertical: -10, 
  },
  label: {
    color: '#00274D', 
  },
});

export default CustomDrawerItem;

