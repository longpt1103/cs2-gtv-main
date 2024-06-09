import { FILTER_GAMEMODE } from 'utils/constants'

export const roomCard = [
  {
    id: 1,
    src: '/assets/images/card/room_1.png',
    mode: 'Competitive 5v5',
    modePath: FILTER_GAMEMODE.fivevsfive,
    players: 245,
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
    type: 'new',
    src: '/assets/images/card/room_3.png',
    mode: 'Retake',
    modePath: FILTER_GAMEMODE.retake,
    players: 0,
  },
  {
    id: 4,
    type: 'coming-soon',
    src: '/assets/images/card/room_4.png',
    mode: 'Bhop',
    modePath: FILTER_GAMEMODE.bhop,
    players: 0,
  },
  {
    id: 5,
    src: '/assets/images/card/room_5.png',
    mode: 'Arena',
    modePath: FILTER_GAMEMODE.arena,
    players: 130,
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
]

export const buttons = [
  {
    id: 7,
    text: 'Competitive 5v5',
    mode: FILTER_GAMEMODE.fivevsfive,
    activeClass: 'btn-active',
  },
  { id: 1, text: 'Deathmatch', mode: FILTER_GAMEMODE.deathmatch },
  { id: 2, text: 'Retake', mode: FILTER_GAMEMODE.retake },
  { id: 3, text: 'Bhop', mode: FILTER_GAMEMODE.bhop },
  { id: 4, text: 'Arena', mode: FILTER_GAMEMODE.arena },
  { id: 5, text: 'Clutch', mode: FILTER_GAMEMODE.clutch },
  { id: 6, text: 'Zoombie escape', mode: FILTER_GAMEMODE.zombieEscape },
]

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
