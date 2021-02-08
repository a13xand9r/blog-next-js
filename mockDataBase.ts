import { v4 } from 'uuid'
const fs = require('fs')

export let users = [
  {
    id: '1', name: 'Alex', photo: 'https://i.ytimg.com/an/KSSBlqb1ax8/5b42c845-b840-4dc2-9161-7fbf4b37cdbc_mq.jpg?v=5b5d9c08', posts: [
      {
        id: v4(),
        date: new Date('December 17, 2018 03:24:00').toLocaleString(),
        title: 'В США создали дрон для поиска запахов с «живыми» усиками от настоящих бабочек',
        body: '<p>Учёные вырвали биологический сенсор у живых мотыльков.</p><img src=\'https://leonardo.osnova.io/fdb575b5-f321-5c31-8255-9d96d2026821/-/preview/700/-/format/webp/\' alt=\'\' /><p>Инженеры из Вашингтонского университета <a href="https://www.washington.edu/news/2020/12/07/smellicopter-avoids-obstacles-uses-live-moth-antenna-to-smell/" rel="nofollow noreferrer noopener" target="_blank">создали</a> Smellicopter — автономного дрона, который улавливает запахи и может следовать за ними, обходя препятствия. Для этого учёные использовали «живой» сенсор: они взяли усики бабочек вида Manduca sexta (Бражник табачный) и подключили их к роботу.</p><p>Исследователя удалось подключить усики к электронике с помощью крошечных проводов, которые подвели к каждому концу «датчика». Это позволило получить измерение среднего сигнала от каждой клетки в усике. Затем учёные сравнили данные с сенсором, созданным человеком, установив оба датчика в конце аэротрубы и запуская туда разные запахи. Усико бабочки реагировало более быстро и быстрее восстанавливалось после каждого восприятия.</p><p>Как пояснили учёные, они применили природный датчик, потому что большинство созданных человеком сенсором недостаточно точны для распознавания специфических запахов в процессе полёта. Они предлагают использовать Smellicopter в опасных местах, куда опасно приходить людям: например в зданиях после землетрясений или в зонах с неразорвавшимися бомбами.</p>'
      },
      {
        id: v4(),
        date: new Date('February 2, 2019 13:21:05').toLocaleString(),
        title: 'Минцифры составило рейтинг приложений для предустановки: в шести из 12 категорий лидируют продукты Mail.ru Group',
        body: '<p>Министерство цифрового развития, связи и массовых коммуникаций сформировало список приложений, которые рекомендуют для предустановки на электронные устройства, предназначенные для продажи в России с 2021 года. Об этом <a href="https://digital.gov.ru/ru/events/40238/" rel="nofollow noreferrer noopener" target="_blank">сообщается</a> на сайте ведомства.</p><p>Министерство получило около 100 заявок от производителей ПО и составило их рейтинг. В категории браузеров, поисковых, навигационных систем и облачных сервисов для хранения данных лидирует «Яндекс», в категориях «электронная почта», «новостной агрегатор», «социальные сети» – Mail.ru Group, среди антивирусных систем — Kaspersky, офисного ПО — «Мой офис». Вне рейтинга установят сервис Госуслуги и платёжную систему «Мир».</p><p>Источник «Коммерсанта» <a href="https://www.kommersant.ru/doc/4604038" rel="nofollow noreferrer noopener" target="_blank">рассказал</a>, что министерство выбрало 29 приложений в 12 категориях. Позже выберут десять онлайн-кинотеатров для предустановки на выбор. Из вошедших в рейтинг продуктов пять принадлежат «Яндексу» и 13 — Mail.ru Group. </p>'
      },
      {
        id: v4(),
        date: new Date('February 2, 2019 13:21:05').toLocaleString(),
        title: 'Apple получила патент на управление AirPods Pro по касанию лица, движению языка и отдельных частей тела',
        body: '<p>Возможно, в будущем пользователи смогут переключать треки, щёлкая языком по зубам и касаясь отдельных частей лица.</p><img src=\'https://leonardo.osnova.io/03dc1fbc-ecd0-5767-9e1e-b69768b623dc/-/preview/600/-/format/webp/\' alt=\'\' /><p>Apple <a href="http://patft.uspto.gov/netacgi/nph-Parser?patentnumber=10,873,798" rel="nofollow noreferrer noopener" target="_blank">получила</a> патент на управление AirPods через взаимодействие с телом пользователя. Компания предлагает использовать специальные касания лица для работы с наушниками.</p><p>В патенте Apple говорится о системе управления, которая может распознавать сигналы ввода и после этого менять работу носимого устройства, в качестве примера которого указаны наушники. Устройство сможет распознавать сигналы как изнутри тела, так и снаружи. Например, касание ушей, данные из ушных каналов, головы, тела, а также отдельных частей тела.</p><p>Вводными данными могут быть любые действия и состояния, которые может распознать устройства. В патенте описываются разные способы управления наушниками через тело, в том числе свайпы, нажатия и другие способы. Устройство также сможет распознать щелчок зубами или языком. </p><p>Среди других способов управления — вокальные звуки и «субвокализации»: звуки голоса, находящиеся ниже уровня, на которым люди обычно могут слышать. Чаще всего это звуки ниже нуля децибел. Устройство также может зафиксировать в качестве сигнала ввода перемещение части тела, например, движения головой, руками, ногами и не только. Управлять наушниками предлагается и с помощью контакта с другими людьми или предметами.</p><p>Наушники смогут улавливать сигналы с помощью микрофона, направленного в ухо. Это одна из особенностей AirPods Pro, которая нужна для работы шумоподавления.</p>'
      },
    ]
  },
  {
    id: '2', name: 'Victor', photo: 'https://www.mensfashion.ru/wp-content/uploads/2012/09/367b_fashion_advice_300-1.jpg', posts: [
      {
        id: v4(),
        date: new Date('December 17, 2018 03:24:00').toLocaleString(),
        title: 'Выборгская епархия РПЦ показала первый православный «антивирус»',
        body: '<p>Его разработали сотрудники IT-направления епархиального отдела по делам молодежи.</p><img src=\'https://leonardo.osnova.io/37997e6e-9c7b-5680-a66a-e14eb2d1506a/-/preview/700/-/format/webp/\' alt=\'\' /><p>«Православный антивирус» Labarum должен защитить пользователей от мошенников, которые под видом священнослужителей собирают пожертвования. Его презентацию 15 декабря <a href="https://youtu.be/-2wFWr5yWNI" rel="nofollow noreferrer noopener" target="_blank">провёл</a> глава епархиального Молодёжного отдела протоиерей Артемий Литвинов. </p><p>Он уточнил, что Labarum правильнее называть расширением для браузера, однако в презентации и на сайте епархии его называют «антивирусом». Расширение пока доступно только для Firefox, для Chrome его можно установись вручную. Литвинов заверил, что в разработчики создали расширения и для других браузеров и пока ждут их одобрения. </p><p>Labarum синхронизирован с базой мошеннических сайтов, основанной на данных Роскомнадзора и Синодального отдела по взаимоотношениям Церкви с обществом и СМИ. Если пользователь попадает на такой сайт, то расширение его предупредит об этом.</p><img src=\'https://leonardo.osnova.io/cd0b7b2b-d5a7-5a40-b11a-e74dd456e7af/-/preview/700/-/format/webp/\' alt=\'\' />'
      },
      {
        id: v4(),
        date: new Date('June 12, 2019 01:11:03').toLocaleString(),
        title: 'YouTube начал запрашивать паспортные или данные кредитной карты для просмотров видео с возрастными ограничениями',
        body: '<p>Хотел посмотреть Uma2rman - Ночной дозор и был удивлен. Как давно это произошло? </p><img src=\'https://leonardo.osnova.io/2d81c016-75f7-538c-9a3e-dc6522538445/\' alt=\'\' /><p>Причем альтернативы нет, либо придется ввести данные либо никакого видео. У вас тоже так? </p><img src=\'https://leonardo.osnova.io/fc7c934f-0db6-58b2-9b08-78c498f2cc44/\' alt=\'\' />'
      },
    ]
  },
  {
    id: '3', name: 'Jane', photo: 'https://i0.wp.com/ae01.alicdn.com/kf/H6e19d0c3bc39476db3c46d728a8f148f9/%D0%9E%D0%BF%D1%82%D0%BE%D0%B2%D0%B0%D1%8F-%D0%BF%D1%80%D0%BE%D0%B4%D0%B0%D0%B6%D0%B0-%D0%BD%D0%B5%D0%B3%D0%B0%D0%B1%D0%B0%D1%80%D0%B8%D1%82%D0%BD%D1%8B%D1%85-%D1%81%D0%BE%D0%BB%D0%BD%D1%86%D0%B5%D0%B7%D0%B0%D1%89%D0%B8%D1%82%D0%BD%D1%8B%D1%85-%D0%BE%D1%87%D0%BA%D0%BE%D0%B2-%D0%B4%D0%BB%D1%8F-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD-2020-%D0%A0%D0%B5%D1%82%D1%80%D0%BE-%D1%86%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%B2%D0%B8%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D1%8B%D0%B5-%D0%9E%D1%82%D1%82%D0%B5%D0%BD%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD-%D0%BE%D0%BF%D1%82%D0%BE%D0%BC-%D0%BA%D0%B2%D0%B0%D0%B4%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B5.jpg_350x350.jpg', posts: [
      {
        id: v4(),
        date: new Date('January 13, 2020 00:14:52').toLocaleString(),
        title: 'Визуализация приземления марсохода Perseverance под эпичную музыку от NASA',
        body: '<video src=\'https://leonardo.osnova.io/52fda286-5bc9-58a6-8e65-279ceb0c5dc1/-/format/mp4/\' controls></video> '
      },
      {
        id: v4(),
        date: new Date('January 11, 2020 12:24:12').toLocaleString(),
        title: 'Теперь не просто концепт: первый электромобиль Sony Vision-S тестируют на европейских дорогах',
        body: '<p>Похоже, компания действительно намерена заняться выпуском своих машин.</p> <iframe width="760" height="390" src="https://www.youtube.com/embed/AtyojR38K0c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p>Sony начала тестирование своего первого электромобиля Vision-S на дорогах общего пользования в конце 2020 года и показала первые видео с тест-драйва. Похоже, машина пока не готова к массовому производству, но уже является не просто прототипом.</p><p>Выпуском электромобиля занимается производитель автозапчастей Magna, а для создания машины Sony привлекла множество подрядчиков, включая BlackBerry, Bosch, Continental, Nvidia, Qualcomm и не только. Компания утверждает, что использует наработки и в других транспортных средствах.</p><p>Sony показала электромобиль Vision-S на выставке CES в 2020 году. Тогда его считали лишь концептом, который может никогда не добраться даже до тестирования на общественных дорогах. </p><p>В компании отмечали, что с помощью Vision-S хотят продемонстрировать свои технологии для автомобильной индустрии. Электромобиль оснастили двумя электродвигателями по 200kW мощности каждый, он может разогнаться до 100 километров в час за 4,8 секунды, а максимальная скорость составляет 239 километров в час.</p><p>Vision-S получил 33 датчика внутри и снаружи корпуса, широкоформатные дисплеи и 360-градусный звук в машине. Электромобиль также оснащён лидаром и сенсорами для распознавания дороги, объектов и цветов. Он получил второй уровень автономности — Vision-S может сам разгоняться и тормозить, но водитель должен следить за дорогой. </p><img src=\'https://leonardo.osnova.io/96219a7a-fa1e-5b41-a41b-f03e4c43e2ce/\' alt=\'\' />'
      },
    ]
  },
  { id: '4', name: 'Lena', photo: 'https://lemonade.style/wp-content/uploads/2017/12/pete-bellis-401355-400x400.jpg' },
  { id: '5', name: 'Dmitry', photo: 'https://i0.wp.com/ae01.alicdn.com/kf/Hbf1d79b78e684906a8c19ba53104bd009/2020-%D1%80%D0%BE%D1%81%D0%BA%D0%BE%D1%88%D0%BD%D1%8B%D0%B5-%D0%BA%D0%B2%D0%B0%D0%B4%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B5-%D0%BE%D0%BF%D1%80%D0%B0%D0%B2%D1%8B-%D0%B4%D0%BB%D1%8F-%D0%BE%D1%87%D0%BA%D0%BE%D0%B2-%D0%B4%D0%BB%D1%8F-%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD-%D0%B8-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD-%D1%82%D1%80%D0%B5%D0%BD%D0%B4%D0%BE%D0%B2%D1%8B%D0%B5-%D1%81%D1%82%D0%B8%D0%BB%D0%B8-UV400-%D0%BE%D0%BF%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5-%D0%BC%D0%BE%D0%B4%D0%BD%D1%8B%D0%B5-%D0%BE%D1%87%D0%BA%D0%B8.jpg', posts: null },
] as Array<UserType>

const writeJSON = (usersData: Array<UserType>) => {
  let data = JSON.stringify(usersData)
  fs.writeFileSync('users.json', data)
}

const readJSON = () => {
  let usersJSON = fs.readFileSync('users.json')
  return JSON.parse(usersJSON)
}

export const getUsers = (): Array<UserType> => {
  return readJSON().map(u => ({ id: u.id, name: u.name, photo: u.photo }))
}
export const getUser = (id: string): UserType => {
  return readJSON().find(u => u.id === id)
}
export const getProfile = (): UserType => {
  return readJSON()[0]
}
export const getPost = (id: string): PostType => {
  let post: PostType
  readJSON().filter(u => u.posts).forEach(u => {
    const p = u.posts.find(p => p.id === id)
    if (p) post = p
  })
  return post
}
export const addPost = (post: PostType) => {
  let usersData = readJSON()
  usersData[0].posts = [...usersData[0].posts, post]
  writeJSON(usersData)
}
export const getAllPosts = (): Array<PostType> => {
  let posts = []
  readJSON().forEach(u => {
    if (u.posts) posts = [...posts, ...u.posts]
  })
  return posts
}

export type UserType = {
  id?: string
  name?: string
  photo?: string
  posts?: null | Array<PostType>
  status?: 'ERROR' | 'OK'
}
export type PostType = {
  id?: string
  date?: string
  title?: string
  body?: string
  status?: 'ERROR' | 'OK'
}