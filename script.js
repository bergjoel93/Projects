class RenderProjects {
  constructor(projects) {
    this.projects = projects;
    this.cardContainer = document.querySelector(".container");
    this.colors = [
      "--carousel-color-0",
      "--carousel-color-1",
      "--carousel-color-2",
      "--carousel-color-3",
    ];
    this.renderCards();
  }
  // Renders the cards by appending them to the project-card-container
  renderCards() {
    let degree = 0;
    let i = 0;
    Object.keys(this.projects).forEach((key) => {
      if (i > 3) i = 0;
      const project = this.projects[key];
      this.cardContainer.appendChild(this.generateCard(project, i));
      i++;
    });
  }

  generateCard(project, i) {
    let card = document.createElement("div");
    card.className = "project-card";
    card.style.backgroundColor = `var(${this.colors[i]})`;
    card.innerHTML = `
          <div class="project-card-img-container">
          <a href="${project.live}">
          <img src="${project.img}" alt="${project.name} Screenshot" class="project-screenshot">
          </a>
          
          </div>
  
          <div class="project-info-container">
          <div class="project-info-title-container">
              <h3 class="project-name">${project.name}</h3>
              <div class="project-links">
              <a class="view-code" href="${project.repo}"  target="_blank">
                  <img src="./img/github-142-svgrepo-com.svg" alt="Go to code">
              </a>
              <a class="view-live" href="${project.live}"  target="_blank">
                  <img src="./img/open-in-new-svgrepo-com.svg" alt="Go to live website">
              </a>
              </div>
          </div>
          <div class="project-description-container">
              <p class="project-description">
              ${project.description}
              </p>
          </div>
          </div>
  
      `;
    return card;
  }
}

const renderProjects = new RenderProjects(getProjects());

function getProjects() {
  return {
    MembersOnly: {
      name: "Members-Only",
      img: "./img/members-only.png",
      description:
        "A full stack chat application where members start with a 'regular' status and can use a secret password to become a 'secret' member. A secret member can view the names and usernames of who wrote the messages in the message board. This app uses passport and express session for persistent authentication.",
      repo: "https://github.com/bergjoel93/Members-Only",
      live: "https://anony-moose.up.railway.app/",
      for: "The Odin Project",
      learned: "",
    },
    BillTracker: {
      name: "Bike-Utah-Bill-Tracker",
      img: "./img/bill-tracker.png",
      description:
        "Bike Utah, a non-profit organization, was in desperate need for a solution for tracking legislative bills. I built them a simple application to do just that. This bill tracker has an admin console that is password protected. The client can log in and add/edit/delete legislative bills with an online form. After they press submit, the data is requested from the Utah Legislture website and sent back where it is cached in a database and displayed on the main page as a nice table. Data is fetched to update bill-status every hour. ",
      repo: "https://github.com/bergjoel93/Bike-Utah-Bill-Tracker",
      live: "https://www.bikeutah.org/bill-tracker?srsltid=AfmBOooWNx-42XyhfCZ_8g9NBOw3Lh91cbELYiw5jSuTnfTBsQtqCCL5",
      for: "The Odin Project",
      learned: "",
    },
    InventoryApp: {
      name: "Inventory-App",
      img: "./img/inventory-app.png",
      description:
        "A simple and elegent CRUD app I developed. It's an inventory app for a Carnivorous Plant store. The user can create, read, update, and delete inventory items that are within a category. Uses a PostgreSQL relational DB.",
      repo: "https://github.com/bergjoel93/Inventory-App/",
      live: "https://carnivorous-plant-inventory.up.railway.app/",
      for: "The Odin Project",
      learned: "",
    },
    MiniMessageBoard: {
      name: "Mini-Message-Board",
      img: "./img/mini-message-board.png",
      description:
        "A simple messaging board that is connected to a PostgreSQL database.",
      repo: "https://github.com/bergjoel93/Mini-Message-Board",
      live: "https://mini-message-board-production-3b6b.up.railway.app/",
      for: "The Odin Project",
      learned: "",
    },
    ShoppingCart: {
      name: "Shopping-Cart",
      img: "./img/ShoppingCart.png",
      description:
        "This project is a mock eccommerce site built using React. This project uses React Router to handle client-side routing. This project also helped me practice creating components with state and the Context API for state management.",
      repo: "https://github.com/bergjoel93/Shopping-Cart",
      live: "https://shopping-cart-odin-project-775.netlify.app/shop/",
      for: "The Odin Project",
      learned: "",
    },
    OverTheGardenWall: {
      name: "Over-The-Garden-Wall",
      img: "./img/over-the-garden-wall.png",
      description:
        "This is an E-Invitation application I made to invite my close friends to a watch party. This app is really good on mobile and has some integration with google sheets and forms.",
      repo: "https://overthegardenwallrsvp.netlify.app/",
      live: "https://github.com/bergjoel93/Over-The-Garden-Wall",
      for: "The Odin Project",
      learned: "",
    },
    MemoryCart: {
      name: "Memory-Card",
      img: "./img/MemoryCard.png",
      description:
        "This project is a memory card game built with React. This project introduced me to the useEffect hook and how to deal with side effects. The images and data are from a Bob's Burgers API.",
      repo: "https://github.com/bergjoel93/Memory-Card",
      live: "https://verdant-bublanina-4073d8.netlify.app/",
      for: "The Odin Project",
      learned: "",
    },
    CVGenerator: {
      name: "CV-Generator",
      img: "./img/CVGenerator.png",
      description:
        "The purpose of this project was to create a React App for the first time that uses dynamic forms to generate a personal CV or Resume. This project helped me practice state management and lifting states to parents.",
      repo: "https://github.com/bergjoel93/CV-Application",
      live: "https://mellow-marigold-3f0b74.netlify.app/",
      for: "The Odin Project",
      learned: "",
    },
    Battleship: {
      name: "Battleship",
      img: "./img/Battleship.png",
      description:
        "The purpose of this project was to practice Test Driven Development using Jest. Tests were written for each feature first before implementing them. This project enhanced my skills in OOP, event handling, and creating an interactive web application.",
      repo: "https://github.com/bergjoel93/Battleship",
      live: "https://bergjoel93.github.io/Battleship/",
      for: "The Odin Project",
      learned: "Test-Driven-Development",
    },
    WeatherApp: {
      name: "Weather App",
      img: "./img/WeatherApp.png",
      description:
        "This is an app to show you current weather conditions and a 2 day forecast. The data comes from a weather API. The purpose of this project is to practice integrating external API's into a web application to handle asynchronouse operations using promises or async/await.",
      repo: "https://github.com/bergjoel93/",
      live: "https://bergjoel93.github.io/Weather-App/",
      for: "The Odin Project",
      learned: "Retrieveing Data From API, Async Functions ",
    },
    FormValidationPractice: {
      name: "Form Validation Practice",
      img: "./img/FormPractice.png",
      description:
        "This was a personal project that I did to help me practice real-time form validation. I made sure I also gave it a nice look because, why not?",
      repo: "https://github.com/bergjoel93/form-validation-practice",
      live: "https://bergjoel93.github.io/form-validation-practice",
      for: "",
      learned: "",
    },
    Carousel: {
      name: "Drop Down/Carousel Practice",
      img: "./img/Carousel.png",
      description:
        "This project helped me practice dynamic user interface interactions. It's not very stylish, but it's a good example of a drop-down menu (top left corner) and an image carousel. ",
      repo: "https://github.com/bergjoel93/drop-down-and-carousel-assignment",
      live: "https://bergjoel93.github.io/drop-down-and-carousel-assignment",
      for: "",
      learned: "",
    },
    DatePractice: {
      name: "Date Practice",
      img: "./img/DatePractice.png",
      description:
        "This was a personal project to help me practice using JavaScript Date objects. In the previous project, 'To-Do list', I was struggling with dates because of time-zone issues. So I did a quick project to test using timestamps as a way to store dates, which were later parsed into date-strings.",
      repo: "https://github.com/bergjoel93/Date-Practice",
      live: "https://bergjoel93.github.io/Date-Practice",
      for: "",
      learned: "",
    },
    Taskr: {
      name: "To-Do List",
      img: "./img/Taskr.png",
      description:
        "The purpose of this project was to practice using ES6 modules, Classes, and WebPack to create a functional and user-friendly todo list for organizing tasks into projects, setting priorities, and managing deadlines. This one was a doozy but it made me so much better as a programme in the end. ",
      repo: "https://github.com/bergjoel93/Taskr",
      live: "https://bergjoel93.github.io/Taskr",
      for: "",
      learned: "",
    },
    RestaurantPage: {
      name: "Restaurant Page",
      img: "./img/Restaurant.png",
      description:
        "This project was my first introduction to using and practicing ES6 modules. This project also used WebPack. The content was injected using JavaScript when the user clicked a menu button. ",
      repo: "https://github.com/bergjoel93/Restaurant-Page",
      live: "https://bergjoel93.github.io/Restaurant-Page",
      for: "",
      learned: "",
    },
    TicTacToe: {
      name: "Tic-Tac-Toe",
      img: "./img/TicTacToe.png",
      description:
        " The purpose of this project was to practice organizing code using objects and factories, ensuring minimal global variables and a clean module pattern. By completing this project, I gained experience in structuring JavaScript code to manage game state, player interactions, and game flow control efficiently.",
      repo: "https://github.com/bergjoel93/Tic_Tac_Toe",
      live: "https://bergjoel93.github.io/Tic_Tac_Toe",
      for: "",
      learned: "",
    },
    Library: {
      name: "Library",
      img: "./img/Library.png",
      description:
        "The Library project from The Odin Project involves creating a small web application to manage a collection of books, extending the 'Book' example from a previous lesson. The purpose of this project is to practice object-oriented programming and DOM manipulation by allowing users to add, display, and manage books in a library.",
      repo: "https://github.com/bergjoel93/library",
      live: "https://bergjoel93.github.io/library",
      for: "",
      learned: "",
    },

    AdminDashboard: {
      name: "Admin Dashboard",
      img: "./img/AdminDashboard.png",
      description:
        "The Admin Dashboard project from The Odin Project focuses on building a full dashboard layout using CSS Grid for the majority of the layout work. The purpose of this project is to apply and solidify knowledge of CSS Grid in a real-world scenario.",
      repo: "https://github.com/bergjoel93/",
      live: "https://bergjoel93.github.io/",
      for: "",
      learned: "",
    },
    SignUpForm: {
      name: "Sign Up Form",
      img: "./img/SignUp.png",
      description:
        "The Sign-up Form project from The Odin Project is designed to apply and consolidate the HTML and CSS concepts learned in previous lessons by creating a sign-up form for an imaginary service. The purpose of this project is to practice structuring a form, applying external assets, and using advanced CSS techniques for styling. ",
      repo: "https://github.com/bergjoel93/sign-up-form",
      live: "https://bergjoel93.github.io/sign-up-form",
      for: "",
      learned: "",
    },
    Calculator: {
      name: "Calculator",
      img: "./img/Calculator.png",
      description:
        "The Calculator project from The Odin Project is a comprehensive exercise designed to consolidate the JavaScript, HTML, and CSS skills learned throughout the course. The purpose of this project is to create a functional on-screen calculator that performs basic arithmetic operations. ",
      repo: "https://github.com/bergjoel93/Calculator",
      live: "https://bergjoel93.github.io/Calculator",
      for: "",
      learned: "",
    },
    EtchASketch: {
      name: "Etch-A-Sketch",
      img: "./img/EtchaSketch.png",
      description:
        "The Etch-a-Sketch project from The Odin Project is a creative exercise designed to strengthen DOM manipulation skills using JavaScript and Flexbox for layout. The purpose of this project is to build a browser-based sketchpad that allows users to draw by hovering over a grid of squares. ",
      repo: "https://github.com/bergjoel93/odin-project-Etch-a-Sketch",
      live: "https://bergjoel93.github.io/odin-project-Etch-a-Sketch",
      for: "",
      learned: "",
    },
    LandingPage: {
      name: "Landing Page",
      img: "./img/OdinLandingPage.png",
      description:
        "The Landing Page project from The Odin Project involves creating a complete web page based on provided design images, focusing on HTML and CSS skills. The purpose of this project is to practice translating a visual design into a functional web page, honing layout and styling skills.",
      repo: "https://github.com/bergjoel93/odin-landing-page",
      live: "https://bergjoel93.github.io/odin-landing-page",
      for: "",
      learned: "",
    },
  };
}
