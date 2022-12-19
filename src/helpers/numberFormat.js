function numberFormat(number) {
    return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
}

//or use this function:
// function numberFormat(number) {
//     return number.toLocaleString('nl-NL');
// }

export default numberFormat;