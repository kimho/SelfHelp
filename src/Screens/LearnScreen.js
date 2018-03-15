// React
import React, { Component } from 'react'
import {
    View,
    Text,
    Dimensions,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'
import HeadingContainer from '../Components/HeadingContainer'
import TopicButton from '../Components/TopicButton'
import SingleCard from '../Components/SingleCard'

const LearnIcon = require('../Assets/Images/learn_orange.png')

const { height, width } = Dimensions.get("window")

const CardContainer = () => {

    const cardList = Constants.LearnLabels.map((item, index) => {
        return (
            <View
                key={index}
                style={[styles.cardContainer, AppStyles.center]}
            >
                <TopicButton text={item.topic} />
                {
                    item.content.map((cardItem, cardIndex) => {
                        return (
                            <SingleCard
                                key={cardIndex}
                                cardContent={cardItem}
                            />
                        )
                    })
                }
            </View>
        )
    })

    return (
        <View>{ cardList }</View>
    )
}

export default class LearnScreen extends Component {
    static navigationOptions = {
        title: 'Plan Screen',
        headerStyle: {backgroundColor: 'rgb(0,143,120)'},
        headerTintColor: 'white',
        headerTitleStyle : {alignSelf:'flex-start'}
    }

    render() {
        return (
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Home'
                />
                <View style={{ backgroundColor: "#ededed", flex: 1 }}>
                    <View style={{ height: height - 64, width }}>
                        <View style={{ flex: 1 }}>
                            <ScrollView>
                                <HeadingContainer
                                    headingImage={LearnIcon}
                                    headingText='Learn'
                                />
                                <View style={[styles.cardContainer, AppStyles.center]}>
                                    <CardContainer />
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({  
    cardContainer: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "#208167"
    },

    singleCardContainer: {
        height: height / 7,
        marginTop: 10,
        width: width - 20,
        backgroundColor: "#2C8D77",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        flexDirection: "row",
        overflow: "hidden"
    }
})
