export default {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    {
      name: 'firstName',
      type: 'string',
      title: 'First Name',
      placeholder: 'Jane',
      validation: (Rule) => Rule.required().min(1).error('Required field'),
    },
    {
      name: 'lastName',
      type: 'string',
      title: 'Last Name',
      placeholder: 'Doe',
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
