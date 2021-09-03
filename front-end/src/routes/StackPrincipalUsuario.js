import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TelaPrincipalUsuario from '../screens/TelaPrincipalUsuario'
import TelaEstabelecimento from '../screens/TelaEstabelecimento'
import CommonStyles from '../CommonStyles'

export default () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerStyle: {
                    backgroundColor: CommonStyles.corPrincipal,
                },
                headerTintColor: CommonStyles.corSecundaria,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontSize: 28,
                    fontWeight: 'bold',
                },
            }}>
            <Stack.Screen 
                component={TelaPrincipalUsuario}
                name="TelaPrincipalUsuario"
            />
            <Stack.Screen 
                component={TelaEstabelecimento}
                name="TelaEstabelecimento"
            />            
        </Stack.Navigator>
    )
}