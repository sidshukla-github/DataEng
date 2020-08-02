with innerc  as
(
select max(TR) MX, year from `pure-night-216804.movie.mv_view` group by year order by year desc
)
select innerc.year, GNR from `pure-night-216804.movie.mv_view`, innerc
where innerc.year = `pure-night-216804.movie.mv_view`.year and innerc.MX = `pure-night-216804.movie.mv_view`.TR
;