import React from 'react'
import Link from 'next/link';

export default () => (
    <div>
        <h3>欢迎来到这里</h3>
        <div>
            <li>
                <Link href='/login'><a>登录</a></Link>
            </li>
            <li>
                <Link href='/user'><a>用户</a></Link>
            </li>
        </div>
    </div>
);
