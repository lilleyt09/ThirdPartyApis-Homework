# ThirdPartyApis-Homework
For this work calendar, I had difficulty recalling the entered data from local storage, despite the fact the it was saving correctly.

The script.js file contains a multitude of variables: one for local storage for each hour in the 7am-6pm work day, as well as one to assign ids to the variables.  I used .val to attempt to retrieve the data from local storage for the corresponding hour, though this ultimately failed.

After the functions for the data are the functions for date and time.  The current date is displayed at the top of the page, while the hours are highlighted as follows: the present hour is red, upcoming hours are green, and hours gone by are grey.

The last function on the document handles saving user input to the local storage, which is successfully done despite not being able to recall that data upon reloading the page.