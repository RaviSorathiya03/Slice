import {
    AutomationDuoToneWhite,
    HomeDuoToneWhite,
    RocketDuoToneWhite,
    SettingsDuoToneWhite,
  } from '@/icons'
  import { v4 as uuid } from 'uuid'
  
  export type FieldProps = {
    label: string
    id: string
  }
  
  type SideBarProps = {
    icon: React.ReactNode
  } & FieldProps
  
  export const SIDEBAR_MENU: SideBarProps[] = [
    {
      id: uuid(),
      label: 'home',
      icon: <HomeDuoToneWhite />,
    },
    {
      id: uuid(),
      label: 'automations',
      icon: <AutomationDuoToneWhite />,
    },
    {
      id: uuid(),
      label: 'integrations',
      icon: <RocketDuoToneWhite />,
    },
    {
      id: uuid(),
      label: 'settings',
      icon: <SettingsDuoToneWhite />,
    },
  ]

  export const plans = [
    {
      name: 'Free Plan',
      description: 'Perfect for getting started',
      price: '$0',
      features: [
        'Boost engagement with target responses',
        'Automate comment replies to enhance audience interaction',
        'Turn followers into customers with targeted messaging',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Smart AI Plan',
      description: 'Advanced features for power users',
      price: '$99',
      features: [
        'All features from Free Plan',
        'AI-powered response generation',
        'Advanced analytics and insights',
        'Priority customer support',
        'Custom branding options',
      ],
      cta: 'Upgrade Now',
    },
  ]