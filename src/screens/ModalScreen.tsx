import React, { useState } from 'react'
import { Button, Modal, Text, View } from 'react-native';

import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const ModalScreen = () => {

    const [isVisiBle, setIsVisible] = useState(false)

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title='Modal' />

            <Button
                title='Abrir Modal'
                onPress={() => {
                    setIsVisible(true)
                }}
            />

            <Modal
                animationType='fade'
                visible={isVisiBle}
                transparent={true}
            >
                {/* Bacground negro */}
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>

                    {/* Contenido */}
                    <View style={{
                        backgroundColor: 'white',
                        width: 200,
                        height: 200,
                        justifyContent: 'center',
                        alignItems: 'center',
                        // Sombre solo ios
                        shadowOffset: {
                            width: 0,
                            height: 10
                        },
                        shadowOpacity: 0.25,
                        elevation: 15,
                        borderRadius: 5
                    }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Modal Title</Text>
                        <Text style={{ fontSize: 16, fontWeight: '300', marginBottom: 20 }}>Cuerpo del modal</Text>
                        <Button
                            title='Cerrar'
                            onPress={() => setIsVisible(false)}
                        />
                    </View>

                </View>

            </Modal>

        </View>
    )
}
