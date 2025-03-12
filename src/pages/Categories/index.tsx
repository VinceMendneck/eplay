import { ProductsList } from '../../components/ProductsList'
import { Game } from '../../models/Game'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

export const RPG: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo de survival horror...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 249,99'],
    image: resident
  },
  {
    id: 2,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação que se passa no mundo de Sanctuary, criado pela Blizzard...',
    title: 'Diablo IV',
    system: 'PS5',
    infos: ['15%', 'R$ 299,99'],
    image: diablo
  },
  {
    id: 3,
    category: 'Souls Like',
    description:
      'Star Wars Jedi: Fallen Order é um jogo de ação-aventura em terceira pessoa...',
    title: 'Star Wars Jedi: Fallen Order',
    system: 'Xbox',
    infos: ['20%', 'R$ 139,99'],
    image: starWars
  },
  {
    id: 4,
    category: 'Avetura',
    description:
      'Zelda: Breath of the Wild é um jogo eletrônico de ação-aventura desenvolvido pela...',
    title: 'Zelda: Breath of the Wild',
    system: 'Switch',
    infos: ['5%', 'R$ 199,99'],
    image: zelda
  }
]

const Acao: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo de survival horror...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['17/03/2025', 'R$ 199,99'],
    image: resident
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação que se passa no mundo de Sanctuary, criado pela Blizzard...',
    title: 'Diablo IV',
    system: 'PS5',
    infos: ['17/04/2025', 'R$ 199,99'],
    image: diablo
  },
  {
    id: 7,
    category: 'Souls Like',
    description:
      'Star Wars Jedi: Fallen Order é um jogo de ação-aventura em terceira pessoa...',
    title: 'Star Wars Jedi: Fallen Order',
    system: 'Xbox',
    infos: ['17/06/2025', 'R$ 199,99'],
    image: starWars
  },
  {
    id: 8,
    category: 'Avetura',
    description:
      'Zelda: Breath of the Wild é um jogo eletrônico de ação-aventura desenvolvido pela...',
    title: 'Zelda: Breath of the Wild',
    system: 'Switch',
    infos: ['17/05/2025', 'R$ 199,99'],
    image: zelda
  }
]
const Aventura: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo de survival horror...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['17/03/2025', 'R$ 199,99'],
    image: resident
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação que se passa no mundo de Sanctuary, criado pela Blizzard...',
    title: 'Diablo IV',
    system: 'PS5',
    infos: ['17/04/2025', 'R$ 199,99'],
    image: diablo
  },
  {
    id: 7,
    category: 'Souls Like',
    description:
      'Star Wars Jedi: Fallen Order é um jogo de ação-aventura em terceira pessoa...',
    title: 'Star Wars Jedi: Fallen Order',
    system: 'Xbox',
    infos: ['17/06/2025', 'R$ 199,99'],
    image: starWars
  },
  {
    id: 8,
    category: 'Avetura',
    description:
      'Zelda: Breath of the Wild é um jogo eletrônico de ação-aventura desenvolvido pela...',
    title: 'Zelda: Breath of the Wild',
    system: 'Switch',
    infos: ['17/05/2025', 'R$ 199,99'],
    image: zelda
  }
]
const FPS: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo de survival horror...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['17/03/2025', 'R$ 199,99'],
    image: resident
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação que se passa no mundo de Sanctuary, criado pela Blizzard...',
    title: 'Diablo IV',
    system: 'PS5',
    infos: ['17/04/2025', 'R$ 199,99'],
    image: diablo
  },
  {
    id: 7,
    category: 'Souls Like',
    description:
      'Star Wars Jedi: Fallen Order é um jogo de ação-aventura em terceira pessoa...',
    title: 'Star Wars Jedi: Fallen Order',
    system: 'Xbox',
    infos: ['17/06/2025', 'R$ 199,99'],
    image: starWars
  },
  {
    id: 8,
    category: 'Avetura',
    description:
      'Zelda: Breath of the Wild é um jogo eletrônico de ação-aventura desenvolvido pela...',
    title: 'Zelda: Breath of the Wild',
    system: 'Switch',
    infos: ['17/05/2025', 'R$ 199,99'],
    image: zelda
  }
]

export const Categories = () => (
  <>
    <ProductsList games={RPG} background="gray" title="RPG" />
    <ProductsList games={Acao} background="black" title="Ação" />
    <ProductsList games={Aventura} background="gray" title="Aventura" />
    <ProductsList games={FPS} background="black" title="FPS" />
  </>
)
