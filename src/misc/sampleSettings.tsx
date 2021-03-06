/**
 * Product being edited
 * @type {{general: {id: number, title: string}, pages: {id: number, title: string, pages: {id: number, title: string}[]}|{id: number, title: string, pages: {id: number, title: string}|{id: number, title: string, body: string}[]}|{id: number, title: string}[]}}
 */
export const editingProduct = {
        general: {
            id: 123,
            title: 'Sample product'
        },
        pages: [
            {
                id: 1,
                title: 'Page number 1',
                pages: [
                    {
                        id: 11,
                        title: 'Page One One'
                    },
                    {
                        id: 12,
                        title: 'Page One Two'
                    },
                ]
            },
            {
                id: 2,
                title: 'Page 2',
                pages: [
                    {id: 21,
                        title: 'Page Two A'
                    },
                    {
                        id: 22,
                        title: 'Page Two B',
                        body: 'Lorem Ipsum Yeah',
                        pages: [
                            {id: 221,
                                title: 'Page Two B One'
                            },
                            {
                                id: 222,
                                title: 'Page Two B Two'
                            }
                        ]
                    },
                    {
                        id: 23,
                        title: 'Página 2c'
                    }
                ]
            },
            {
                id: 3,
                title: 'Page 3',
                pages: [
                    {
                        id: 31,
                        title: 'Page Two A'
                    },
                    {
                        id: 32,
                        title: 'Page Two B',
                        body: 'Lorem Ipsum Yeah',
                        pages: [
                            {
                                id: 321,
                                title: 'Page Two B One'
                            },
                            {
                                id: 322,
                                title: 'Page Two B Two'
                            }
                        ]
                    },
                    {
                        id: 33,
                        title: 'Página 2c'
                    }
                ]
            },
            {
                id: 4,
                title: 'Page 4'
            },
            {
                id: 5,
                title: 'Page 5'
            },
            {
                id: 6,
                title: 'Page 6'
            },
            {
                id: 7,
                title: 'Page 7'
            }
        ]
    }
