# Download

First of all we need download the binaries. Choose the file based on Operation System, nowadays we have three options: 
<p>
<b>
<a href="https://github.com/akumoplatform/akumo/raw/master/bin/mac/akumo-mac.tar.gz">Mac</a><br>
<a href="https://github.com/akumoplatform/akumo/raw/master/bin/linux/akumo-linux.tar.gz">Linux</a><br>
<a href="https://github.com/akumoplatform/akumo/raw/master/bin/win/akumo-win.zip">Windows</a><br>

</b>
</p>

After downloaded and decompress the file we strongly suggest create the $AKUMO_HOME variable pointing to the Akumo's installation directory, without that assignment some features won't work. Another recommendation is to put the $AKUMO_HOME on the <b>PATH</b> variable, doing it you'll be capable to call akumo executable file anywhere in your SO.

```bash
export AKUMO_HOME=/home/user/akumo-mac

#windows users
set AKUMO_HOME=C:\programs\akumo-win
```

```bash
PATH=$PATH:$AKUMO_HOME

#windows users
PATH=%PATH%;%AKUMO_HOME%
```

# Running scripts

We've four ways to run a script: <b>interactive</b>, <b>by file</b>, <b>by statement</b> and by project.
<p>

## Interactive

Just call the akumo executable file without any parameter:

```bash
> akumo 
> #akumo interactive mode
> console.log('hello world!')

```

Another example of running interactive way:

```javascript
#akumo interactive mode
function hello(msg){console.log(msg);};
let msg = 'hello world!';
hello(msg)

#after 'enter' the output should be seems as this
hello world!

```
Therefore, as we can see above, on interactive mode if the line ending with ";" the line content will be stored in the context of one interactive session. Otherwise to run the statements the line needed be ending without ";". <br>

To clean the interactive context on interactive mode:

```javascript
Context.clean()

```

To ending the interactive mode type: 

```bash
> exit

```

## By file

Firstly we'll create a simple script file with the content bellow:

```bash
console.log('hello world!');

```

Save this file as <b>.js</b>(eg. hello.js) extension.
<p>

To run the script open a terminal and navigate to your <AKUMO_HOME> directory:

```bash
cd <AKUMO_HOME>

```
Then execute:
<p>
<b><i>Window</i></b>

```bash
akumo.exe --input:C:\somefolder\hello.js
//or 
akumo.exe -i:"C:\somefolder with space\hello.js"
```
<b><i>Like Unix</i></b>

```bash
./akumo --input:"/Users/somefolder with space/hello.js"
//or
./akumo -i:/Users/somefolder/hello.js

```

The result it'll be just showing the message <i>hello world</i> on the console.
<p>

## By statement

Now we'll see how run a script by statement, therefore we need run the following command:

<b><i>Window</i></b>

```bash
akumo.exe console.log('hello world')

```

<b><i>Like Unix</i></b>

```bash
./akumo "console.log('hello world\!')"

```

## By Project

We can create an akumo's project it consist basically on structeds folders and configuration files. Through a project we can better organize ours project, creat shortcuts and running scripts easily.<br>   
To create a project:

```bash
# --create or -c
akumo -c:hello

```

The akumo.json file has the 'scripts' section where we can put shortcuts to either scripts files or statements.<br>
Navigate to the root project's directory. To run a statement type:


```bash
# --run or -r
akumo --run:version

```

To run a script file:


```bash
# --file or -f
akumo --file:example

```
To add new entries on script section we just run a statment using the Project object see bellow:

```
akumo "Project.script({'key':'example2','value':'example2.js'})"

```

To this new entry work we need create a new script file named: 'example2.js' on project's script directory and then call it:

```bash
# --file or -f
akumo --f:example2

```

### How debugging 

So debugging script's is easy like all the other features on the platform. Firstly create a file with the following content:

```javascript
let x = 7;
let y = 4;

console.log('starting script..');

function sum(v1, v2){
 console.log(v1 + v2);
}

debug();

console.log('scripting mode again...');

x = 19;

debug();

console.log('after second calling debug...');
```

Named it file as 'example.js' and then execute it:

```bash
./akumo -i:example.js

```

Did you realized that we are calling the debug calling the 'debug()' function? So cause it when you running the command above the application will enter on debug mode. Now to playing with debug mode type on the terminal:

```bash
> run:sum(x,y)      
> 11.0

```
To exit from debug mode:

```bash
> stop:

```

## Learn by examples

Scripts and examples see:

<a href="https://github.com/akumoplatform/tutorial">tutorial</a>









