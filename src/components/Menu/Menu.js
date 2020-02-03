import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div className="navbar navbar-default">
                <nav className="navbar">
                    <a className="navbar-brand">CALL API</a>
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <a>Trang Chủ</a>
                        </li>
                        <li>
                            <a>Quản Lý Sản Phẩm</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Menu;
