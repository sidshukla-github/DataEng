create or replace view `pure-night-216804.movie.mv_view` as
(
WITH subdt1  AS (
SELECT year, GNR, sum(rating) Total_Rating
FROM (SELECT name, id, year, split(genre,'|') as GNR_ARR
  from `pure-night-216804.movie.movies` 
   ),
UNNEST(GNR_ARR) GNR
 join `pure-night-216804.movie.ratings` as RT
on id = RT.movie_id
group by GNR, year
order by year, sum(rating) desc
)
select year, GNR, max(Total_Rating) TR from subdt1  
group by year, GNR
order by year desc
)