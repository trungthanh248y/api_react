import React, { Component } from 'react';
import './../../App.css';

class ProductItem extends Component {
    render() {
        return (
            <tr>
                <td>1</td>
                <td>1</td>
                <td>Iphon 6</td>
                <td>500</td>
                <td>
                    <span className="label label-warning">
                        Còn Hàng
                        </span>
                </td>
                <button type="button" class="btn btn-success mr-10">
                    Sửa
                </button>
                <button type="button" class="btn btn-danger">
                    Xóa
                </button>
                <td></td>
            </tr>
        );
    }
}

export default ProductItem;
