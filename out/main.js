function display(x) {
    var str = "";
    for (var j = 1; j < x + 1; j++) {
        str = "";
        for (var k = 1; k <= x - j; k++) {
            str += " ";
        }
        for (var k = x - j + 1; k <= x + j - 1; k++) {
            str += "*";
        }
        console.log(str);
    }
}
var line = 3;
display(line);
//# sourceMappingURL=main.js.map