# I Need A Movie

## Description

This is my first React application created for my Nucamp class. 
The app utilizes API Dojo's IMDB API to fetch movie titles; either a random title or one based on a user's genres of interest.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Usage

For Random movie:
Fetch request to IMDB API is made to obtain a random movie from their "Most Popular" list of movies.
API response provides a list of 100 movies, which a single random title is then selected.
Information including movie title, genre, rating and plot summary are included in the output.

For Genre based movie:
Genres are selected and added to an array (userArray). 
To avoid unnecessary requests to IMDB API, a random genre is selected from userArray which is then included in the fetch request. 
A list of movies based on the above random genre are included in the API response and a random movie title is selected. 
Information including movie title, genre, rating and plot summary are included in the output.

## Roadmap

Future updates include:
* API requests to streaming platforms to show availability.
* Ability to rate movies to implement within user interests.
* User accounts to allow for saving of genres of interest as well as liked/disliked movies. 
* Option to find similar movies to the recommended movie; ie "More like this."


