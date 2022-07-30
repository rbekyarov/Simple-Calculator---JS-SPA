import page from './node_modules/page/page.mjs';
import { addRender } from './middlewares/render.js'
import { calcPage } from './calculator.js';

page(addRender)
page('/', calcPage);
page.start();