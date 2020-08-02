/**
 * A transform which adds a field to the incoming data.
 * @param {string} inJson
 * @return {string} outJson
 */


    function transform(line) {
        var values = line.split('::');
        //console.log(values);
        
        var obj = new Object();
        obj.user_id = values[0];
        obj.movie_id = values[1];
        obj.rating  = values[2];
        obj.rating_timestamp = values[3];
        var jsonString = JSON.stringify(obj);
        
        return jsonString;
        }
