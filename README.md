# Tracky - Expenses Tracker

### Fully responsive frontend web application to keep track of your expenses.

This application allows you to keep track of your expenses, and it has a variety of categories to choose for each. Adding more or removing existing ones is quick and easy.

The graph displays monthly expenditures for a quick visual scan. Expenses are filtered by year or by month, in descending order. Each item can easily be changed or removed.

The form has validation and will display what it expects if provided with the invalid data. By default this application uses 2022 and 2023 only but can be changed accordingly.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Link](#link)
- [My process](#my-process)
  - [Main stack](#main-stack)
  - [Secondary stack](#secondary-stack)
  - [What I learned](#what-i-learned)
  - [Available Scripts](#available-scripts)

## Overview

### The challenge

Users should be able to:

- [x] View an optimal layout on any device
- [x] Add an expense
- [x] Edit an expense
- [x] Delete an expense
- [x] Filter expenses by year
- [x] Filter expenses by month

### Link

Live web application: [Tracky - Expenses Tracker](https://nicopuegher.github.io/expenses-tracker/)

## My process

### Main stack

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

### Secondary stack

`Heroicons` `Headless UI` `Day.js` `Lodash` `PropTypes` `Prettier`

### What I learned

- Setup and deploy a **_Vite_** project.
- Style with **_Tailwind CSS_** and create a custom theme.
- Format dates using **_Day.js_**.
- Use **_Material UI_** and **_Headless UI_** components with my custom theme.
- Pass props to children inside reusable component in **_React.js_**:

```js
import React, from 'react';
import PropTypes from 'prop-types';

function Modal({ onCloseModal, children }) {
  const customChildren = React.cloneElement(children, {
    onCloseModal: () => onCloseModal(),
  });

  return (
	<div>{customChildren}></div>
  );
}

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
```

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all necessary external modules the project depends on.

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
