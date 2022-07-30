export function result() {
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}