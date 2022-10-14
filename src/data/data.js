import roll1 from '../assets/images/menu/rolls/1.webp'
import roll2 from '../assets/images/menu/rolls/2.webp'
import roll3 from '../assets/images/menu/rolls/3.webp'
import roll4 from '../assets/images/menu/rolls/4.webp'
import roll5 from '../assets/images/menu/rolls/5.webp'
import roll6 from '../assets/images/menu/rolls/6.webp'
import drink1 from '../assets/images/menu/drinks/drink1.webp'
import drink2 from '../assets/images/menu/drinks/drink2.webp'
import drink3 from '../assets/images/menu/drinks/drink3.webp'
import drink4 from '../assets/images/menu/drinks/drink4.webp'
import drink5 from '../assets/images/menu/drinks/drink5.webp'
import drink6 from '../assets/images/menu/drinks/drink6.webp'
import salat1 from '../assets/images/menu/salats/salat1.webp'
import salat2 from '../assets/images/menu/salats/salat2.webp'
import salat3 from '../assets/images/menu/salats/salat3.webp'
import set1 from '../assets/images/menu/sets/set1.jpg'
import set2 from '../assets/images/menu/sets/set2.jpg'
import set3 from '../assets/images/menu/sets/set3.jpg'
import set4 from '../assets/images/menu/sets/set4.jpg'
import set5 from '../assets/images/menu/sets/set5.jpg'
import soup1 from '../assets/images/menu/soups/soup1.webp'
import soup2 from '../assets/images/menu/soups/soup2.webp'
import soup3 from '../assets/images/menu/soups/soup3.webp'
import soup4 from '../assets/images/menu/soups/soup4.webp'
import soup5 from '../assets/images/menu/soups/soup5.webp'
import soup6 from '../assets/images/menu/soups/soup6.webp'
export const data = {
    rolls : [
        {
            name: 'Рол Філадельфія з мідіями, крабміксом та стружкою тунця',
            cost: 189,
            discount: 10,
            size: '240 г',
            discription: 'Авокадо, Крабовий мікс, Крем-сир, Мідії, Норі, Помідор, Рис, Соус світ чилі майонез гострий), Соус унагі, Стружка тунця',
            image: roll1
        },
        {
            name: 'Рол Філадельфія абурі з копченою куркою',
            cost: 155,
            discount: 0,
            size: '250 г',
            discription: 'Крем-сир, Кунжут білий, Цибуля зелена, Мікс болгарських перців, Норі, Огірок, Помідор, Рис, Соус спайсі майонез, Курка копчена, Сир гауда',
            image: roll2
        },
        {
            name: 'Рол Філадельфія Де Люкс зі свіжим лососем',
            cost: 295,
            discount: 0,
            size: '290 г',
            discription: 'Авокадо, Ікра летючої риби, Крем-сир, Лосось cвіжий, Норі, Огірок, Рис',
            image: roll3
        },
        {
            name: 'Ролл Філадельфія Де Люкс з вугрем',
            cost: 389,
            discount: 0,
            size: '290 г',
            discription: 'Авокадо, Ікра летючої риби, Крем-сир, Цибулеві крихти, Норі, Огірок, Рис, Соус унагі, Вугор',
            image: roll4
        },
        {
            name: 'Рол Філадельфія Де Люкс з лососем та манго',
            cost: 295,
            discount: 0,
            size: '295 г',
            discription: 'Крем-сир, Лосось cвіжий, Манго, Норі, Рис, Соус світ чилі манго (гострий)',
            image: roll5
        },
        {
            name: 'Рол Філадельфія в кунжуті з мармуровим сомом',
            cost: 169,
            discount: 0,
            size: '230 г',
            discription: 'Авокадо, Крем-сир, Кунжут білий, Мармуровий сом, Норі, Огірок, Рис',
            image: roll6
        },
    ],
    drinks: [
        {
            name: `Лимонад класичний з м'ятою`,
            cost: 59,
            discount: 0,
            size: '0,3л',
            discription: '',
            image: drink1
        },
        {
            name: `Лимонад імбирний`,
            cost: 59,
            discount: 0,
            size: `0,3л`,
            discription: ``,
            image: drink2
        },
        {
            name: `Фреш апельсиновий`,
            cost: 125,
            discount: 10,
            size: `0,3л`,
            discription: ``,
            image: drink3
        },
        {
            name: `Фреш грейпфрутовий`,
            cost: 135,
            discount: 20,
            size: `0,3л`,
            discription: ``,
            image: drink4
        },
        {
            name: `Фреш яблучний`,
            cost: 67,
            discount: 0,
            size: `0,3л`,
            discription: ``,
            image: drink5
        },
        {
            name: `Фреш яблучно-морквяний`,
            cost: 65,
            discount: 0,
            size: `0,3л`,
            discription: ``,
            image: drink6
        },
    ],
    salats: [
        {
            name: `Спрінг-рол з тунцем`,
            cost: 179,
            discount: 0,
            size: '160г',
            discription: '',
            image: salat1
        },
        {
            name: `Спрінг-рол з крабміксом та хіяші`,
            cost: 135,
            discount: 0,
            size: '160г',
            discription: '',
            image: salat2
        },
        {
            name: `Спрінг-рол з сашимі лосося`,
            cost: 199,
            discount: 0,
            size: '210г',
            discription: '',
            image: salat3
        },
    ],
    soups: [
        {
            name: `Суп Том Ям з морепродуктами`,
            cost: 269,
            discount: 0,
            size: '420',
            discription: '',
            image: soup1
        },
        {
            name: `Суп Том Ям з фішболами та морепродуктами`,
            cost: 235,
            discount: 0,
            size: '400г',
            discription: '',
            image: soup2
        },
        {
            name: `Суп Том Ям з куркою`,
            cost: 175,
            discount: 0,
            size: '380г',
            discription: '',
            image: soup3
        },
        {
            name: `Суп з вонтонами`,
            cost: 129,
            discount: 0,
            size: '330г',
            discription: '',
            image: soup4
        },
        {
            name: `Суп Рамен зі свининою Місо`,
            cost: 149,
            discount: 0,
            size: '480г',
            discription: '',
            image: soup5
        },
        {
            name: `Суп Рамен з яловичиною Місо`,
            cost: 155,
            discount: 0,
            size: '460г',
            discription: '',
            image: soup6
        },
    ],
    sets: [
        {
            name: `На бавовну`,
            cost: 789,
            discount: 0,
            size: '900г',
            discription: '',
            image: set1
        },
        {
            name: `На пташки`,
            cost: 899,
            discount: 0,
            size: '850г',
            discription: '',
            image: set2
        },
        {
            name: `Взумі сет з копченим сиром`,
            cost: 625,
            discount: 0,
            size: '600г',
            discription: '',
            image: set3
        },
        {
            name: `лоSOS сет з копченим сиром`,
            cost: 1005,
            discount: 0,
            size: '1300г',
            discription: '',
            image: set4
        },
        {
            name: `Паті сет`,
            cost: 1300,
            discount: 0,
            size: '1800г',
            discription: '',
            image: set5
        },
    ]
}