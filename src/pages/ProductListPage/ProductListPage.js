import React, { Component, Fragment } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Action from './../../actions/index';
class ProductListPage extends Component {

    componentDidMount() {
        this.props.fetchAllProducts();
    }

    onDelete = (id) => {
        this.props.onDeleteProduct(id);
    }

    render() {
        // console.log('render');

        //Trong tg load thì sẽ chạy một icon đợi

        // callApi('products', 'GET', null).then(res => {
        //     this.setState({
        //         loading: false,
        //         products: res.data,
        //     })
        // })

        // if(this.state.loading) {
        //     return (
        //         <img src="https://hoangnguyen.edu.vn/wp-content/uploads/2016/09/webdeptoilam.com_wp-content_uploads_2016_07_loading.gif"
        //         class="img-responsive center-block"></img>
        //     );
        // }

        var { products } = this.props;
        return (
            <Fragment>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <Link to='/product/add' className="btn btn-info mb-10">
                        Thêm sản phẩm
                    </Link>

                    <ProductList>
                        {this.showProducts(products)}
                    </ProductList>
                </div>
            </Fragment>
        );
    }
    showProducts = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        onDelete = {this.onDelete}
                        key={index}
                        product={product}
                        index={index}
                    />
                );
            })
        }
        return result;
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts : () => {
            dispatch(Action.actFetchProductsRequest());
        },
        onDeleteProduct : (id) => {
            dispatch(Action.actDeleteProductRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
