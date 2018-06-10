# Local Weather

## Description
The purpose of creating this app is to practice web development skills by using Jquery, Boostrap, Promise, APIs, and other web development components. This app is designed check local weather.

## Screenshot

![Webpage](https://raw.githubusercontent.com/jeffreychen2016/local-weather/master/imgs/Screen%20Shot%202018-06-09%20at%2010.53.06%20PM.png
)

![Webpage](https://raw.githubusercontent.com/jeffreychen2016/local-weather/master/imgs/Screen%20Shot%202018-06-09%20at%2010.53.13%20PM.png
)

1. Upon arriving at the homepage, you will should see the login page. You can log into this app if you already have an account. If you do not have an account yet, you can click on the registration link above sign-in button. You will be directed to the registration page.


![Webpage](https://raw.githubusercontent.com/jeffreychen2016/local-weather/master/imgs/Screen%20Shot%202018-06-09%20at%206.39.46%20PM.png
)

2. Once you successfully log into the app, you will see all of your saved weather widgets.

![Webpage](https://raw.githubusercontent.com/jeffreychen2016/local-weather/master/imgs/Screen%20Shot%202018-06-09%20at%206.36.16%20PM.png
)

![Webpage](https://raw.githubusercontent.com/jeffreychen2016/local-weather/master/imgs/Screen%20Shot%202018-06-09%20at%206.36.28%20PM.png
)

3. You can nagivate to search page by clicking on the "search" link on the top right corner of the nav bar. You can search the weather by zip code. If an invalid zip code is provided, the app will display an error. If the zip code you provide is valid, then a weather widget will show up to display the weather for current date.

![Webpage](https://raw.githubusercontent.com/jeffreychen2016/local-weather/master/imgs/Screen%20Shot%202018-06-09%20at%206.37.14%20PM.png
)

4. On the buttom of the first weather widget, you have options to see the weather for next 3 days or next 5 days, or save the weather widget. If you click on the "Next 3 Days" or "Next 5 Days" button, the weather widgets for next 3 or 5 days will be displayed. If you click on "Save" button, the weather widget will be saved into database, and you can review it on "My Weather" page.

![Webpage](https://raw.githubusercontent.com/jeffreychen2016/local-weather/master/imgs/Screen%20Shot%202018-06-09%20at%206.39.53%20PM.png
)

5. Once you save the weather widgets, you can review them in the "My Weather" page. For your saved weather widgets, you have option to delete them from database. In addition, if you think the weather is scary, you can mark it as "Scary" by clicking on the "Scary" button, and the background of the widget will turn into red. You can also un-mark the weather.

![Webpage](https://raw.githubusercontent.com/jeffreychen2016/local-weather/master/imgs/Screen%20Shot%202018-06-09%20at%209.55.19%20PM.png
)

6. If you are no longer using this app, you can log yourself out by clicking the "Log Out" on the nav bar. It will bring you back to the log in page.

## How to Run
1. Clone down this repo and CD into project.
2. Install the http-server plugin via npm.
3. CD into the lib directory and run npm install via command line.
4. In the lib directory run the command grunt.
5. Open apiKeys.json.example file in db direcotry, add your local wather API key in "apiKey": "",
You can apply for free local weather API keys here: (https://openweathermap.org/api).
6. in the same file, also add your firebase API key and configuration info
You can obtain free API keys from firebase official site: (https://console.firebase.google.com/).
7. Saved the apiKeys.json.example file and rename it apiKeys.json.
8. CD to the root of the directory and type hs to start the local http-server.
9. The terminal will give you a URL, such as http://127.0.0.1:8081, enter that address into your web browser.

## Contributors
[Jeffrey Chen](https://github.com/jeffreychen2016)




