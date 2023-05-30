import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';

export const navlinks = [
  {
    name: 'Home',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'Create A Campaign',
    imgUrl: createCampaign,
    link: '/create-campaign',
  },
  {
    name: 'View Profile',
    imgUrl: profile,
    link: '/profile',
  },
];