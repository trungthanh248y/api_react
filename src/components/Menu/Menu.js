import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

const menus= [
    {
        name: 'Trang Chủ',
        to: '/',
        exact : true,
    },
    {
        name: 'Quản lý Sản Phẩm',
        to: '/product-list',
        exact : false,
    }
]

const MenuLink = ({lable, to, activeOnlyWhenExact}) => {
    return (
        <Route 
            path={to}
            exact={activeOnlyWhenExact}
            children={({match}) => {
                var active = match ? 'active' : '';
                return (
                    <li className={active}>
                        <Link to={to}>
                            {lable}
                        </Link>
                    </li>
                )
            }}
        />
    )
};

class Menu extends Component {
    render() {
        return (
            <div className="navbar navbar-default">
                <nav className="navbar">
                    <a className="navbar-brand">CALL API</a>
                    <ul className="nav navbar-nav">
                        {this.showMenus(menus)}
                    </ul>
                </nav>
            </div>
        );
    }
    showMenus = (menus) => {
        var result = null;
        if(menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink 
                        key={index}
                        lable={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact = {menu.exact}
                    />
                )
            })
        }
        return result;
    }
}

export default Menu;
