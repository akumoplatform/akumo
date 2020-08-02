### Properties ext

Properties extension is a simple way to load a <i>'.properties'</i> file onto scripts.
<p>
 To run the example we need create a project:
 
 ```bash
./akumo --create:propertiesExample

 ```
<p> 
Then create a properties file like this:

```bash
host.localhost=127.0.0.1
host.server1=127.0.0.2
host.server2=127.0.0.3

```
Named it file as 'hosts.properties' and save it on <i>root project directory</i>.
<p>
After that put the 'properties.js' file (on this 'src' extension dir) to '/ext' project's directory.
<p>
To put it to work globaly just save the <i>'properties.js'</i> file in <i>'/ext'</i> directory on <b>AKUMO_HOME</b>.
<p>

Now we need create the script file to run an example. So save the code bellow to a file named 'pexample.js' on '/script' project's directory:

```javascript

var properties = properties('hosts.properties', true);
Console.log(properties);

Console.log(properties.getProperty('host.localhost'));

```

To run, staying on root project's directory, execute this:

```bash
./akumo --input:./script/pexample.js

```

After loaded the file use the method 'getProperty(key)' to retrieve a value from the properties file.
<p>
The code above show us how is straight load a properties file and use it on Akumo.
<p>

To load a file passing a absolute path, just change the second parameter ('rel') to false:

```javascript

var properties = properties('/home/user/sam/hosts.properties', false);
Console.log(properties);

Console.log(properties.getProperty('host.localhost'));

```

<p>


