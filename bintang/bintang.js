var s = '';
for (var i = 10; i > 0; i--) {
    for (var k = 0; k < i; k++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);