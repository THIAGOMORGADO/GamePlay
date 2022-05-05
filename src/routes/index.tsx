import React from 'react';

/* Navegação */
import {NavigationContainer} from '@react-navigation/native'; 

/* Routas de navvegação */
import {AuthRoutes} from './auth.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  )
}