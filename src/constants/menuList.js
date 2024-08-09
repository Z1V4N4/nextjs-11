export const headerIcons = ['/svg/envelope.svg', '/svg/notification_dot.svg'];

export const menuList = [
  {
    label: 'Home',
    key: 'home',
    path: '/',
  },
  {
    label: 'Customer Handling',
    key: 'ch',
  },
  {
    label: 'Data Entry Completion',
    key: 'dec',
  },
  {
    label: 'Simulation',
    key: 'simulation',
  },
  {
    label: 'Report',
    key: 'report',
    children: [
      {
        label: 'Report Pengajuan Preterm',
        key: 'rpp'
      },
      {
        label: 'Report Pengajuan Reschedule',
        key: 'rpr'
      },
      {
        label: 'Report Generate All Document',
        key: 'rgad'
      },
      {
        label: 'Report Monitoring Nego',
        key: 'rmn'
      },
    ],
  },
];

export const headerMenu = [
  {
    label: 'Edit Account',
    key: 'ea',
    path: '',
  },
  {
    label: 'Settings',
    key: 'settings',
    path: '',
  },
];
