import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, Platform, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PokemonCard} from '../components/PokemonCard';
import {SearchInput} from '../components/SearchInput';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {styles} from '../theme/appTheme';
import {Loading} from '../components/Loading';
import {SimplePokemon} from '../interfaces/pokemon.interfaces';

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();

  const {isFetching, simplePokemonList} = usePokemonSearch();
  const [term, setTerm] = useState('');
  const [filteredPokemon, setFilteredPokemon] = useState<SimplePokemon[]>([]);

  const screenWith = Dimensions.get('window').width;

  if (isFetching) {
    return <Loading />;
  }

  useEffect(() => {
    if (term.length === 0) {
      return setFilteredPokemon([]);
    }

    console.log(isNaN(Number(term)));

    if (isNaN(Number(term))) {
      setFilteredPokemon(
        simplePokemonList.filter(poke =>
          poke.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()),
        ),
      );
    } else {
      const pokemonById = simplePokemonList.find(poke => poke.id === term);
      setFilteredPokemon(pokemonById ? [pokemonById] : []);
    }
  }, [term]);

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 20,
      }}>
      <SearchInput
        onDebounce={setTerm}
        style={{
          position: 'absolute',
          zIndex: 999,
          width: screenWith - 40,
          top: Platform.OS === 'ios' ? top : top + 15,
        }}
      />
      <FlatList
        ListHeaderComponent={() => (
          <Text
            style={{
              ...styles.globalMargin,
              ...styles.title,
              paddingBottom: 10,
              marginTop: Platform.OS === 'ios' ? top + 60 : top + 80,
            }}>
            {term}
          </Text>
        )}
        showsVerticalScrollIndicator={false}
        data={filteredPokemon}
        keyExtractor={pokemon => pokemon.id}
        renderItem={({item}) => <PokemonCard pokemon={item} />}
        onEndReachedThreshold={0.4}
        numColumns={2}
      />
    </View>
  );
};
