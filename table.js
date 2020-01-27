function addTable() {
    var rowsCount = $("[data-ui='count-rows']").val();
    var cellCount = $("[data-ui='count-cells']").val();
    var table = document.getElementById('myTable');

    var data = '';

    if (rowsCount !== '' && cellCount !== '') {
        for (var i = 0; i < rowsCount; i++) {
            var row = table.insertRow(i);
            var randomString;
            var count;

            for (var j = 0; j < cellCount; j++) {
                var cell = row.insertCell(j);
                cell.setAttribute("onclick", 'getPosition('+ i +', '+ j +')');
                randomString = getRandom(1);
                data += randomString;
                cell.innerHTML = randomString;
            }
        }

        count = getFindCount(data);
    }

    getCountTable(count);
}

function getPosition(i, j) {
    alert('Current cell located in position ' + i + ' index in row which located in ' + j + ' index in cell');
}

function getCountTable(data) {
    var countTable = $('[data-ui="count-table"]');
    var element;

    for (var i = 0; i < data.length; i++) {
        element = data[i].split("-");
        countTable.append('<tr><td>Letter: <b>' + element[0] + '</b> occurs <b>' + element[1] + '</b> times</td></tr>')
    }
}

function getRandom(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;

    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

function getFindCount(data) {
    var characters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var count;
    var countLetter = [];

    for (var i = 0; i < characters.length; i++) {
        count = charСount(data, characters[i]);

        if (count > 0) {
            countLetter.push(characters[i] + '-' + count);
        }
    }

    return countLetter;
}

function charСount(str, letter) {
    var letterСount = 0;

    for (var position = 0; position < str.length; position++) {
        if (str.charAt(position) == letter) {
            letterСount += 1;
        }
    }

    return letterСount;
}