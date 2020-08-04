/**
 * This function is responseable for loading a properties file.
 * 
 * @param {string} path the file path.
 * @param {boolean} relative searching by a relative path if true.
 */
function properties(path, relative) {
    try {
        if (relative) {
            const pathRel = java.lang.System.getProperty('user.dir');
            path = pathRel + java.io.File.separator + path;

        }
        var file = new java.io.File(path);
        var properties = new java.util.Properties();
        var is = new java.io.FileInputStream(file);
        
        properties.load(is);
        return properties;

    } catch (error) {
        Console.log('error: function properties(path, relative):' + error);

    }
    return null;

}
