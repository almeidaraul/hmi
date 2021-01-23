# How Much Insulin
Tells you how much insulin to take based on current blood glucose reading and grams of carbs you're about to ingest, according to a user configuration for each time of the day.

**Sections of this file:**
* Current state
* Info for non-diabetics
* Contributing

![Screenshot of the home screen](https://github.com/almeidaraul/hmi/blob/master/hmi_screenshot.png?raw=true)

## Current state
We have an MVP but it's not published anywhere. This has fixed intervals (configuration for every two hour interval in a day) and some usability issues. I'm working on a redesign which should not be complicated, but here are the main ideas I look forward to implementing:
* Special introduction the first time someone opens the app
* Take user to the settings page (instead of home) if it's the first time using the app
* Undo button on the settings page
* Lock settings (press an "edit" button or something to enable editing)
* Variable time intervals
* Export settings to a PDF
* "About" button at the settings tab which shows short information about the app (version etc), a link to this github page, and a list of the contributors

As soon as I'm finished with the redesign concept I'll update this to enable other people to help.

## Info for non-diabetics
Peple of Type 1 Diabetes must usually count carbs. This means estimating how many grams of carbohydrates there are in a meal and then taking insulin to prevent blood sugar spikes after eating. Besides carbs, it's also important to take into account current blood glucose, taking more insulin for high blood sugars and less insulin for low blood sugars.

The amount of insulin one takes to deal with blood glucose and carbohydrates varies from person to person and from situation to situation (after exercising most people take less insulin than usual), but the calculation is the same:

**I = BG÷SF + CH÷IC**

Where **I** is the amount of insulin to take, **BG** is the measured blood glucose, **SF** is the sensibility factor (as in, sensibility of BG to insulin), **CH** is the amount of carbohydrates about to be ingested and finally **IC** is an insulin-carbohydrate ratio.

So, all of this so you could understand what this app does. The user saves the SF and IC values for different times of the day, and then whenever they're about to take insulin they input current BG and CH, thus receiving as output the amount of insulin. The configuration phase takes about 2 minutes the first time you install the app, then a couple of seconds every time your doctor tells you to change something. The main function, which is calculating how much insulin to take and is to be used about 6-12 times a day, takes about 5 seconds.


## Contributing
Check **CONTRIBUTING.md** for more information.
