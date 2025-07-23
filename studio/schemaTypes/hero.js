export default {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    {
      name: 'mainHeading',
      type: 'string',
      title: 'Main Heading',
      description: 'Enter your name here.',
      placeholder: 'Jane Doe',
      validation: (Rule) => Rule.required().min(1).error('Required field'),
    },
    {
      name: 'subHeading',
      type: 'text',
      title: 'Sub Heading',
      placeholder: 'Photographer, Artist, etc.',
      description: 'Enter your title here.',
      validation: (Rule) => Rule.required().min(1).error('Required field'),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Hero Image',
      options: {hotspot: true},
    },
  ],
}
