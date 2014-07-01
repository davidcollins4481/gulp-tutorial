Gulp Tutorial
=============

The first step - installing Gulp. Gulp is built on top of NodeJS. Make sure
node is installed:

```shell
$ which node
```

if you don't see anything from there, it's pretty convenient to use a package
like [Homebrew](http://brew.sh/). After installed you can type:

```shell
$ brew install nodejs
```

once that's done, install gulp globally:

```shell
$ sudo npm install -g gulp
```

Now install gulp locally:
```shell
$ npm install --save-dev gulp
```

Now we want to install our Gulp plugins for whatever tasks we are going to
perform:

```shell
$ npm install gulp-jshint gulp-concat gulp-uglify gulp-rename --save-dev
```

Here we are using:

- **gulp-jshint** - javascript code quality checker
- **gulp-concat** - concatenates (combines) files
- **gulp-uglify** - minify javascript files (renames variables, removes
    unnecessary spaces, line-endings, etc)
- **gulp-rename** - rename a file

In short, what we want to do is take all (or most) of the javascript files
included in our HTML and combine it into a single file, compress it, and
place it in a separate file.

You'll now see a directory called:

`node_modules`

in your working directory. All of the nodejs modules for gulp are installed
here and (assuming) the directions were followed, only here.

(Here I'm going to use [Bower](http://bower.io/) package manager to install
javascript libraries like jQuery, etc. Ask me if you want more info on this.)

See `gulpfile.js`

There are separate actions that can be run. Notice these:

```javascript
gulp.task('lint', function() {
    ...
```

```javascript
gulp.task('scripts', function() {
    ...
```

```javascript
gulp.task('watch', function() {
    ....
```

These actions can be called from the command-line like so:
```shell
$ gulp lint
```

Gulp defines a default task:
```javascript
gulp.task('default', ['lint', 'scripts', 'watch']);
```

This combines all three of our tasks and allows them to be called by simply
calling:

```shell
$ gulp
```

from the command-line. You can easily write javascript in your separate source
files and have the compressed, combined file build happen automatically in the
background when you write to your file. The `watch` task here does just that.

In this example, just running `gulp`, however, will take of this for you. It will
validate your javascript, combine/compress it, and watch for more changes.

All of this can also be done in with CSS and SASS/LESS. More on that some other
time.

NOTE: this is easiest to set up when starting from scratch. When trying to use
this in an existing project with a lot of source files in place already, you
may find it convenient to avoid the `lint` step. Just combine/compress and use
watch to rebuild.  
