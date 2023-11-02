var fs = require('fs');

function base64encode(str) {
	return Buffer.from(str).toString('base64');
}
function base64decode(str) {
	return Buffer.from(str, 'base64').toString();
}
fs.readdir('./', (err, files) => {
    if (err) throw err;
    const moduleFiles = files.filter(file => file.endsWith('.sited'));
    console.log(moduleFiles);
    var data=moduleFiles.map(function(item){
        var href="sited://data?"+base64encode("https://fastly.jsdelivr.net/gh/ghostgzt/cdn@master/sited/"+item);
        return '<a href="'+href+'">'+item+'<href>'
    });
    console.log(data);
    fs.writeFileSync("./sited",data.join("\n"));
});