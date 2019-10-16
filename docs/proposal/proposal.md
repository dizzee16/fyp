# School of Computing &mdash; Year 4 Project Proposal Form

## SECTION A

|                     |                   |
|---------------------|-------------------|
|Project Title:       | Juke    |
|Student 1 Name:      | Jack O'Reilly     |
|Student 1 ID:        | 16406312          |
|Student 2 Name:      | John Thornes      |
|Student 2 ID:        | 16433976          |
|Project Supervisor:  | Dr. Donal Fitzpatrick          |

## SECTION B
### Introduction

Our proposed project is to develop an entertainment system which members of the public can interact with to listen to music of their choice in any venue with the system installed. This entertainment system contains information on the music played in certain venues and also aims to provide a recommender system that can allow users to find venues tailored to their liking.

### Outline

Our proposed project is an online jukebox system. The system will be composed of a mobile app/webapp which the users select their music from, a client system in the venue which will be responsible for receiving the incoming requests, queuing them appropriately and playing the correct songs, and finally an analytics site which will allow users to see trends in music consumption based on location.

### Background

This idea originated from going to pubs/venues on a night out and the frustrations of using a physical jukebox to choose songs. 
We figured that the process could be streamlined by having a “jukebox in your hand” in the form of an app. We think more people would rather choose songs and pay from their phone rather than having to get up and use a physical jukebox.
We also came up with this idea when we realised there are not many ways currently to categorise venues based on their music played. It can simplify the process of deciding where to go by pigeonholing venues into what genres of music are played, as well as other aspects such as the size of the venue, cheap drinks, distance to city centre etc. The webapp will have a map mode where using google maps will allow you to search for a venue and get a brief overview of the music being played there.


### Achievements

The project aims to provide modernisation to jukeboxes in venues around the country. We want to remove all friction from the act of playing songs on a jukebox. We also want the data from these jukeboxes to be made available to relevant marketing experts so they can see what music is trending, and where in the country it's trending. The users will be the patrons of the venues, the venue owners and marketing experts.

### Justification

We hope this system will be useful in pubs, nightclubs, function rooms, hotels up and down the country. We also hope the trend data from the systems would be useful to labels when trying to predict the fast-moving music market. We also hope to use QR code functionality to allow easy access to the web app in each of the venues supported. Our users will be able to search venues by location and see which venues are playing music to suit their taste.

### Programming language(s)

* Angular JS
* Python
* Java
* Django
* XML


### Programming tools / Tech stack

* Spotify for Developers for Song data
* Google APIs for Account logins/signups
* Google Maps support for venues.
* Firebase hosting


### Hardware

We are prioritsing a webapp for mobile, but if time allows we will work on a native mobile app.

### Learning Challenges

Our biggest challenge will be understanding how recommender systems work. We believe that a combination of Collaborative Filtering and Content-Based Filtering will be difficult to implement but will ultimately yield extremely valuable results for us. This will involve us using nearest neighbour algorithms, as well as a model of each user’s preference and their history using the recommender system.

### Breakdown of work

#### John Thornes
John will focus on the Collaborative Filtering aspect of our recommender system. He will examine which algorithms we would need to use in order to implement this system. He will also handle the front-end for the individual pages for the venue. John will also handle the queueing system for songs, to make sure songs will have a good chance of being played if there is a large queue of songs.

#### Jack O’Reilly
Jack will focus on Content Filtering for the recommender system. He will also work on front-end aspects of the web app including music display, login display, home screen and searching. Jack will also work on the music rating system and map functionality. He will also work on the venue side system.

