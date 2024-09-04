export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'userName',
      title: 'UserName',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'string',
    },
    {
      name:  'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'coinsHave',
      title: 'CoinsHave',
      type: 'number',
    },
    {
      name: 'rewardsGained',
      title: 'RewardsGained',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'rewardgiven' }],
        }
      ]
    },
    {
      name: 'treesPlanted',
      title: 'TreesPlanted',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'trees' }],
        }
      ]
    },
    {
      name: 'watered',
      title: 'Watered',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'watereddata' }] }]
    }
  ],
};