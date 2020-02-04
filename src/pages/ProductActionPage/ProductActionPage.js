import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../../App.css'
import { connect } from 'react-redux';
import * as Action from './../../actions/index';

class ProductActionPage extends Component {
    constructor(props){
        super(props);
        this.state={
            id : '',
            txtName : '',
            txtPrice : '',
            chkbStatus : '',
        }
    }

    componentDidMount(){
        var { match } = this.props;
        if(match) {
            const id = match.params.id;
            this.props.onEditProduct(id);

            // callApi(`products/${id}`, 'GET', null).then(res => {
            //     var data = res.data;
            //     this.setState({
            //         id: data.id,
            //         txtName: data.name,
            //         txtPrice: data.price,
            //         chkbStatus: data.status,
            //     })
            // });
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.itemEditing) {
            var { itemEditing } = nextProps;
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtPrice: itemEditing.price,
                chkbStatus: itemEditing.status,
            });
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value,
        })
    }

    onSave = (e) => {
        e.preventDefault();
        var {id, txtName, txtPrice, chkbStatus} = this.state;
        var {history} = this.props;
        var product = {
            id : id,
            name: txtName,
            price: txtPrice,
            status: chkbStatus,
        }
        if(id){ //update
            this.props.onUpdateProduct(product);
            history.goBack();//Chuyển lại trang trước đó
            //Hoặc
            // history.push("/");//Chỉ ddingj quay trở về trang chủ
        }else{
            this.props.onAddProduct(product);
            history.goBack();
            //history.goBack();//Chuyển lại trang trước đó
            //Hoặc
            // history.push("/");//Chỉ ddingj quay trở về trang chủ
        }
    }

    render() {
        var {txtName, txtPrice, chkbStatus} = this.state;

        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label >Tên Sản phẩm</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="txtName"
                            value={txtName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label >Giá Sản phẩm</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            name="txtPrice"
                            value={txtPrice}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label >Trạng thái</label>
                    </div>
                    <div className="checkbox">
                    <label>
                        <input 
                            type="checkbox" 
                            value="" 
                            name="chkbStatus"
                            value={chkbStatus}
                            onChange={this.onChange}
                            checked={chkbStatus}
                        />
                        Còn Hàng
                    </label>
            </div>
                    <button type="submit" className="btn btn-primary mr-10" >
                        Lưu lại
                    </button>
                    
                    <Link to="/product-list" className="btn btn-danger mr-10" >
                        Trở lại
                    </Link>
                </form>
            </div>
                );
            }
        }

const mapStateToProps = (state) => {
    return {
        itemEditing: state.itemEditing,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct : (product) => {
            dispatch(Action.actAddProductRequest(product));
        },
        onEditProduct : (id) => {
            dispatch(Action.actGetProductRequest(id));
        },
        onUpdateProduct : (product) => {
            dispatch(Action.actUpdateProductRequest(product));
        }
    }
}
        
export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
