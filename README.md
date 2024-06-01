## ID: 11020103
# React Native Assignment 3

## Overview
This project is a React Native application designed to replicate a provided UI mockup. The application includes various components and features such as task lists and categories, styled to match the UI design closely.

## Features
- **Core Components Used:**
  - View
  - Text
  - ScrollView
  - TextInput
  - Stylesheet
  - Button
  - FlatList
  - Image

- **Categories:**
  - Fitness
  - Gardening
  - Programming
  - Music
  - Cooking
  - Travel
  - Maintenance
  - Shopping

- **Tasks:**
  - 15 ongoing tasks displayed in a scrollable list.

## Components

### App.js
The main entry point of the application. It imports and renders the main sections of the app, including the header, search bar, categories, and task sections.

### Header
A custom component that displays a greeting and user icon.

### SearchBar
A custom component that provides a search input and a filter button.

### CategorySection
A custom component that displays a horizontal scrollable list of categories.

### TaskSection
A custom component that displays a list of tasks using FlatList.

## Dependencies
- @fortawesome/fontawesome-svg-core: ^6.5.2
- @fortawesome/free-brands-svg-icons: ^6.5.2
- @fortawesome/free-regular-svg-icons: ^6.5.2
- @fortawesome/free-solid-svg-icons: ^6.5.2
- @fortawesome/react-native-fontawesome: ^0.3.2
- expo: ~51.0.9
- expo-status-bar: ~1.12.1
- react: 18.2.0
- react-native: 0.74.1
- react-native-svg: ^15.3.0

## Screenshots
<img width="380px" src="https://i.ibb.co/VWps1pF/Screenshot-20240601-183454.jpg"/>

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Miqael-UG/rn-assignment3-11020103.git
    ```
2. Navigate to the project directory:
    ```sh
    cd rn-assignment3-11020103
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Run the application:
    ```sh
    npx react-native run-android
    ```
    or
    ```sh
    npx react-native run-ios
    ```
