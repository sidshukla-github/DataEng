# List most popular genres per year 

## Design approach

* Use GCP Dataflow predefined template (Cloud GCS to Bigquery) to load movie & ratings data into Bigquery
* Load the input .dat files in GCP Cloud Storage
* Define Movie and Ratings table schema in Big Query
* Define JS functions to facilitate transformation of data from file into JSON schema
* Execute Dataflow jobs to insert data into Bigquery for both movie and ratings
* Form query to list most popluar genres per year

## Important files -
* movietableschema.json - defines the DB table schema for movie table in bigquery. This schema JSON object is used by dataflow.
* ratingstableschema.json - defines the DB table schema for ratings table in bigquery. This schema JSON object is used by dataflow.
* transform_movie_data.js - transformation function to map current data that has been read to movie table JSON schema
* transform_rating_data.js - transformation function to map current data that has been read to rating table JSON schema
* createview.sql - sql to create a view in Bigquery. This was required in my approach, as i had to unnest the genres. As per the data, a single movie can belong to multiple genres, hence, i used unnest to flatten the data
* popular_genre_query.sql - final query that uses the above view to list most popular genres per year
