# Travel Tracker Website

Welcome to the Travel Tracker website! This application allows users to mark countries they have visited and maintains a record of their travels in a database.

## How It Works

- **FrontEnd:** The front-end interface captures user input where users can enter the name of a country they have visited.
- **BackEnd:** The back-end processes this input by querying a database to find the country code corresponding to the entered country name. Once found, it sends this information back to the front-end for marking.
- **Database:** The application utilizes a PostgreSQL database to store and manage the list of visited countries securely.

## Features

- **User Input:** Simple input interface for adding visited countries.
- **Country Code Lookup:** Efficient backend lookup ensures accurate marking of visited countries.
- **Database Management:** Dedicated database ensures data persistence and reliability.

## Technologies Used

- **FrontEnd:** HTML, CSS, JavaScript (jQuery)
- **BackEnd:** Node.js, Express.js
- **Database:** PostgreSQL

## Getting Started

1. Clone this repository.
2. As the database is not uploaded you can't access the database as of now. I will upload later.
3. Install dependencies using `npm install`.
4. Set up your PostgreSQL database and adjust the connection settings in `server.js`.
5. Run the server using `node server.js` or `npm start`.
6. Access the application at `http://localhost:3000` in your browser.

## Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests to contribute new features, enhancements, or bug fixes.
