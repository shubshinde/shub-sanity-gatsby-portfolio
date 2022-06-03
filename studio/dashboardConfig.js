export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62996ca3486d340496fc9028',
                  title: 'Sanity Studio',
                  name: 'shub-sanity-gatsby-portfolio-studio',
                  apiId: '26a8cfde-55b3-40cb-9fc5-2345197e48f4'
                },
                {
                  buildHookId: '62996ca3d43ed6059212b1a2',
                  title: 'Portfolio Website',
                  name: 'shub-sanity-gatsby-portfolio',
                  apiId: '48745edb-c1b6-483d-b686-24a5c6bf0719'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shubshinde/shub-sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://shub-sanity-gatsby-portfolio.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
