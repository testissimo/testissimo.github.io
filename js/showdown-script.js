function convertMDtoHTML(MDdata) {
        target = document.getElementById('MDgenerateDiv'),
        converter = new showdown.Converter({
            extensions : [...bindings],
            noHeaderId : true
        }),
        html = converter.makeHtml(MDdata);
      
      target.innerHTML = html;
  }

  function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
      result = xmlhttp.responseText;
    }
    return result;
  }


const classMap = {
    ul: 'list-group',
    li: 'list-group-item'
}
const bindings = Object.keys(classMap).map(key => ({
        type: 'output',
        regex: new RegExp(`<${key}>`, 'g'),
        replace: `<${key} class="${classMap[key]}">`
}));
