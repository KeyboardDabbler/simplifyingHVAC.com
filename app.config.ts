export default defineAppConfig({
    ui: {
      primary: 'yellow',
      gray: 'slate',
      footer: {
        bottom: {
          center: 'text-sm text-gray-500 dark:text-gray-400',
          wrapper: 'border-t border-gray-200 dark:border-gray-800'
        }
      }
    },
    header: {
      search: true,
      colorMode: true,
      links: [{
        icon: 'i-simple-icons-gitea',
        to: 'https://gitea.keyboarddabbler.com/Production/simplifyingHVAC.com',
        target: '_blank',
        'aria-label': 'Repo on Gitea'
      }]
    },
    footer: {
      colorMode: false,
    },
    toc: {
      title: 'Table of Contents',
      bottom: {
        title: 'Community',
        edit: '',
        links: [{
          icon: 'i-heroicons-star',
          label: 'Star on Gitea',
          to: '',
          target: '_blank',
        }, {
          icon: 'i-heroicons-book-open',
          label: 'docs',
          to: '',
          target: '_blank',
        }, {
          icon: 'i-simple-icons-nuxtdotjs',
          label: 'license',
          to: '',
          target: '_blank',
        }]
      }
    }
  })