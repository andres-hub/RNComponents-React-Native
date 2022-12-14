import React from 'react'
import { FlatList, View } from 'react-native';

import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';
import { menuItems } from '../data/menuItem';
import { styles } from '../theme/appTheme';

const HomeScrren = () => {

  return (
    <View style={{flex:1, ...styles.globalMargin}}>
       <FlatList 
        data={menuItems} 
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={(item)=> item.name}
        ListHeaderComponent={ <HeaderTitle title='Opciones de Menú'/> } 
        ItemSeparatorComponent={()=> <ItemSeparator/>}
      />
    </View>
  )
}

export default HomeScrren