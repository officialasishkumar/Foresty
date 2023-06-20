export default {
  name: 'trees',
  title: 'Trees',
  type: 'document',
  fields: [
    {
      name: 'plantedby',
      title: 'PlantedBy',
      type: 'reference',
      to: [{ type: 'user' }],
    },
    {
      name: 'location',
      title: 'Location',
      type: 'geopoint',
    },
    {
      name: 'species',
      title: 'Species',
      type: 'string',
    },
    {
      name: 'plant_image',
      title: 'Plant_Image',
      type: 'image',
    },
    {
      name: 'plantedDate',
      title: 'PlantedDate',
      type: 'date',
    },
    {
      name: 'watered',
      title: 'Watered',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'watereddata' }] }],
    },
  ],
}