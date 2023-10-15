// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '1500$ per month',
  address: 'Poznań, Poland',
}

let footer = {
  social: {
    email: {
      text: 'ivan@mail.com',
      href: 'mailto:ivan@mail.com',
    },
    phone: {
      text: '+380671112233',
      href: 'tel:+380671112233',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ivan-test',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume -- Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in 
        development. Whenever I start to work on a new project I learn the 
        domain and try to understand the idea of the project. Good team player, 
        every colleague is a friend to me.`,
      },
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) 
        and sport statistics ( tournament position, goals etc), analyzing by simple 
        mathematics models and preparing probability for such events like: 
        money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume -- Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 10,
          isTop: true,
        },
        {
          name: 'VS Code & NPM',
          point: 9,
        },
        {
          name: 'Git & Terminal',
          point: 7,
        },
        {
          name: 'React JS',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'Bike',
          isMain: true,
        },
        {
          name: 'Floristics',
          isMain: false,
        },
        {
          name: 'Swimming',
          isMain: false,
        },
      ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume -- Education',
    },

    header,

    main: {
      educations: [
        {
          name: 'NAIM',
          isEnd: true,
        },
        {
          name: 'HAIM',
          isEnd: true,
        },
        {
          name: 'PIU',
          isEnd: false,
        },
        {
          name: 'KIU',
          isEnd: true,
        },
        {
          name: 'GIM',
          isEnd: false,
        },
        {
          name: 'EDU',
          isEnd: true,
        },
      ],
      certificates: [
        {
          name: 'NAIM Gold Cert',
          id: 81,
        },
        {
          name: 'HAIM Palm Branch',
          id: 14,
        },
        {
          name: 'PIU Red Eye',
          id: 215,
        },
      ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: 'big',
    page: {
      title: 'Resume -- Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'Accenture',
            url: 'https://accenture.com/',
          },
          duration: {
            from: '01.01.2023',
            to: null,
          },
          projectAmount: 3,
          projects: [
            {
              name: 'Resume',
              url: 'http://datalog.store',
              about:
                'multi language CV creating online service',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              awards: [
                {
                  name: 'Recognition master award',
                },
                {
                  name: 'Coaching champion award',
                },
              ],
              stackAmount: 3,
              awardAmount: 2,
            },
          ],
        },
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'Dell',
            url: '',
          },
          duration: {
            from: '01.01.2022',
            to: '31.12.2022',
          },
          projectAmount: 6,
          projects: [
            {
              name: 'Extra delivery service',
              url: 'http://datalog.store',
              about: 'multi optional online service',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              awards: [
                {
                  name: 'Recognition master award',
                },
                {
                  name: 'Coaching champion award',
                },
              ],
              stackAmount: 2,
              awardAmount: 3,
            },
          ],
        },
      ],
    },

    footer,
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
