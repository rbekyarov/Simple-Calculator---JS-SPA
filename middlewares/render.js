import { render } from '../node_modules/lit-html/lit-html.js'


const body = document.getElementById('mybody');

function ctxRender(mybody) {
    render(mybody, body)
}

export function addRender(ctx, next) {
    ctx.render = ctxRender;
    next();
}