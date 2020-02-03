var initialState = [
    {
        id : 1,
        name : 'Ipad',
        price : 5000,
        status : true,
    },
    {
        id : 2,
        name : 'Iphone 6',
        price : 5000,
        status : false,
    },
    {
        id : 3,
        name : 'Iphone XS MAX',
        price : 5000,
        status : true,
    },
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}

export default products;