
export default [{
        path: '/',
        name: 'index',
        component: () =>
            import('@/pages/Index'),
    },
    {
        path: '*',
        name: 'error_404',
        redirect: '/',
        meta: {},
    }
]