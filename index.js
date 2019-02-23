const Koa = require('koa');
const next = require('next');
const Router = require('koa-router');
const session = require('koa-session');
const logger = require('koa-logger');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();

const server = new Koa();
const router = new Router();
server.keys = ['im a newer secret', 'i like turtle'];

router
    .get('/api/auth', async ctx => {
        const isLogin = ctx.session.isLogin || false;
        ctx.body = { status: 200, data: isLogin };
    })
    .get('/api/login', async ctx => {
        ctx.session.user = {};
        ctx.session.isLogin = true;
        ctx.body = { status: 200, data: true };
    })
    .get('/api/logout', async ctx => {
        ctx.session = null;
        ctx.body = { status: 200, data: true };
    });

router.get('*', async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.res.statusCode = 200;
    ctx.respond = false;
});

server
    .use(logger())
    .use(session({ key: 'abc12345' }, server))
    .use(router.routes())
    .use(router.allowedMethods());

+ async function start() {
    await app.prepare();
    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`)
    });
}();