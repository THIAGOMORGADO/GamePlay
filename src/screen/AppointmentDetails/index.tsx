import React from 'react'

import { ImageBackground } from 'react-native';
import {Fontisto} from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import Illustration from '../../assets/banner.png';

/* Componentes */
import { Background } from '../../components/BackGround';
import { Header } from '../../components/Header';

/* Estilos */
import {styles} from './styles';
import { theme } from '../../global/styles/theme';



export function AppointmentDetails() {
const {primary} = theme.colors;
  return (
  <Background>
      <Header 
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto 
              name='share'
              size={24}
              color={primary}
            />
          </BorderlessButton>
        }
      />

      <ImageBackground
        source={Illustration}
        style={styles.banner}
      >

      </ImageBackground>

  </Background>  
  );
}