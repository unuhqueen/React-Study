var memberArray = ['egoin', 'graphittie', 'leezche'];
console.log("memberArray[2]", memberArray[2]);

var memberObject = {
    manager: 'egoing',
    developer: 'graphittie',
    designer: 'leezhce'
}
memberObject.designer = 'leezche'
console.log("memberObject.designer", memberObject.designer);
console.log("memberObject['designer']", memberObject['designer']);
delete memberObject.manager
console.log('after delete meberObject.manager', memberObject.manager)