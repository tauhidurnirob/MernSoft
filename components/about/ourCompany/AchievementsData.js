import {v4 as uuidv4} from 'uuid'

export const AchievementsData = [
  {
    id: uuidv4(),
    imageUrl: '/achievementsIcon/achieve-one.png',
    title: 'Increased Response Time',
    className: 'card-container h-full bg-white m-3 p-5 rounded-xl mt-52'
  },
  {
    id: uuidv4(),
    imageUrl: '/achievementsIcon/achieve-two.png',
    title: ' Client Retention Rate',
    className: 'card-container h-full bg-white m-3 p-5 rounded-xl mt-36'
  },
  {
    id: uuidv4(),
    imageUrl: '/achievementsIcon/achieve-three.png',
    title: 'Faster Delivery Time',
    className: 'card-container h-full bg-white m-3 p-5 rounded-xl mt-24'
  },
  {
    id: uuidv4(),
    imageUrl: '/achievementsIcon/achieve-four.png',
    title: 'Increased Client Satisfaction',
    className: 'card-container h-full bg-white m-3 p-3 mr-0 rounded-xl'
  }
]
