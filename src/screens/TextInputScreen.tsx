import React, { useContext } from 'react'
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Text } from 'react-native';

import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useForm } from '../hooks/useForm';
import { styles } from '../theme/appTheme';

export const TextInputScreen = () => {
    const { theme: {colors, dividerColor}, } = useContext(ThemeContext)



    const { onChange, form, isSubscribe } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribe: false
    })

    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView>

                <View style={styles.globalMargin}>
                    <HeaderTitle title='TextInputs' />

                    <TextInput
                        style={{
                            ...stylesScreen.inputStyle,
                            borderColor: colors.text,
                            color: colors.text
                        }}
                        placeholder="Ingrese su nombre"
                        autoCorrect={false}
                        autoCapitalize="words"
                        onChangeText={(value) => onChange(value, 'name')}
                        placeholderTextColor={dividerColor}
                    />

                    <TextInput
                          style={{
                            ...stylesScreen.inputStyle,
                            borderColor: colors.text,
                            color: colors.text
                        }}
                        placeholder="Ingrese su email"
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={(value) => onChange(value, 'email')}
                        keyboardType="email-address"
                        placeholderTextColor={dividerColor}

                    />

                    <View style={stylesScreen.switchRow}>
                        <Text style={stylesScreen.swtchText} >Subscribe</Text>
                        <CustomSwitch isOn={isSubscribe} onChange={(value) => onChange(value, 'isSubscribe')} />
                    </View>

                    <HeaderTitle title={JSON.stringify(form, null, 3)} />
                    <HeaderTitle title={JSON.stringify(form, null, 3)} />

                    <TextInput
                          style={{
                            ...stylesScreen.inputStyle,
                            borderColor: colors.text,
                            color: colors.text
                        }}
                        placeholder="Ingrese su teléfono"
                        onChangeText={(value) => onChange(value, 'phone')}
                        keyboardType="phone-pad"
                        placeholderTextColor={dividerColor}

                    />
                </View>
                <View style={{ height: 100 }} />
            </ScrollView>
        </KeyboardAvoidingView >
    )
}

const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: 'rgba(0,0,0,0.3)',
        marginVertical: 10
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    swtchText: {
        fontSize: 25
    }
});
