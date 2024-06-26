import { ITour } from '../types/types.ts';
import flag1 from '@/shared/assets/images/flag_1.png';
import flag2 from '@/shared/assets/images/flag_2.png';
import flag3 from '@/shared/assets/images/flag_3.png';
import flag4 from '@/shared/assets/images/flag_4.png';
import north from '@/shared/assets/images/north.png';
import west from '@/shared/assets/images/west.png';
import southEast from '@/shared/assets/images/south-east.png';
import northEast from '@/shared/assets/images/north-east.png';
import east from '@/shared/assets/images/east.png';
import northWest from '@/shared/assets/images/north-west.png';
import south from '@/shared/assets/images/south.png';
import southWest from '@/shared/assets/images/south-west.png';
import officers from '@/shared/assets/images/officers.png';

export const tours: ITour[] = [
  {
    name: 'Викторина',
    questions: [
      {
        question: 'Как называется трёхмачтовый\nбоевой корабль, у которого\nмного пушек?',
        options: ['Фрегат', 'Линкор', 'Бот', 'Корвет'],
        answers: ['Фрегат'],
      },
      {
        question: 'Как называется парусное\nсудно с двумя и более\nмачтами и косыми парусами?',
        options: ['бриг', 'Барк', 'Шхуна', 'бригантина'],
        answers: ['Шхуна'],
      },
      {
        question: 'Как называется помещение\nдля приготовления пищи\nна морском судне?',
        options: ['Рубка', 'Камбуз', 'Гальюн', 'Каюта'],
        answers: ['Камбуз'],
      },
      {
        question: 'Как называется помещение\nдля размещения экипажа?',
        options: ['твиндек', 'Камбуз', 'кают-компания', 'кубрик'],
        answers: ['кубрик'],
      },
      {
        question: 'Как называется жилое\nпомещение на судне\nдля команды и пассажиров?',
        options: ['крюйт-камера', 'Каюта', 'Тамбур', 'Столовая'],
        answers: ['Каюта'],
      },
      {
        question: 'Как называется надстройка\nна верхней палубе,\nне доходящая до бортов?',
        options: ['Рубка', 'Трюм', 'пищеблок', 'насосное отделение'],
        answers: ['Рубка'],
      },
      {
        question: 'Как называется лестница\nна судне?',
        options: ['Сходни', 'Дорожка', 'Трап', 'Концы'],
        answers: ['Трап'],
      },
      {
        question: 'Как называется судовой\nколокол?',
        options: ['Набат', 'Ударник', 'Рында', 'металлофон'],
        answers: ['Рында'],
      },
      {
        question: 'Назовите самую большую\nрыбу в мире',
        options: ['Скат', 'нарвал', 'касатка', 'Китовая акула'],
        answers: ['Китовая акула'],
      },
      {
        question: 'Какая рыба водится\nв Красном море?',
        options: ['Не водится', 'красная', 'морская', 'пресноводная'],
        answers: ['Не водится'],
      },
      {
        question:
          'Как называется механическое\nприспособление для переправы\nс одного берега на другой?',
        options: ['паром', 'понтон', 'Трап', 'трал'],
        answers: ['паром'],
      },
      {
        question: 'Назовите самое крупное\nморское млекопитающее',
        options: ['нарвал', 'Акула', 'кашалот', 'Морж'],
        answers: ['кашалот'],
      },
    ],
  },
  {
    name: 'Загадки',
    questions: [
      {
        question: 'Зачерпнуло ветра белое крыло\nНас с тобой кататься в море унесло',
        options: ['облако', 'Парус', 'дым парохода', 'льдина'],
        answers: ['Парус'],
      },
      {
        question: 'Кругом вода, а с питьём беда.\nКто знает, где это бывает?',
        options: ['Река', 'Ручей', 'Стакан', 'Море'],
        answers: ['Море'],
      },
      {
        question: 'Семьсот ворот, да один вход',
        options: ['Невод', 'звёздное небо', 'Зубы', 'окна и дверь'],
        answers: ['Невод'],
      },
      {
        question: 'По морю идёт, идёт,\nА до берега дойдёт,\nТут и пропадёт.',
        options: ['корабль', 'пловец', 'Волна', 'лодка'],
        answers: ['Волна'],
      },
      {
        question:
          'Великан стоит в порту,\nОсвещая темноту\nИ сигналит кораблям:\nЗаходите в гости к нам.',
        options: ['корабль', 'Док', 'Маяк', 'подьемный кран'],
        answers: ['Маяк'],
      },
      {
        question: 'Когда он нужен –\nЕго выбрасывают.\nКогда не нужен –\nЕго поднимают.',
        options: ['Шкаф', 'якорь', 'парус', 'Сейф'],
        answers: ['якорь'],
      },
      {
        question:
          'Если входят корабли\nВ порта акваторию,\nНужно, чтоб их провели\nВодной территорией.\nКак к причалу подойти?\nВедь фарватер под водой.\nКто подскажет, как пройти?\nОтгадайте, кто такой?',
        options: ['Юнга', 'Кок', 'капитан', 'лоцман'],
        answers: ['лоцман'],
      },
      {
        question:
          'Поднимает якоря,\nВозит грузы за моря,\nТолько лишь сухие грузы:\nБочки ящики, арбузы…\nНе берёт он жидкий груз,\nПотому и…',
        options: ['сухогруз', 'сам арбуз', 'в нём конфуз', 'профсоюз'],
        answers: ['сухогруз'],
      },
      {
        question:
          'Туч нагнал сердитый ветер.\nНебо в тучах, нет просвета,\nИ разбушевалось море\nВсем судам морским на горе.\nНочь настала прямо днём.\nКак мы это назовём?',
        options: ['ураган', 'Смерч', 'Шторм', 'затмение'],
        answers: ['Шторм'],
      },
    ],
  },
  {
    name: 'Викторина + загадки',
    questions: [
      {
        question: 'Как называется флаг\nфлота России?',
        options: ['гюйс', 'Андреевский флаг', 'Морской стяг', 'Военно-морское знамя'],
        answers: ['Андреевский флаг'],
      },
      {
        question: 'Найдите Андреевский флаг\nи выделите его',
        options: [flag1, flag2, flag3, flag4],
        answers: [flag1],
      },
    ],
  },
  {
    name: 'Викторина',
    subtitle: 'Собери Розу Ветров',
    questions: [
      {
        question: 'Какая сторона света\nнаходится здесь?',
        image: north,
        options: [
          'SOUTH-WEST (юго-запад)',
          'SOUTH-EAST (юго-восток)',
          'NORTH (север)',
          'SOUTH (юг)',
          'WEST (запад)',
          'EAST (восток)',
          'NORTH-WEST (северо-запад)',
          'NORTH-EAST (северо-восток)',
        ],
        answers: ['NORTH (север)'],
      },
      {
        question: 'Какая сторона света\nнаходится здесь?',
        image: west,
        options: [
          'SOUTH-WEST (юго-запад)',
          'SOUTH-EAST (юго-восток)',
          'NORTH (север)',
          'SOUTH (юг)',
          'WEST (запад)',
          'EAST (восток)',
          'NORTH-WEST (северо-запад)',
          'NORTH-EAST (северо-восток)',
        ],
        answers: ['WEST (запад)'],
      },
      {
        question: 'Какая сторона света\nнаходится здесь?',
        image: southEast,
        options: [
          'SOUTH-WEST (юго-запад)',
          'SOUTH-EAST (юго-восток)',
          'NORTH (север)',
          'SOUTH (юг)',
          'WEST (запад)',
          'EAST (восток)',
          'NORTH-WEST (северо-запад)',
          'NORTH-EAST (северо-восток)',
        ],
        answers: ['SOUTH-EAST (юго-восток)'],
      },
      {
        question: 'Какая сторона света\nнаходится здесь?',
        image: northEast,
        options: [
          'SOUTH-WEST (юго-запад)',
          'SOUTH-EAST (юго-восток)',
          'NORTH (север)',
          'SOUTH (юг)',
          'WEST (запад)',
          'EAST (восток)',
          'NORTH-WEST (северо-запад)',
          'NORTH-EAST (северо-восток)',
        ],
        answers: ['NORTH-EAST (северо-восток)'],
      },
      {
        question: 'Какая сторона света\nнаходится здесь?',
        image: east,
        options: [
          'SOUTH-WEST (юго-запад)',
          'SOUTH-EAST (юго-восток)',
          'NORTH (север)',
          'SOUTH (юг)',
          'WEST (запад)',
          'EAST (восток)',
          'NORTH-WEST (северо-запад)',
          'NORTH-EAST (северо-восток)',
        ],
        answers: ['EAST (восток)'],
      },
      {
        question: 'Какая сторона света\nнаходится здесь?',
        image: northWest,
        options: [
          'SOUTH-WEST (юго-запад)',
          'SOUTH-EAST (юго-восток)',
          'NORTH (север)',
          'SOUTH (юг)',
          'WEST (запад)',
          'EAST (восток)',
          'NORTH-WEST (северо-запад)',
          'NORTH-EAST (северо-восток)',
        ],
        answers: ['NORTH-WEST (северо-запад)'],
      },
      {
        question: 'Какая сторона света\nнаходится здесь?',
        image: south,
        options: [
          'SOUTH-WEST (юго-запад)',
          'SOUTH-EAST (юго-восток)',
          'NORTH (север)',
          'SOUTH (юг)',
          'WEST (запад)',
          'EAST (восток)',
          'NORTH-WEST (северо-запад)',
          'NORTH-EAST (северо-восток)',
        ],
        answers: ['SOUTH (юг)'],
      },
      {
        question: 'Какая сторона света\nнаходится здесь?',
        image: southWest,
        options: [
          'SOUTH-WEST (юго-запад)',
          'SOUTH-EAST (юго-восток)',
          'NORTH (север)',
          'SOUTH (юг)',
          'WEST (запад)',
          'EAST (восток)',
          'NORTH-WEST (северо-запад)',
          'NORTH-EAST (северо-восток)',
        ],
        answers: ['SOUTH-WEST (юго-запад)'],
      },
    ],
  },
  {
    name: 'Выборка',
    subtitle: 'Оснасти корабля капитана Чирикова',
    questions: [
      {
        question:
          'Необходимо из списка предметов выбрать те,\nкоторые могли быть взяты для оснастки\nи укомплектования корабля во время Великой\nСеверной экспедиции в 1741 году.',
        options: [
          'Магнитный компас',
          'Проволочный трос',
          'Песочные часы',
          'Бумажные салфетки',
          'Штурманский\nциркуль',
          'Штурманская\nлинейка',
          'Большая гребная\nшлюпка',
          'Малая гребная\nшлюпка',
          'Шерстяной ковёр',
          'Кабестан',
          'Лаг',
          'Секстан',
          'Солнечные часы',
          'Бинокль',
          'Глобус',
          'Подзорная труба',
          'Карандаш',
          'Бортжурнал',
        ],
        answers: [
          'Магнитный компас',
          'Песочные часы',
          'Штурманский\nциркуль',
          'Штурманская\nлинейка',
          'Большая гребная\nшлюпка',
          'Малая гребная\nшлюпка',
          'Кабестан',
          'Лаг',
          'Секстан',
          'Солнечные часы',
          'Подзорная труба',
          'Бортжурнал',
        ],
      },
      {
        question:
          'Необходимо из списка предметов выбрать те,\nкоторые могли быть взяты для оснастки\nи укомплектования корабля во время Великой\nСеверной экспедиции в 1741 году.',
        options: [
          'Телефон',
          'секстан',
          'Кипятильник',
          'Морская карта',
          'Телескоп',
          'Пулемёт',
          'Микроскоп',
          'Канистра',
          'Лупа',
          'Котёл',
          'Холодильник',
          'Якорь',
          'Люстра',
          'Парус',
          'Керосин',
          'Бочки с водой',
          'Лёд',
          'Раскладушка',
        ],
        answers: ['Морская карта', 'Лупа', 'Котёл', 'Якорь', 'Парус', 'Бочки с водой'],
      },
      {
        question:
          'Необходимо из списка предметов выбрать те,\nкоторые могли быть взяты для оснастки\nи укомплектования корабля во время Великой\nСеверной экспедиции в 1741 году.',
        options: [
          'Гамак-сеть',
          'Лаг',
          'Консервы',
          'Градшток',
          'Газеты',
          'Квадрант',
          'Рогожа',
          'Таранка',
          'Пушки',
          'Вино',
          'Мука',
          'Зерно',
          'Сухари',
        ],
        answers: [
          'Гамак-сеть',
          'Лаг',
          'Градшток',
          'Рогожа',
          'Таранка',
          'Пушки',
          'Вино',
          'Мука',
          'Зерно',
          'Сухари',
        ],
      },
    ],
  },
  {
    name: 'Викторина',
    questions: [
      {
        question: 'Кто такой боцман?',
        options: [],
        answers: ['Младший офицер'],
        description: {
          title: 'Боцман',
          description:
            'Боцман — младший офицер. Его обязанности включали поддержание технического состояния корабля и управление палубной командой. Он следил за состоянием парусов, снастей, шлюпок, корабельных часов; отвечал за хранение запасных канатов, ремонтного дерева, парусины; организовывал ремонтные работы корабля. Также он следил за содержанием корабельного флага и отвечал за поддержание связи с другими кораблями с помощью специальных сигналов. Боцман дублировал команды капитана во время шторма или боя.',
        },
      },
      {
        question: 'Кто такой кок?',
        options: [],
        answers: ['Повар'],
        description: {
          title: 'Кок',
          description:
            'Кок — корабельный повар. Он должен уметь не только готовить пищу, но и знать, как правильно хранить продукты, уметь экономно рассчитывать употребление пресной воды. Пираты могли запросто выкинуть кока за борт, если им не понравилось, как он приготовил, или если он не экономно использовал продукты и воду.',
        },
      },
      {
        question: 'Кто такой навигатор?',
        options: [],
        answers: ['Устройство для навигации'],
        description: {
          title: 'Навигатор',
          description:
            'Навигатор — Опытные моряки, которые хорошо ориентировались в морских картах, могли прокладывать курс и определять местоположение корабля.',
        },
      },
      {
        question: 'Для чего нужен был\nмастер парусов?',
        options: [],
        answers: ['Мастерить паруса'],
        description: {
          title: 'Мастер парусов',
          description:
            'Он должен был приобретать качественную парусину, шить, ремонтировать паруса. Мастер парусов отвечал за постановку тяжёлых и верхних парусов, а боцман руководил работами по постановке нижних парусов.',
        },
      },
      {
        question: 'За что отвечает\nсудовой врач? ',
        options: [],
        answers: ['Оказывает помощь'],
        description: {
          title: 'Судовой врач',
          description:
            'Оказывал помощь всем морякам судна. Врачи всегда очень ценились, поэтому при сражении суда противников часто переманивали врачей к себе на корабль, обещая им больше золота.',
        },
      },
      {
        question: 'Кого называют юнгами?',
        options: [],
        answers: ['Молодые моряки'],
        description: {
          title: 'Юнга',
          description:
            'Юнгами становились мальчики из благородных семей, которые направлялись на корабль для изучения основ мореходства. В дальнейшем становились моряками.',
        },
      },
      {
        question: 'Кто такой старпом?',
        options: [],
        answers: ['Капитан'],
        description: {
          title: 'Старпом',
          description:
            'Старпом – правая рука капитана. Исполнял обязанности капитана, когда тот отсутствовал.',
        },
      },
      {
        question: 'Для чего нужны механики\nна корабле?',
        options: [],
        answers: ['Чтобы устранять неисправности'],
        description: {
          title: 'Механики на корабле',
          description:
            'Механики на корабле отвечают за исправность ходовой части-двигателей корабля.',
        },
      },
    ],
  },
  {
    name: 'Выборка по картинке',
    subtitle: 'Снаряди капитана Чирикова',
    questions: [
      {
        question:
          'Выберите атрибуты\nкостюма морского офицера\nпервой половины 18 века\nдля капитана Чирикова',
        image: officers,
        options: [
          'Парик',
          'Штаны',
          'Панталоны',
          'Шляпа',
          'Ботфорты',
          'Кафтан',
          'Сюртук',
          'Шаровары',
          'Жабо',
          'Зонтик',
        ],
        answers: ['Парик', 'Штаны', 'Шляпа', 'Кафтан'],
      },
      {
        question:
          'Выберите атрибуты\nкостюма морского офицера\nпервой половины 18 века\nдля капитана Чирикова',
        image: officers,
        options: [
          'Шпага',
          'Поясная портупея',
          'Шейный платок',
          'Камзол',
          'Штиблеты',
          'Колготы',
          'Блузка',
          'Брюки',
          'Портянки',
          'Бутсы',
        ],
        answers: ['Шпага', 'Поясная портупея', 'Шейный платок', 'Камзол', 'Штиблеты'],
      },
    ],
  },
  {
    name: 'Конструктор',
    subtitle: 'Собери письмо А. Чирикова к Д. Я. Лаптеву',
    questions: [
      {
        question:
          'Капитан Алексей Чириков отправил письмо своему\nдругу, Дмитрию Яковлевичу Лаптеву, рассказывая\nо событиях, произошедших в конце июля 1741 года.\nПисьмо было случайно обнаружено в одном\nиз дел бывшей комиссии о коммерции и опубликовано\nв Русском Вестнике за май 1888 года.',
        options: [],
        answers: [],
      },
    ],
  },
];
