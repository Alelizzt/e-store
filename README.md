
# E-Store
Just a simple web store to remember ReactJS things

<p>

_This project was thinked to run on remote server, the commands here works fine on local but keep in mind that you will be shared the project on all your local network._

</p>
<br/>

Initialize project by fist time
~~~bash
yarn install
~~~


Start testing database

~~~bash
yarn json-server -H 0.0.0.0 --watch src/db/db.json
~~~

Start web project
~~~bash
yarn dev --host
~~~
