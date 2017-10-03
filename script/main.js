/**
 * Created by linGo on 2017/10/1.
 */

import style from '../style/style.less';

import React from 'react';
import ReactDom from 'react-dom';

import UserList from './jsx/userList';

ReactDom.render(
    <UserList />,
    document.getElementById('userList')
)
