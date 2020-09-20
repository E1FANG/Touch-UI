module.exports = {
    base:'/Touch-UI/',
    title: 'Touch UI',
    description: 'Just playing around',
    themeConfig:{
      // sidebar:auto
      sidebar:[
        {
          title:'入门',
          children:[
            '/install/',
            '/get-started/'
          ]
        },
        {
          title:'组件',
          children:[
            '/components/button',
            '/components/tabs',
            '/components/input',
            '/components/grid',
            '/components/layout',
            '/components/popover',
            '/components/collapse'
          ]
        }
      ]
    }
  }