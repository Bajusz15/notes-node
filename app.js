console.log("Starting the app");

const fs = require("fs");
const _ = require("lodash");
const yargs = require('yargs');

const notes = require("./notes.js");

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};
const bodyOptions = {
    describe: 'body of note',
    demand: true,
    alias: 'b'
};

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;

var command = process.argv[2];
console.log('Command: ', command);

//console.log('Process',process.argv);
console.log('Yargs', argv);

if( command === "add"){
  var note = notes.addNote(argv.title, argv.body);
    if(note ===undefined){
        console.log("note title  was a duplicate");
    } else {
        console.log("note title was unique");
        notes.logNote(note);

    }
} else if (command ==="list") {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach((note) => notes.logNote(note));
}
 else if (command ==="remove") {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? "note was removed" : "note not found";
    console.log(message);
}else if (command ==="read") {
    var note = notes.getNote(argv.title);
    if(note){
        console.log('note found: ')
        notes.logNote(note);
    } else {
        console.log('note not found');
    }
}else {
    console.log("command not recognized");
}

/*

const os = require("os");
var res = notes.addNote();
console.log(res);
var result = notes.add(5, 6);
console.log("Result: "+result);
console.log(_.isString(true));
console.log(_.isString("Bajusz"));
var filteredArray = _.uniq(["Bajusz", 2, 2, 2, 3, 5, 3, "Bajusz"]);
console.log(filteredArray);
// var user = os.userInfo();
// console.log(user);
//
// fs.appendFileSync("greetings.txt", `Hello ${user.username}`);
*/
