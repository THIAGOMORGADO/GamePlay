import React from 'react';
import {View, Text} from 'react-native';


/* Estilos */
import {styles} from './styles'

/* Componente */
import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
    </View>
  );
}