export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5f985a843667ac00aaba3296',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-92yo2zz7',
                  apiId: 'e0373795-4845-4334-9ea2-da7e35051c91'
                },
                {
                  buildHookId: '5f985a846a14f7012967f4a5',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-bnm7dv6r',
                  apiId: '7bd393a5-d9c0-4919-b30e-e138b2a4afcb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/threesam/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-bnm7dv6r.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
