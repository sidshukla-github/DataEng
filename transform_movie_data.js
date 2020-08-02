/**
 * A transform which adds a field to the incoming data.
 * @param {string} inJson
 * @return {string} outJson
 */


    function transform(line) {
        var values = line.split('::');
        //console.log(values);
        
        var obj = new Object();
        obj.id = values[0];
        var n = values[1].length;
        
        obj.name = values[1].substring(0,n-6);
        obj.year  = values[1].substring(n-5,n-1);
        obj.genre = values[2];
        var jsonString = JSON.stringify(obj);
        
        return jsonString;
        }
