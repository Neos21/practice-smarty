const fs     = require('node:fs');
const Smarty = require('smarty.js');

Smarty.prototype.getTemplate = fileName => fs.readFileSync(`./${fileName}`, 'utf-8');

const tplText = fs.readFileSync('./main.tpl', 'utf-8');
const compiled = new Smarty(tplText);
const result = compiled.fetch({
  who: 'World'
});

console.log(result);
