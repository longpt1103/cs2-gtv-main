import {
  FILTER_GAMEMODE,
  HIDE_FILTER_GAMEMODE,
  COMING_SOON_FILTER_GAMEMODE,
} from 'utils/constants'

const generateItem = (items = []) => {
  return items.map((item) => {
    const mode = item.modePath
    return {
      ...item,
      hide: HIDE_FILTER_GAMEMODE.includes(mode),
      comingSoon: COMING_SOON_FILTER_GAMEMODE.includes(mode),
    }
  })
}

export const roomCard = generateItem([
  {
    id: 1,
    type: 'new',
    src: 'https://cdn-data.gtvplus.vn/cs2/mode/image/5X5.webp',
    mode: 'Competitive 5v5',
    modePath: FILTER_GAMEMODE.fivevsfive,
    players: 245,
    srcVideo: 'https://cdn-data.gtvplus.vn/cs2/mode/video/5X5.mp4',
  },
  {
    id: 2,
    src: '/assets/images/card/room_2.png',
    mode: 'Deathmatch',
    modePath: FILTER_GAMEMODE.deathmatch,
    players: 28,
  },
  {
    id: 3,
    type: 'coming-soon',
    src: 'https://cdn-data.gtvplus.vn/cs2/mode/image/DUELS2X2.webp',
    mode: 'Retake',
    modePath: FILTER_GAMEMODE.retake,
    players: 0,
    srcVideo: 'https://cdn-data.gtvplus.vn/cs2/mode/video/DUELS2X2.mp4',
  },
  {
    id: 4,
    type: 'coming-soon',
    src: 'https://cdn-data.gtvplus.vn/cs2/mode/image/BHOP.webp',
    mode: 'Bhop',
    modePath: FILTER_GAMEMODE.bhop,
    players: 0,
    srcVideo: 'https://cdn-data.gtvplus.vn/cs2/mode/video/BHOP.mp4',
  },
  {
    id: 5,
    type: 'coming-soon',
    src: 'https://cdn-data.gtvplus.vn/cs2/mode/image/ARENA.webp',
    mode: 'Arena',
    modePath: FILTER_GAMEMODE.arena,
    players: 130,
    srcVideo: 'https://cdn-data.gtvplus.vn/cs2/mode/video/ARENA.mp4',
  },
  {
    id: 6,
    src: '/assets/images/card/room_6.png',
    mode: 'Clutch',
    modePath: FILTER_GAMEMODE.clutch,
    players: 10,
  },
  {
    id: 7,
    type: 'hot',
    src: '/assets/images/card/room_7.png',
    mode: 'Zoombie escape',
    modePath: FILTER_GAMEMODE.zombieEscape,
    players: 64,
  },
])
export const filterHideRoomCard = roomCard.filter((room) => !room.hide)

export const buttons = generateItem([
  {
    id: 7,
    text: 'Competitive 5v5',
    modePath: FILTER_GAMEMODE.fivevsfive,
    activeClass: 'btn-active',
  },
  {
    id: 1,
    text: 'Deathmatch',
    modePath: FILTER_GAMEMODE.deathmatch,
  },
  {
    id: 2,
    text: 'Retake',
    modePath: FILTER_GAMEMODE.retake,
  },
  {
    id: 3,
    text: 'Bhop',
    modePath: FILTER_GAMEMODE.bhop,
  },
  {
    id: 4,
    text: 'Arena',
    modePath: FILTER_GAMEMODE.arena,
  },
  {
    id: 5,
    text: 'Clutch',
    modePath: FILTER_GAMEMODE.clutch,
  },
  {
    id: 6,
    text: 'Zoombie escape',
    modePath: FILTER_GAMEMODE.zombieEscape,
  },
])
export const filterHideButtons = buttons.filter((room) => !room.hide)

export const tableData = [
  {
    id: `tableData_1`,
    server: '[CS2]PREMIUM.LALEAGANE.RO SKINS | KNIFE | WS | FREE VIP | RANKED',
    ip: '148.113.20.98',
    port: 27066,
    ping: 20,
    player: '28/64',
    map: 'de_mirage',
    connect: true,
  },
  {
    id: `tableData_2`,
    server: '[CS2] IMPERIA-PROJECT.RU - AWP | !KNIFE !SKINS',
    ip: '37.230.210.76',
    port: 27015,
    ping: 20,
    player: '28/64',
    map: 'de_inferno',
    connect: false,
  },
  {
    id: `tableData_3`,
    server: 'H.Y.D.R.A | PUBLIC #1 | SKINS & KNIFE',
    ip: '91.211.118.108',
    port: 27025,
    ping: 60,
    player: '28/64',
    map: 'de_inferno',
    connect: false,
  },
]
