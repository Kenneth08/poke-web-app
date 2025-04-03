# Pokémon Web App

## Description
This is a responsive frontend application built using React.js and PokeAPI. The app fetches Pokémon data and provides a user-friendly interface to explore Pokémon types, view Pokémon details, and search for specific Pokémon.

## Features

### 1. Pokémon Type List Page
- Fetches all Pokémon types (e.g., Water, Fire, Fairy, etc.) from the API endpoint `https://pokeapi.co/api/v2/type`.
- Displays the list of Pokémon types as clickable cards/buttons.
- When a user clicks on a type, it navigates to a new page (`/types/:typeName`) that lists the Pokémon of that type.

### 2. Pokémon Grid Page (`/types/:typeName`)
- Fetches all Pokémon for the selected type and displays them in a responsive grid of 20 Pokémon per page.
- Implements pagination to allow navigation through all available Pokémon for that type.
- When the user hovers over a Pokémon card, it displays the Pokémon's name and image dynamically.
- When the user clicks on a Pokémon card, a modal opens displaying:
  - Pokémon's name.
  - An image of the Pokémon.
  - At least two abilities of the Pokémon.

### 3. Responsive Design
- Ensures the application looks and works well on all screen sizes, including desktops, tablets, and smartphones.
- Uses visually appealing styles, leveraging animations, hover effects, and polished UI/UX design principles.
