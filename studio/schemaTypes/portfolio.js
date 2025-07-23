export default {
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  preview: {
    prepare() {
      return {
        title: 'Portfolio',
      }
    },
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'string',
      title: 'Portfolio Section Title',
      description: 'Defaults to "Work"',
      initialValue: 'Work',
    },

    // Project list
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Project Title',
              placeholder: '2025',
              description: 'The design looks best with one-word or shorter titles.',
            },
            {
              name: 'images',
              type: 'array',
              title: 'Project Images',
              of: [
                {
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  fields: [
                    {
                      name: 'alt',
                      type: 'string',
                      title: 'Description',
                      description: 'Describe the image for screen readers.',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'caption',
                      type: 'string',
                      title: 'Caption',
                      description: 'Image caption. Defaults to "Untitled"',
                      initialValue: 'Untitled',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
