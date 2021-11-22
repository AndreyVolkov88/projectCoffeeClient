<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/roufurrohim/Coffee-Shop-with-React">
    <img src="img/logo.png" alt="Logo" width="200" height="80">
  </a>

  <h3 align="center">Coffee Shop</h3>

  <p align="center">
    Coffee Shop is a simple point of sale web application.
    <br />
    <a href="https://github.com/roufurrohim/Coffee-Shop-with-React"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/roufurrohim/Coffee-Shop-with-React">Report Bug</a>
    ·
    <a href="https://github.com/roufurrohim/Coffee-Shop-with-React">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This Coffee Shop app is built using the ReactJS framework,
with the addition of reactstrap for responsive display, and react-router-dom for page switching management and also for data management on the frontend using redux. This website has 2 versions for User and for Admin.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [React.js](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [React-Redux](https://react-redux.js.org/)
* [React-Router-Dom](https://reactrouter.com/web/guides/quick-start)
* [Reactstrap](https://svelte.dev/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get & Clone a API Key at [Backend for this project ](https://github.com/roufurrohim/tester)
2. Clone the repo
   ```sh
   git clone https://github.com/roufurrohim/Coffee-Shop-with-React
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create your API in file `.env`
   ```.env
   REACT_APP_API_URL= 'YOUR API URL'
   ```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [x] Clone repository [backend](https://github.com/roufurrohim/tester)
- [x] Add file environtment
- [ ] Run Backend with `node app.js`
- [ ] Run this project with `npm start`
- [ ] Sign Up

<p align="right">(<a href="#top">back to top</a>)</p>


Below is a sample screenshot of the App Coffee Shop website and mobile display for users.

Website Home | Mobile Home
----------------------|---------------------
![](img/web/landingBeforeLogin.png)| ![](img/mobileUser/landingMobile.png)


Website Register | Mobile Register
----------------------|--------------------
![image](img/web/signUp.png) | ![image](img/mobileUser/register.png)

Website Login | Mobile Login
----------------------|--------------------
![image](img/web/login.png)|![image](img/mobileUser/login.png)


Website Products | Mobile Products
-------------------|----------------------
![image](img/web/products1.png)|![image](img/mobileUser/products1.png)
![image](img/web/products2.png)|![image](img/mobileUser/products2.png)



Website Details Products |Mobile Details Products
-------------------------|-----------------------
![image](img/web/deatils1.png)|![image](img/mobileUser/details1.png)
![image](img/web/deatils2.png)|![image](img/mobileUser/details2.png)


Website Cart|Mobile Cart
--------------------|----------------------
![image](img/web/cart1.png)|![image](img/mobileUser/cart1.png)
![image](img/web/cart2.png)|![image](img/mobileUser/cart2.png)



Website History|Mobile History
-------------------------|--------------------
![image](img/web/history1.png)|![image](img/mobileUser/history.png)
![image](img/web/history2.png)|![image](img/mobileUser/detailsHistory.png)

>Ketika view details di click maka ada pop up untuk details transaction


Website Profile|Mobile Profile
-------------------|--------------------
![image](img/web/profile1.png)|![image](img/mobileUser/profile1.png)
![image](img/web/profile2.png)|![image](img/mobileUser/profile2.png)


>Dibawah ini adalah sample screenshoot dari App Coffee Shop tampilan website dan mobile untuk Admin:

Website Home|Website Products
---------------------|--------------------
![image](img/webAdmin/landingAdmin.png)|![image](img/webAdmin/products.png)

>Di page Products ini ada fitur Tambah Products

Details Products|Details Products
---------------------|--------------------
![image](img/webAdmin/detailsProducts.png)|![image](img/webAdmin/edit.png)

>di Page ini ada fitur edit products dan delete products
