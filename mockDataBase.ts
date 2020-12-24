import {v4} from 'uuid'

export let users = [
    {id: '1', name: 'Alex', photo: 'https://i.ytimg.com/an/KSSBlqb1ax8/5b42c845-b840-4dc2-9161-7fbf4b37cdbc_mq.jpg?v=5b5d9c08', posts: [
        {
          id: v4(),
          date: new Date('December 17, 2018 03:24:00').toLocaleString(),
          title: 'В США создали дрон для поиска запахов с «живыми» усиками от настоящих бабочек',
          body: '<p>Учёные вырвали биологический сенсор у живых мотыльков.</p><p>Инженеры из Вашингтонского университета <a href="https://www.washington.edu/news/2020/12/07/smellicopter-avoids-obstacles-uses-live-moth-antenna-to-smell/" rel="nofollow noreferrer noopener" target="_blank">создали</a> Smellicopter — автономного дрона, который улавливает запахи и может следовать за ними, обходя препятствия. Для этого учёные использовали «живой» сенсор: они взяли усики бабочек вида Manduca sexta (Бражник табачный) и подключили их к роботу.</p><p>Исследователя удалось подключить усики к электронике с помощью крошечных проводов, которые подвели к каждому концу «датчика». Это позволило получить измерение среднего сигнала от каждой клетки в усике. Затем учёные сравнили данные с сенсором, созданным человеком, установив оба датчика в конце аэротрубы и запуская туда разные запахи. Усико бабочки реагировало более быстро и быстрее восстанавливалось после каждого восприятия.</p><p>Как пояснили учёные, они применили природный датчик, потому что большинство созданных человеком сенсором недостаточно точны для распознавания специфических запахов в процессе полёта. Они предлагают использовать Smellicopter в опасных местах, куда опасно приходить людям: например в зданиях после землетрясений или в зонах с неразорвавшимися бомбами.</p>'
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
          title: 'Минцифры составило рейтинг приложений для предустановки: в шести из 12 категорий лидируют продукты Mail.ru Group Минцифры составило рейтинг приложений для предустановки: в шести из 12 категорий лидируют продукты Mail.ru Group Минцифры составило рейтинг приложений для предустановки: в шести из 12 категорий лидируют продукты Mail.ru Group',
          body: '<p>Министерство цифрового развития, связи и массовых коммуникаций сформировало список приложений, которые рекомендуют для предустановки на электронные устройства, предназначенные для продажи в России с 2021 года. Об этом <a href="https://digital.gov.ru/ru/events/40238/" rel="nofollow noreferrer noopener" target="_blank">сообщается</a> на сайте ведомства.</p><p>Министерство получило около 100 заявок от производителей ПО и составило их рейтинг. В категории браузеров, поисковых, навигационных систем и облачных сервисов для хранения данных лидирует «Яндекс», в категориях «электронная почта», «новостной агрегатор», «социальные сети» – Mail.ru Group, среди антивирусных систем — Kaspersky, офисного ПО — «Мой офис». Вне рейтинга установят сервис Госуслуги и платёжную систему «Мир».</p><p>Источник «Коммерсанта» <a href="https://www.kommersant.ru/doc/4604038" rel="nofollow noreferrer noopener" target="_blank">рассказал</a>, что министерство выбрало 29 приложений в 12 категориях. Позже выберут десять онлайн-кинотеатров для предустановки на выбор. Из вошедших в рейтинг продуктов пять принадлежат «Яндексу» и 13 — Mail.ru Group. </p>'
        },
    ]},
    {id: '2', name: 'Victor', photo: 'https://www.mensfashion.ru/wp-content/uploads/2012/09/367b_fashion_advice_300-1.jpg', posts: null},
    {id: '3', name: 'Dmitry', photo: 'https://i0.wp.com/ae01.alicdn.com/kf/Hbf1d79b78e684906a8c19ba53104bd009/2020-%D1%80%D0%BE%D1%81%D0%BA%D0%BE%D1%88%D0%BD%D1%8B%D0%B5-%D0%BA%D0%B2%D0%B0%D0%B4%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B5-%D0%BE%D0%BF%D1%80%D0%B0%D0%B2%D1%8B-%D0%B4%D0%BB%D1%8F-%D0%BE%D1%87%D0%BA%D0%BE%D0%B2-%D0%B4%D0%BB%D1%8F-%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD-%D0%B8-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD-%D1%82%D1%80%D0%B5%D0%BD%D0%B4%D0%BE%D0%B2%D1%8B%D0%B5-%D1%81%D1%82%D0%B8%D0%BB%D0%B8-UV400-%D0%BE%D0%BF%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5-%D0%BC%D0%BE%D0%B4%D0%BD%D1%8B%D0%B5-%D0%BE%D1%87%D0%BA%D0%B8.jpg', posts: null},
    {id: '4', name: 'Lena', photo: 'https://lh3.googleusercontent.com/proxy/Pkai_1ZNFHvsg9Kbja0HB5LnYaHxLhXvI3vK9mY0POGUJjjRiCbcDAZ0urDlbGtKl_Qw8vctk3Sik6sv2QRybCAFu1UCs9oDcGeWzHX6VjgVcx-k-bGCfzVq9VMgw64U96M0ZrZ3kVrEYrMoADsMfiHkGMuppO8wpzIs0cJmLwRO1oBUfm2BqViYRh6ljos6yxSTlQo6X1PP49tOZb9KGKmXOLGlwDGrWXudlcBdvIw3S0eCzBZWEmUmeqFciHcIJ_SDBNCYIu8-uAm6MtFrXzD07igbQr2T0iPFoBIj1iJrDdCFVzGyAbDQnQ_SCbYQ0PaMr8bXQjewwiHps-1sW1tJPFQNlP7-i-ozJUsr5aVfC67IaZySTwxr4WwjdRcYijqZ3mBl3NNC6pp6ZLq6RZ9f6J3kU3Dmu3woN82C8E0Hqi1HwimJN4O_GP0XOepvX9oBaXAtYmhDMicBtyXen8w836N-IoNXt47x3vI0In4eDwLPunzFscPWS6VkmKyPc2EU6hvvhX9FPcJFSaoxXZ8bciG2HEWZwPS6xRta_7LJhLbbp0YeQFw8Ku6EsYDPQiiP1oM3nf5_x59KsLal7tE9bd9v0bUe_V6s-1jFC1Mq-TdjmRw3qb6Gjc64X-58xFWiVT9_vVIAiDI'},
    {id: '5', name: 'Jane', photo: 'https://i0.wp.com/ae01.alicdn.com/kf/H6e19d0c3bc39476db3c46d728a8f148f9/%D0%9E%D0%BF%D1%82%D0%BE%D0%B2%D0%B0%D1%8F-%D0%BF%D1%80%D0%BE%D0%B4%D0%B0%D0%B6%D0%B0-%D0%BD%D0%B5%D0%B3%D0%B0%D0%B1%D0%B0%D1%80%D0%B8%D1%82%D0%BD%D1%8B%D1%85-%D1%81%D0%BE%D0%BB%D0%BD%D1%86%D0%B5%D0%B7%D0%B0%D1%89%D0%B8%D1%82%D0%BD%D1%8B%D1%85-%D0%BE%D1%87%D0%BA%D0%BE%D0%B2-%D0%B4%D0%BB%D1%8F-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD-2020-%D0%A0%D0%B5%D1%82%D1%80%D0%BE-%D1%86%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%B2%D0%B8%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D1%8B%D0%B5-%D0%9E%D1%82%D1%82%D0%B5%D0%BD%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD-%D0%BE%D0%BF%D1%82%D0%BE%D0%BC-%D0%BA%D0%B2%D0%B0%D0%B4%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B5.jpg_350x350.jpg', posts: null},
  ] as Array<UserType>

export type UserType = {
  id: string
  name: string
  photo: string
  posts: null | Array<PostType>
}
export type PostType = {
  id: string
  date: string
  title: string
  body: string
}