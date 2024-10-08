var startFrom = +prompt('From where do you want to start the table?')
var end = +prompt('Till where do you want to end the table?')
var tableOf = +prompt('Which table do you want?')

for(var i = 0 ; i<=100 ; i++){
    document.write(tableOf + ' x ' + i + ' = ' + tableOf*i + '<br>')
    
}