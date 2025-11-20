import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'exhibition',
  title: 'Exhibition',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'venue',
      title: 'Venue',
      type: 'string',
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
    }),
    defineField({
      name: 'start',
      title: 'Start date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'end',
      title: 'End date',
      type: 'date',
    }),
  ],
})
