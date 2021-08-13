# React App 

The react app is served by the php code hosted in [reactApp.php](reactApp.php)

The client side react code lives under [reactApp/](reactApp/)

To enable React app development simply kick off the ```yarn watch``` task in [reactApp/](reactApp/). This will then be accessible from http://localhost/reactApp.php

Please note: I have not figured out how to hot reload js code updates yet as the react code is served by a php page residing in a docker container. So for the time being, we need to reload the page to see updates. 