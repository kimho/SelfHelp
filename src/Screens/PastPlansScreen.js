// React
import React, { Component } from 'react'
import { View, Text, ScrollView, Dimensions, StyleSheet } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'

export default class PastPlansScreen extends Component {
    render() {
        const { navigation } = this.props

        return(
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Back'
                    navigation={navigation}
                />
                <ScrollView>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})
