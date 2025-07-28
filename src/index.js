import "./styles.css";

// Home page content
function loadHomePage() {
  const content = document.getElementById('content');
  content.innerHTML = '';
  
  const restaurantName = document.createElement('h1');
  restaurantName.textContent = 'Bella Vista Bistro';
  restaurantName.style.color = 'white';
  restaurantName.style.textAlign = 'center';
  restaurantName.style.marginBottom = '2rem';
  content.appendChild(restaurantName);
  
  const heroImage = document.createElement('img');
  heroImage.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop';
  heroImage.alt = 'Beautiful restaurant interior';
  heroImage.style.width = '100%';
  heroImage.style.maxWidth = '600px';
  heroImage.style.height = '400px';
  heroImage.style.objectFit = 'cover';
  heroImage.style.borderRadius = '10px';
  heroImage.style.display = 'block';
  heroImage.style.margin = '0 auto 2rem auto';
  content.appendChild(heroImage);
  
  const headline = document.createElement('h2');
  headline.textContent = 'Experience Culinary Excellence';
  headline.style.color = 'white';
  headline.style.textAlign = 'center';
  headline.style.marginBottom = '1.5rem';
  headline.style.fontSize = '2rem';
  content.appendChild(headline);
  
  const description = document.createElement('p');
  description.textContent = 'Welcome to Bella Vista Bistro, where traditional flavors meet modern culinary artistry. Our passionate chefs craft each dish using the finest locally-sourced ingredients, creating an unforgettable dining experience in the heart of the city.';
  description.style.color = 'white';
  description.style.textAlign = 'center';
  description.style.fontSize = '1.1rem';
  description.style.lineHeight = '1.6';
  description.style.maxWidth = '600px';
  description.style.margin = '0 auto 2rem auto';
  description.style.padding = '0 1rem';
  content.appendChild(description);
  
  const hoursSection = document.createElement('div');
  hoursSection.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
  hoursSection.style.padding = '2rem';
  hoursSection.style.borderRadius = '10px';
  hoursSection.style.maxWidth = '400px';
  hoursSection.style.margin = '0 auto';
  hoursSection.style.textAlign = 'center';
  
  const hoursTitle = document.createElement('h3');
  hoursTitle.textContent = 'Hours of Operation';
  hoursTitle.style.color = 'white';
  hoursTitle.style.marginBottom = '1rem';
  hoursSection.appendChild(hoursTitle);
  
  const hoursList = document.createElement('div');
  hoursList.style.color = 'white';
  hoursList.innerHTML = `
    <p style="margin: 0.5rem 0;">Monday - Thursday: 5:00 PM - 10:00 PM</p>
    <p style="margin: 0.5rem 0;">Friday - Saturday: 5:00 PM - 11:00 PM</p>
    <p style="margin: 0.5rem 0;">Sunday: 4:00 PM - 9:00 PM</p>
  `;
  hoursSection.appendChild(hoursList);
  content.appendChild(hoursSection);
}

// Menu page content
function loadMenuPage() {
  const content = document.getElementById('content');
  content.innerHTML = '';
  
  const menuTitle = document.createElement('h1');
  menuTitle.textContent = 'Our Menu';
  menuTitle.style.color = 'white';
  menuTitle.style.textAlign = 'center';
  menuTitle.style.marginBottom = '3rem';
  content.appendChild(menuTitle);
  
  // Create menu items
  const menuItems = [
    {
      name: 'Grilled Salmon',
      description: 'Fresh Atlantic salmon with lemon herb butter, served with roasted vegetables',
      price: '$28'
    },
    {
      name: 'Beef Tenderloin',
      description: 'Prime cut beef with red wine reduction and garlic mashed potatoes',
      price: '$35'
    },
    {
      name: 'Pasta Primavera',
      description: 'Fresh seasonal vegetables with house-made pasta in a light cream sauce',
      price: '$22'
    },
    {
      name: 'Caesar Salad',
      description: 'Crisp romaine lettuce with parmesan cheese and house-made croutons',
      price: '$16'
    }
  ];
  
  menuItems.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    menuItem.style.padding = '1.5rem';
    menuItem.style.margin = '1rem auto';
    menuItem.style.borderRadius = '10px';
    menuItem.style.maxWidth = '600px';
    
    const itemName = document.createElement('h3');
    itemName.textContent = item.name;
    itemName.style.color = 'white';
    itemName.style.marginBottom = '0.5rem';
    
    const itemDescription = document.createElement('p');
    itemDescription.textContent = item.description;
    itemDescription.style.color = 'white';
    itemDescription.style.margin = '0.5rem 0';
    itemDescription.style.opacity = '0.9';
    
    const itemPrice = document.createElement('p');
    itemPrice.textContent = item.price;
    itemPrice.style.color = 'white';
    itemPrice.style.fontWeight = 'bold';
    itemPrice.style.fontSize = '1.2rem';
    itemPrice.style.margin = '0.5rem 0 0 0';
    
    menuItem.appendChild(itemName);
    menuItem.appendChild(itemDescription);
    menuItem.appendChild(itemPrice);
    content.appendChild(menuItem);
  });
}

// About page content
function loadAboutPage() {
  const content = document.getElementById('content');
  content.innerHTML = '';
  
  const aboutTitle = document.createElement('h1');
  aboutTitle.textContent = 'About Us';
  aboutTitle.style.color = 'white';
  aboutTitle.style.textAlign = 'center';
  aboutTitle.style.marginBottom = '2rem';
  content.appendChild(aboutTitle);
  
  const aboutImage = document.createElement('img');
  aboutImage.src = 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop';
  aboutImage.alt = 'Our chef preparing food';
  aboutImage.style.width = '100%';
  aboutImage.style.maxWidth = '500px';
  aboutImage.style.height = '300px';
  aboutImage.style.objectFit = 'cover';
  aboutImage.style.borderRadius = '10px';
  aboutImage.style.display = 'block';
  aboutImage.style.margin = '0 auto 2rem auto';
  content.appendChild(aboutImage);
  
  const aboutText = document.createElement('div');
  aboutText.style.maxWidth = '600px';
  aboutText.style.margin = '0 auto';
  aboutText.style.padding = '0 1rem';
  
  const paragraph1 = document.createElement('p');
  paragraph1.textContent = 'Founded in 2018, Bella Vista Bistro has been serving the community with exceptional cuisine and warm hospitality. Our story began with a simple vision: to create a place where food brings people together and every meal is a celebration.';
  paragraph1.style.color = 'white';
  paragraph1.style.lineHeight = '1.6';
  paragraph1.style.marginBottom = '1.5rem';
  
  const paragraph2 = document.createElement('p');
  paragraph2.textContent = 'Our head chef, Maria Rodriguez, brings over 15 years of culinary expertise from renowned restaurants across Europe. Together with our dedicated team, we source the finest ingredients from local farmers and artisans to create dishes that honor both tradition and innovation.';
  paragraph2.style.color = 'white';
  paragraph2.style.lineHeight = '1.6';
  paragraph2.style.marginBottom = '1.5rem';
  
  const paragraph3 = document.createElement('p');
  paragraph3.textContent = 'We believe that dining is about more than just food – it\'s about creating memories, fostering connections, and celebrating life\'s special moments. Thank you for being part of our story.';
  paragraph3.style.color = 'white';
  paragraph3.style.lineHeight = '1.6';
  
  aboutText.appendChild(paragraph1);
  aboutText.appendChild(paragraph2);
  aboutText.appendChild(paragraph3);
  content.appendChild(aboutText);
}

// Initialize the page and set up event listeners
function initializePage() {
  // Load home page by default
  loadHomePage();
  
  // Get all navigation buttons
  const homeBtn = document.querySelector('nav button:nth-child(1)');
  const menuBtn = document.querySelector('nav button:nth-child(2)');
  const aboutBtn = document.querySelector('nav button:nth-child(3)');
  
  // Add event listeners
  homeBtn.addEventListener('click', loadHomePage);
  menuBtn.addEventListener('click', loadMenuPage);
  aboutBtn.addEventListener('click', loadAboutPage);
}

// Wait for DOM to load then initialize
document.addEventListener('DOMContentLoaded', initializePage);