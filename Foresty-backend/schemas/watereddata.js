export default {
    name: 'watereddata',
    title: 'WateredData',
    type: 'document',
    fields: [
        {
            name: 'wateredBy',
            title: 'WateredBy',
            type: 'reference',
            to: [{ type: 'user' }]
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            name: 'TreeWatered',
            title: 'TreeWa tered',
            type: 'reference',
            to: [{ type: 'trees' }]
        },
        {
            name: 'wateredDate',
            title: 'WateredDate',
            type: 'date'
        }
    ]
}