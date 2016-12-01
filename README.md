# Overtrack

[Production link][production]

[production]: https://www.overtrack.win

## Summary

Overtrack was created to allow League of Legends to easily fetch their own and others game stats. It uses the LoL API alongside
custom queries to provide players with relevant data.

##Technology Stack

- React/Redux for frontend rendering and logic
- Ruby on Rails 
- Redis to work as a cache for Rails and speed up response time
- AJAX to communicate with LoL API

## Website Overview

- Overtrack counts with two main pages. Rankings and Profile page

### Rankings

- Rankings are shown on a table like display with infinite pagination
- Unlike other sites, Overtrack shows ranking position for all 5 differente Ranking types provided by LoL
- Each row shows a name that links to the player's profile picture and it also computes the player's win ratio
- Rankings are updated every 30 minutes

![leaderboard.png](https://res.cloudinary.com/dsetpdsls/image/upload/v1480611243/Screen_Shot_2016-12-01_at_7.21.54_AM_ov98k4.png)

### Profile Page

- Player specific data is shown here
- Displays a collection of recent matches played. For each one it shows each item, participants for both team and participant's
data summary
- Matches are shown upto one month in the past. Every 24 hours matches older than a month are dropped.
- Match list is updated every 30 minutes
