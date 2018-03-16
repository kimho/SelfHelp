const Colors = {
    primaryBgColor: 'rgb(0 , 131, 105)',
    secondaryBgColor: 'rgb(0, 143, 120)',
    lightGreen: 'rgb(58, 152, 132)',
    orange: '#F7A553'
}

const FontSizes = {
    menuFS: 23,
    headingFS: 32,
    topicFS: 18
}

const LearnLabels = [
    {
        topic: 'Understanding Sexual Assault',
        content: [
            {
                icon: require('../Assets/Images/building_hope.png'),
                subTopic: 'Building Hope & Resiliency',
                description: 'A self guided education program that helps you begin to recover and heal.',
                subContent: []
            },
            {
                icon: require('../Assets/Images/what_to_do.png'),
                subTopic: 'What to do',
                description: 'Learn what to do if you or someone you know has been sexually assaulted.',
                subContent: []
            },
            {
                icon: require('../Assets/Images/effects_of_sexual_assault.png'),
                subTopic: 'Effects of Sexual Assault',
                description: 'Here are some common effects survivors of sexual assault may face.',
                subContent: [ 'Depression', 'Eating Disorders', 'PTSD', 'Self Harm', 'Sleep Disturbances', 'Substance Abuse', 'Suicide']
            },
            {
                icon: require('../Assets/Images/reduce_your_risk.png'),
                subTopic: 'Reduce Your Risk',
                description: 'Tips on how to reduce your risk of being sexually assaulted.',
                subContent: []
            }
        ]
    },
    {
        topic: 'Transitioning Service Member',
        content: [
            {
                icon: require('../Assets/Images/tsm_overview.png'),
                subTopic: 'TSM Overview',
                description: 'Sexual assault Information for Transitioning Service Members.',
                subContent: []
            },
            {
                icon: require('../Assets/Images/benefits_and_services.png'),
                subTopic: 'Benefits and Services',
                description: 'Services & Benefits for survivors of sexual assault who are TSMs',
                subContent: []
            }
        ]
    }
]

const Constants = {
    Colors,
    FontSizes,
    LearnLabels
}

export default Constants
