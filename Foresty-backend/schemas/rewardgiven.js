export default {
    name: 'rewardgiven',
    title: 'RewardGiven',
    type: 'document',
    fields: [
        {
            name: 'reward',
            title: 'Reward',
            type: 'reference',
            to: [{ type: 'reward' }]
        },
        {
            name: 'givenTo',
            title: 'GivenTo',
            type: 'reference',
            to: [{ type: 'user' }]
        },
        {
            name: 'givenDate',
            title: 'GivenDate',
            type: 'date'
        },
    ]
}