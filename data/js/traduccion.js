/**
    Author: Hristo Prashtakov
 */
function checkRgb() {
    var text = document.getElementById("textarea").value;
    var rgb = [];
    var rva = [];
    var checkText = '';
    rgb = text.split('\n');

    rgb.forEach(function (text, index) {
        check(text, rva, checkText);
    })

    var Texto = ""
    rva.forEach(function (text) {
        Texto = Texto + text+"\n"
    })
    document.getElementById('textarea').value = Texto


}

function check(text, rva, checkText) {
    var rxValidRgb = /([R][G][B]?[(]\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])(\s*,\s*((0\.[0-9]{1})|(1\.0)|(1)))?[)])/i
    if (rxValidRgb.test(text)) {
        checkText = text.toString().replace("RGB", "RVA");
        rva.push(checkText)
    } else {
        rva.push((text + " Error").split('\n'))

    }

}



