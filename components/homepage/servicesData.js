import { v4 as uuidv4 } from 'uuid'

export const Services = [
    {
        id: uuidv4(),
        imageUrl: '/servicesIcons/strategyNews.png',
        title: 'Product Strategy',
        description:
            'Our experts devise effective product strategies that are in sync with your business needs.',
    },
    {
        id: uuidv4(),
        imageUrl: '/servicesIcons/maintenance.png',
        title: 'Engineer',
        description:
            'We follow some critical steps in our UI/UX design and development process. ',
    },
    {
        id: uuidv4(),
        imageUrl: '/servicesIcons/account.png',
        title: 'Scale',
        description:
            'By harnessing the power of DevOps, our developers enhance the work standards.',
    },
]
