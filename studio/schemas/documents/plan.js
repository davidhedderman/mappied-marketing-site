// plan.js
export default {
  type: 'document',
  name: 'plan',
  title: 'Plan',
  fields: [
    {
      name: 'name',
      title: 'Plan Name',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'mainImage'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontends will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96
      }
    }
  ]
}
