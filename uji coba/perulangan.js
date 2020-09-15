document.write("------------------<pre>");
//contoh1
for (y = 1; y < 10; y++) {
    for (x = 1; x < 10; x++) {
        if (y == x) {
            document.write("*");
        } else {
            document.write(" ");
        }
    }
    document.write("<br>");
}
document.write('--------------<br>')
//contoh 2
for (y = 1; y < 10; y++) {
    for (x = 1; x < 10; x++) {
        if (y + x == 10) {
            document.write("*");
        } else {
            document.write(" ");
        }
    }
    document.write("<br>");
}
document.write('--------------<br>')
//contoh 3
for (y = 1; y < 10; y++) {
    for (x = 1; x < 10; x++) {
        if (y == x || y + x == 10) {
            document.write("*");
        } else {
            document.write(" ");
        }
    }
    document.write("<br>");
}
document.write('--------------<br>')
//contoh 4
for (y = 1; y < 10; y++) {
    for (x = 1; x < 10; x++) {
        if (y == x || y + x == 10 || y == 5 || x == 5) {
            document.write("*");
        } else {
            document.write(" ");
        }
    }
    document.write("<br>");
}

document.write('--------------<br>')
//contoh 5
for (y = 1; y < 10; y++) {
    for (x = 1; x < 10; x++) {
        if (y > x) {
            document.write("*");
        } else {
            document.write(" ");
        }
    }
    document.write("<br>");
}

document.write('--------------<br>')
//contoh 6
for (y = 1; y < 10; y++) {
    for (x = 1; x < 10; x++) {
        if (y < x) {
            document.write("*");
        } else {
            document.write(" ");
        }
    }
    document.write("<br>");
}

document.write("------------------</pre>");