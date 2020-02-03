import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import callApi from './../../utils/apiCaller';
class ProductListPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading : true,
            products: [],
        };
    }

    // componentDidMount() {
    //     // console.log('componentDidMount');
    //     callApi('products', 'GET', null).then(res => {
    //         this.setState({
    //             products: res.data,
    //         })
    //     })
    // }

    onDelete = (id) => {
        callApi(`products/${id}`, 'DELETE', null);
        // var { products } = this.state;//Nếu server là localhost thì ta cần tự load lại, còn nếu server trên mạng thì nó đã tự động load lại rồi
        // callApi(`products/${id}`, 'DELETE', null).then(res => {
        //     if(res.status === 200) {//OK
        //         var index = this.findIndex(products, id);
        //         if(index !== -1) {
        //             products.splice(index, 1);
        //             this.setState({
        //                 products : products
        //             });
        //         }
        //     }
        // });
    }

    // findIndex = (products, id) => {
    //     var result = -1;
    //     products.forEach((product, index) => {
    //         if(product.id === id) {
    //             result = index;
    //         }
    //     });
    //     return result;
    // }

    render() {
        // var { products } = this.props;
        // console.log('render');
        callApi('products', 'GET', null).then(res => {
            this.setState({
                loading: false,
                products: res.data,
            })
        })

        if(this.state.loading) {
            return (
                <img src="https://hoangnguyen.edu.vn/wp-content/uploads/2016/09/webdeptoilam.com_wp-content_uploads_2016_07_loading.gif"
                class="img-responsive center-block"></img>
            );
        }

        var { products } = this.state;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <ProductList>
                    {this.showProducts(products)}
                </ProductList>

                <Link to='/product/add' className="btn btn-info mb-10">
                    Thêm sản phẩm
                </Link>
            </div>
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

export default connect(mapStateToProps, null)(ProductListPage);
