# enex-to-opml
An executable npm module for converting .enex (Evernote Export Files) to .ompl (e.g. Workflowy)


## Installation
You can install this executable using [npm](http://github.com/isaacs/npm):

    npm install enex-to-opml -g

Please make sure, that you install it with the flag -g so that the executable will be globally available. You can use it then in every directory. 

## Features
 * Every note title is going to be an workflowy item
 * Text and HTML (stripped) of notes becomes item description in workflowy

## Example
Go to the directory with your .enex files and call this script with as much arguments as you want:

    cd /path/to/your/evernote-exports/
    enex-to-ompl export.enex

You will then receive the files export.opml in the same directory.

##  Step by Step Screenshots
### 1. Export Notes from Evernote

![Export Evernote Notes](http://klaus-breyer.de/wp-content/uploads/2015/08/evernote.png)

### 2. Call the Script

    $ enex-to-opml example.enex
    Processing: example.enex
    Saved: example.opml
    $

### 3. Open .opml file in your favorite text editor and copy the content
![Open .opml file in your favorite text editor](http://klaus-breyer.de/wp-content/uploads/2015/08/code.png)

### 4. Paste XML directly into workflowy

![Paste XML directly into workflowy](http://klaus-breyer.de/wp-content/uploads/2015/08/workflowy.png)

## License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

