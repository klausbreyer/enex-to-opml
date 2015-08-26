#!/usr/bin/env node
var striptags = require('striptags');
var htmlToText = require('html-to-text');
var xml2js = require('xml2js');
var fs = require('fs');
var parser = new xml2js.Parser();


var _cleanContent = function (note, prefix) {
    var Entities = require('html-entities').XmlEntities;
    entities = new Entities();
    note = htmlToText.fromString(note.toString()) || '';
    note = note.replace(new RegExp('\0', 'g'), '');
    note = entities.encode(note);
    if (prefix && note.length > 0) {
        note = prefix + '"' + note + '"';
    };
    if (prefix === '_note=') {
        note = note.replace(new RegExp('\n', 'g'), '&#10;');
    };
    return note;
}

var main = function(arg) {
    console.log('Processing: ' + arg)

    var last = arg.substring(arg.lastIndexOf("."));
    var first = arg.substring(0, arg.lastIndexOf("."));

    if (last !== '.enex') {
        console.log('Error: ' + arg + ' is not a .enex file.');
        return;
    };

    var output = '';
    fs.readFile(process.env.PWD + '/' + arg, function(err, data) {
        if (err) {
             console.log('Error: ' + arg + ' does not exist.');
        } else {
           parser.parseString(data, function (err, result) {
            var notes = result['en-export'].note;
            for (var i = notes.length - 1; i >= 0; i--) {
                var note = notes[i];
                output += '<outline text="' + _cleanContent(note.title) + '" ' + _cleanContent(note.content, '_note=') + ' />\n';
            };
        });

           output = '<?xml version="1.0"?>\n<opml version="2.0">\n<head>\n<ownerEmail>you@example.org</ownerEmail>\n</head>\n<body>\n<outline text="' + arg + '" >' + output + '</outline></body>\n</opml>';
           fs.writeFile(first + '.opml', output, function (err) {
            if (err) throw err;
            console.log('Saved: ' + first + '.opml');
        });
       }
       
   });
}

process.argv.forEach(function (val, index, array) {
    if (index < 2) {
        return;
    };
    main(val);
});
