# Rails-Stimulus-Hotwire

> Fun with some new [Rails related](https://hotwire.dev/) techs: tailwindcss-rails, hotwire-rails, stimulus-rails

Project is just for fun, don't pay attention for bussiness logic. Some notes:

* Create/delete comment in realtime with Hotwire

* With Stimulus
*Feed with Hovercard, infinite scroll*  
*Type-ahead search*  
*Update todos from checkbox, filter todo*  

## Use Docker  
1.Clone and build docker  
```
git clone -b git clone -b dockerizing https://github.com/hungle00/rails-hotwire-stimulus.git  

docker-compose build
```  

2.Create the database and run the migrations:  
```
docker-compose run --rm web bin/rails db:create  
docker-compose run --rm web bin/rails db:migrate  
docker-compose run --rm web bin/rails db:seed  
```  

3.Run the app:  
```
docker-compose up 
```