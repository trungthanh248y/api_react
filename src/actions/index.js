import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actFetchProductsRequest = () => {
    return (distpatch) => {
        return callApi('products', 'GET', null).then(res => {
            distpatch(actFetchProducts(res.data));
        });
    }
}

export const actFetchProducts = (products) => {
    return {
        type : Types.FETCH_PRODUCTS,
        products,
    }
}

export const actDeleteProductRequest = (id) => {
    return (distpatch) => {
        return callApi(`'products/${id}', 'DELETE', null`).then(res => {
            distpatch(actDeleteProduct(id));
        })
    }
}

export const actDeleteProduct = (id) => {
    return {
        type : Types.DELETE_PRODUCT,
        id,
    }
}

export const actAddProductRequest = (product) => {
    return distpatch => {
        return callApi('products', 'POST', product).then(res => {
            distpatch(actAddProduct(res.data));
        });
    }
}

export const actAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product,
    }
}

export const actGetProductRequest = (id) => {
    return distpatch => {
        return callApi(`products/${id}`, 'GET', null).then(res => {
            distpatch(actGetProduct(res.data));
        })
    }
}

export const actGetProduct = (product) => {
    return {
        type : Types.EDIT_PRODUCT,
        product,
    }
}

export const actUpdateProductRequest = (product) => {
    return distpatch => {
        return callApi(`products/${product.id}`, 'PUT', product).then(res => {
            distpatch(actUpdateProduct(res.data));
        });
    }
}

export const actUpdateProduct = (product) => {
    return {
        type : Types.UPDATE_PRODUCT,
        product,
    }
}
