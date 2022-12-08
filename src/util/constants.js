import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
export const navLinks = [
  {
    id: 1,
    text: 'Add Beer',
    url: '/add',
    img: '/add.png'
  },
  {
    id: 2,
    text: 'Beer List',
    url: '/all',
    img: '/beermugicon.png'
  },
  {
    id: 3,
    text: 'Future Service',
    url: '/',
    img: '/beerIconBlack.png'
  },
]

export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com/',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.behance.net/',
    icon: <FaBehance />,
  },
]
