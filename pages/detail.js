import React from 'react';
import Link from 'next/link';
import AuthHoc from '../containers/hoc/auth';

export default AuthHoc(() => (
    <div>
       <h3>详细页</h3>
       <p>
           <Link href='/'><a>首页</a></Link>
       </p>
    </div>
));