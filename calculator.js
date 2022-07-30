import { html } from './node_modules/lit-html/lit-html.js';
import { renders } from './renders.js';
import { result } from './result.js';
import { reset } from './reset.js';


const calcTamplate = html `
<div class="title">Simple Calculator</div>
    <table>
        <tr>
            <td colspan="3"><input type="text" id="result" /></td>
            <td><input type="button" value="c"/> </td>
        </tr>
        <tr>
        
            <td><input type="button" value="1"/> </td>
            <td><input type="button" value="2"/> </td>
            <td><input type="button" value="3"/> </td>
            <td><input type="button" value="/"/> </td>
        </tr>
        <tr>
            <td><input type="button" value="4"/> </td>
            <td><input type="button" value="5"/> </td>
            <td><input type="button" value="6"/> </td>
            <td><input type="button" value="-"/> </td>
        </tr>
        <tr>
            <td><input type="button" value="7"/> </td>
            <td><input type="button" value="8"/> </td>
            <td><input type="button" value="9"/> </td>
            <td><input type="button" value="+"/> </td>
        </tr>
        <tr>
            <td><input type="button" value="."/> </td>
            <td><input type="button" value="0"/> </td>
            <td><input type="button" value="="/> </td>
            <td><input type="button" value="*"/> </td>
        </tr>
    </table>
`

export function calcPage(ctx) {
    ctx.render(calcTamplate)

    let buttons = document.querySelector('table');

    buttons.addEventListener('click', rend);

    function rend(e) {
        if (e.target.value == '1') {
            renders('1');
        }
        if (e.target.value == '2') {
            renders('2');
        }
        if (e.target.value == '3') {
            renders('3');
        }
        if (e.target.value == '4') {
            renders('4');
        }
        if (e.target.value == '5') {
            renders('5');
        }
        if (e.target.value == '6') {
            renders('6');
        }
        if (e.target.value == '7') {
            renders('7');
        }
        if (e.target.value == '8') {
            renders('8');
        }
        if (e.target.value == '9') {
            renders('9');
        }
        if (e.target.value == '0') {
            renders('0');
        }
        if (e.target.value == '.') {
            renders('.');
        }
        if (e.target.value == '=') {
            result();
        }
        if (e.target.value == '*') {
            renders('*');
        }
        if (e.target.value == '-') {
            renders('-');
        }
        if (e.target.value == '+') {
            renders('+');
        }
        if (e.target.value == '/') {
            renders('/');
        }
        if (e.target.value == 'c') {
            reset();
        }
    }
}