import React from 'react';
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FadeInImage} from '../components/FadeInImage';
import {PokemonCard} from '../components/PokemonCard';
import {usePokemonPagination} from '../hooks/usePokemonPaginated';
import {styles} from '../theme/appTheme';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  const {isLoading, simplePokemonList, loadPokemons} = usePokemonPagination();

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokeballBg}
      />
      <View style={{alignItems: 'center'}}>
        <FlatList
          ListHeaderComponent={() => (
            <Text
              style={{
                ...styles.globalMargin,
                ...styles.title,
                top: top + 20,
                marginBottom: top + 20,
              }}>
              Pokedex
            </Text>
          )}
          showsVerticalScrollIndicator={false}
          data={simplePokemonList}
          keyExtractor={pokemon => pokemon.id}
          renderItem={({item}) => <PokemonCard pokemon={item} />}
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={() => (
            <ActivityIndicator style={{height: 100}} color="grey" size={20} />
          )}
          numColumns={2}
        />
      </View>
    </>
  );
};
