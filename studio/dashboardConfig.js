export default {
  widgets: [
    {name: 'sanity-tutorials'},
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              sites: [
                {
                  buildHookId: '5cc83d2e74876b40ba73350a',
                  name: 'Content Studio',
                  siteId: 'ac7293bb-b78f-4f4c-b4b6-4391e02823dd'
                },
                {
                  buildHookId: '5cc83d2e8e155615c008b903',
                  name: 'Portfolio Website',
                  siteId: '1a6a8253-8ad2-4657-80ed-681e0c43638d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mateuszbaj/Uusanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https:&#x2F;&#x2F;Uusanity-gatsby-portfolio.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
