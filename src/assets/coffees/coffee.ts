import Americano from './americano.png'
import Arabe from './arabe.png'
import AuLatte from './coffee-au-latte.png'
import Capuccino from './capuccino.png'
import Cubano from './cubano.png'
import Expresso from './expresso.png'
import ExpressoCream from './expresso-cream.png'
import Havaiano from './havaiano.png'
import HotChocolatte from './hot-chocolatte.png'
import IcedCoffee from './iced-coffee.png'
import Ireland from './irlandes.png'
import Latte from './latte.png'
import Macchiatto from './macchiato.png'
import Mochaccino from './mochaccino.png'

type Category = 'standard' | 'milky' | 'alcoholic' | 'special' | 'iced'

export const coffees = [
  {
    name: 'Americano',
    description: 'Expresso suave, menos intenso que o Expresso padrão',
    price: 10.9,
    image: Americano,
    id: 'american-38d8',
    categories: ['standard'],
  },
  {
    name: 'Arábica',
    description: 'Drink feito com grãos de café arábico',
    price: 35.56,
    image: Arabe,
    id: 'arabian-dh3i',
    categories: ['special'],
  },
  {
    name: 'Ao Leite',
    description: 'Misto de café Expresso tradicional e leite vaporizado',
    price: 18.9,
    image: AuLatte,
    id: 'au-latte-ir8g',
    categories: ['standard', 'milky'],
  },
  {
    name: 'Capuccino',
    description:
      'Drink feito com canela com doses iguais de café, leite e creamy foam',
    price: 8.9,
    image: Capuccino,
    id: 'capuccino-918j',
    categories: ['standard', 'milky'],
  },
  {
    name: 'Cubano',
    description: 'Drink gelado de café Expresso, menta, rum e creme de leite',
    price: 7.56,
    image: Cubano,
    id: 'cuban-e77d',
    categories: ['special', 'alcoholic', 'iced'],
  },
  {
    name: 'Expresso',
    description: 'Café tradicional feito com grãos puros',
    price: 9.99,
    image: Expresso,
    id: 'expresso-8e7h',
    categories: ['standard'],
  },
  {
    name: 'Expresso cremoso',
    description: 'Expresso tradicional com creme',
    price: 12.67,
    image: ExpressoCream,
    id: 'expresso-cream-2f8c',
    categories: ['standard'],
  },
  {
    name: 'Havaiano',
    description: 'Drink doce de café com leite de coco',
    price: 12.65,
    image: Havaiano,
    id: 'havaian-2r9l',
    categories: ['special'],
  },
  {
    name: 'Chocolate quente',
    description: 'Drink feito com chocolate dissolvido em leite quente e café',
    price: 3.45,
    image: HotChocolatte,
    id: 'hpt-choco-me7j',
    categories: ['special', 'milky'],
  },
  {
    name: 'Café gelado',
    description: 'Drink feito com Expresso gelado e gelo',
    price: 7.5,
    image: IcedCoffee,
    id: 'iced-coffee-o28d',
    categories: ['standard', 'iced'],
  },
  {
    name: 'Irlanda',
    description: 'Drink baseado em café, whisky irlandês, açúcar e chantilly',
    price: 14.6,
    image: Ireland,
    id: 'ireland-39rj',
    categories: ['special', 'alcoholic'],
  },
  {
    name: 'Leite',
    description: 'Uma dose de Expresso com duas de leite',
    price: 8.99,
    image: Latte,
    id: 'latte-o28s',
    categories: ['standard', 'milky'],
  },
  {
    name: 'Macchiatto',
    description: 'Expresso misturado com água quente',
    price: 16.75,
    image: Macchiatto,
    id: 'macchiatto-3r99',
    categories: ['standard', 'milky'],
  },
  {
    name: 'Mochaccino',
    description: 'Expresso com chocolate e pouco leite',
    price: 11.89,
    image: Mochaccino,
    id: 'mochaccino-928r',
    categories: ['standard', 'milky'],
  },
]

export type Coffee = typeof coffees[0]
