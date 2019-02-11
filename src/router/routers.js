
export default [{
        path: '/',
        name: 'index',
        // redirect: PAGE_API.home.path,
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