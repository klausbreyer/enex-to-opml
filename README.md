# enex-to-opml
An executable npm module for converting .enex (Evernote Export Files) to .ompl (e.g. Workflowy)


## Installation
You can install this executable using [npm](http://github.com/isaacs/npm):

    npm install enex-to-opml -g

Please make sure, that you install it with the flag -g so that the executable will be globally available. You can use it then in every directory. 

## Example
Go to the directory with your .enex files and call this script with as much arguments as you want. 
    cd /path/to/your/evernote-exports/
    enex-to-ompl export.enex notebook2.enex

You will then receive the files export.opml and notebook2.opml in the same directory.


## License (MIT)

Copyright (c) 2010-2012 Rasmus Andersson <http://hunch.se/>

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

