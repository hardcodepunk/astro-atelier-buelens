import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'journal',
  title: 'Journal Entry',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      type: 'datetime',
      title: 'Date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'cover',
      type: 'image',
      title: 'Cover Image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{type: 'block'}],
    }),
  ],
})
