function fromJSONToHTMLTable(input) {
    let mapper = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
    }
    let ss = JSON.parse(input)
    let result = '<table>\n'
    // console.log(result);
    let header = '<tr>'
    for (let col in ss[0]) {
        for (let el in mapper) {
            let regex = el
            let re = new RegExp(regex, 'g')
            col = String(col).replace(re, mapper[el])
        }
        header += '<th>' + `${escape(col)}` + '</th>'
    }
    header += '</tr>'
    // console.log("    " + header );
    result += "    " + header + '\n'
    tbRow = '<tr>'
    for (let row of ss) {
        for (let el of Object.values(row)) {
            // for(let els of mapper){
            //     el.replace(els, mapper.els)
            // }
            for (let els in mapper) {
            let regex = els
            let re = new RegExp(regex, 'g')
            el = String(el).replace(re, mapper[els])
            }
            tbRow += '<td>' + `${escape(el)}` + '</td>'
        }
        tbRow += '</tr>'
        result += "    " + tbRow + '\n'
        // console.log("    " + tbRow);
        tbRow = '<tr>'
    }
    result += '</table>'
    //console.log('</table>');
    console.log(result);

}

fromJSONToHTMLTable(`[{"Name&&&&":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score>":6}]`
)