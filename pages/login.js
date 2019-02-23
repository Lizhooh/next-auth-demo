import React from 'react';
import axios from 'axios';
import Router from 'next/router';

export default () => (
    <div>
        <h3>登录页</h3>
        <div>
            <button onClick={e => {
                axios.get('http://127.0.0.1:3000/api/login').then(res => {
                    if (res.data.status === 200) {
                        Router.replace('/user');
                    }
                });
            }}>点击登录</button>
        </div>
    </div>
);