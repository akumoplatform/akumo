var properties = properties('hosts.properties', true);
Console.log(properties);

Console.log(properties.getProperty('host.localhost'));
