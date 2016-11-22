# Overtrack

## Background

Overwatch users have very limited in-game statistics access to other player's details. This Single-Page Web Application will allow users to have access to not only their own game statistics, but also to all other players around the world. The stats will be shown in a much more readable and engaging format than that provided by the game itself.

## Technology Stack



- This site will utilize the next technologies:
- `D3.js` for displaying statistics
- `React-Redux` for frontend page structure
- `Ruby on Rails` for backend architecture
- `jQuery` for AJAX calls
- `JavaScript`
- `CSS3`
- `HTML5`

## Technical Challenges

- Blizzard does not offer an API for Overwatch
    - Utilize and optimized a third party API
    - Ensure data consistency
- Create tasks which automatically fetch API data and properly update site's server
- Dynamically creating graphs with player's data

## Wireframes
![splash](./docs/wireframes/splashPage.png)
![mainPage](./docs/wireframes/mainPage.png)
![profilePage](./docs/wireframes/profilePage.png)
![championAnalytics](./docs/wireframes/ChampionAnalytics.png)
![leaderboard](./docs/wireframes/leaderboard.png)
![statistics](./docs/wireframes/statistics.png)
![summaryDetail](./docs/wireframes/summaryDetail.png)

##Minimum Viable Product

- This site will count with at least the following features:
- Player statistics display in a personal profile page
- Leaderboards for all players with sorting filters
- Ability to search for a specific player

## Implementation Timeline

Phase 1: Main infrastructure (0.5)
- Set up React-Redux cycle
- Set up Rails to store players
- Successfully making AJAX requests to overwatch API

Phase 2: Build sharable components (0.5)
- Identify components which will be shared across the site
- Set up HTML and CSS for them

Phase 3: Profile page (2 days)
- Use fetched information to fill player content
- Utilize D3.js to dynamically build graphs and statistics

Phase 4: Leaderboards (2 days)
- Design algorithms to daily fetch player data and sort them by ranking
- Display leaderboard in website

Phase 5: Search Features (2 days)
- Allow users to search for players
- Implement filters to narrow down player results in leaderboards

Bonus features:

Phase 6: Twitch live stream links (1 day)
- Connect to Twitch's API and retrieve most popular player's channels
- Display channels on live stream page
