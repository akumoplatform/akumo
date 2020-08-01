### Properties ext

Properties extension is a simple way to load a <i>'.properties'</i> file onto scripts.
<p>
To put it to work globaly just save the <i>'properties.js'</i> file on <i>'/ext'</i> directory on <b>AKUMO_HOME</b>.

Then you could run the code below:

```javascript

var properties = properties('hosts.properties', true);
Console.log(properties);

Console.log(properties.getProperty('host.localhost'));

```
These simple example suppose that exists a properties file called 'hosts.properties' on 'user.dir', that means on directory where you are
executing the akumo.exe. 

<p>
After loaded the file use the method 'getProperty(key)' to retrieve a value from the properties file.

