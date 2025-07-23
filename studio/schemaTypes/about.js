export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'About Heading',
      description: 'Heading for the About section. Defaults to "About"',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Profile Picture',
    },
    {
      name: 'bio',
      type: 'text',
      title: 'Short Bio',
      validation: (Rule) => Rule.required().min(20).max(350).warning('Required field'),
    },
    {
      name: 'buttonLabel',
      type: 'string',
      title: 'About Button Label',
      initialValue: "Let's Talk",
      description: 'Text for the About button. Defaults to "Let\'s Talk"',
    },
  ],
}
