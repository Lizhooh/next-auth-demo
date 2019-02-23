import React, { Component } from 'react';
import axios from 'axios';
import Router from 'next/router';
import Link from 'next/link';
import AuthHoc from '../containers/hoc/auth';

export default AuthHoc(class User extends Component {
    static async getInitialProps() {
        return { name: 'abc' };
    }
    render() {
        console.log(this.props.name);
        return (
            <div>
                <h3>用户页（{this.props.isLogin ? '已登录' : '未登录'}）</h3>
                <div>
                    <button onClick={e => {
                        axios.get('http://127.0.0.1:3000/api/logout').then(res => {
                            if (res.data.status === 200) {
                                Router.replace('/login');
                            }
                        });
                    }}>点击退出登录</button>
                </div>

                <p>
                    <Link href='/detail'><a>详细页</a></Link>
                </p>
            </div>
        );
    }
});

