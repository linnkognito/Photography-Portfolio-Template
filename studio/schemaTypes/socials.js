export default {
  name: 'socials',
  title: 'Social media icons',
  type: 'document',
  fields: [
    // Common platforms
    {
      name: 'platforms',
      title: 'Choose from common platforms',
      description:
        'If the social media platform you are looking for does not exist in this list, you can manually add a custom platform & link below.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              type: 'string',
              title: 'Platform',
              options: {
                list: [
                  {title: 'Behance', value: 'behance'},
                  {title: 'Discord', value: 'discord'},
                  {title: 'Dribbble', value: 'dribbble'},
                  {title: 'Facebook', value: 'facebook'},
                  {title: 'GitHub', value: 'github'},
                  {title: 'Instagram', value: 'instagram'},
                  {title: 'LinkedIn', value: 'linkedin'},
                  {title: 'TikTok', value: 'tiktok'},
                  {title: 'Twitch', value: 'twitch'},
                  {title: 'X (Twitter)', value: 'xtwitter'},
                  {title: 'YouTube', value: 'youtube'},
                  {title: 'WhatsApp', value: 'whatsapp'},
                ],
              },
              validation: (Rule) => Rule.required().error('A platform selection is required.'),
            },
            {
              name: 'url',
              title: 'Profile URL',
              type: 'url',
              validation: (Rule) =>
                Rule.uri({
                  scheme: ['http', 'https'],
                  message: 'Enter a valid URL (must start with http:// or https://)',
                }).required(),
            },
          ],
        },
      ],
    },

    // Custom
    {
      name: 'customPlatforms',
      title: 'Custom social media link',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'platform', type: 'string', title: 'Platform'},
            {
              name: 'url',
              type: 'url',
              title: 'Profile URL',
              description: 'Must be a URL starting with http:// or https://',
              validation: (Rule) =>
                Rule.uri({scheme: ['http', 'https']}).custom((value, context) => {
                  if (context.parent.platform && !value) return 'A valid URL is required.'
                  if (!context.parent.platform && value) {
                    return 'A platform name is required when adding a custom link.'
                  }

                  return true
                }),
            },
          ],
        },
      ],
    },
  ],

  preview: {
    prepare() {
      return {
        title: 'Social Media',
      }
    },
  },
}
