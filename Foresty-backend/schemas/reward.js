export default {
    name: 'reward',
    title: 'Rewards',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'count',
            title: 'Count',
            type: 'number'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            name: 'coinsRequired',
            title: 'CoinsRequired',
            type: 'number'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        }, 
        {
            name: 'itemValue',
            title: 'ItemValue',
            type: 'number'
        }
    ]
}