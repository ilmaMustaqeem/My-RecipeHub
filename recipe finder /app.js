//  1. DEFAULT RECIPES DATA 
const defaultRecipes = [
    {
        id: "rec-1",
        title: "Classic Tomato Pasta",
        ingredients: "pasta, tomato, garlic, olive oil, basil",
        instructions: "Step 1: Boil pasta in salted water.\nStep 2: Heat olive oil in a pan and sauté minced garlic.\nStep 3: Add crushed tomatoes, cook till sauce thickens, and toss in the pasta with fresh basil.",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500"
    },
    {
        id: "rec-2",
        title: "Crispy French Fries",
        ingredients: "potato, oil, salt, peri-peri spice",
        instructions: "Step 1: Cut potatoes into equal batons.\nStep 2: Soak in ice-cold water for 30 mins, then dry completely.\nStep 3: Deep fry until golden brown, drain excess oil, and sprinkle salt or peri-peri.",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500"
    },
    {
        id: "rec-3",
        title: " Paneer Tikka",
        ingredients: "paneer, capsicum, onion, yogurt, tandoori masala",
        instructions: "Step 1: Cut paneer, onions, and capsicum into cubes.\nStep 2: Marinate them in thick yogurt, ginger-garlic paste, and tandoori masala for 1 hour.\nStep 3: Skewer them and grill in an oven or on a hot tawa until slightly charred. Serve hot with mint chutney.",
        image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500"
    },
    {
        id: "rec-4",
        title: "Crispy Masala Dosa",
        ingredients: "dosa batter, potato, mustard seeds, turmeric",
        instructions: "Step 1: Prepare potato masala by sautéing boiled potatoes with mustard seeds, curry leaves, onions, and turmeric.\nStep 2: Heat a non-stick tawa, spread a ladle of dosa batter in circular motion, and apply butter on edges.\nStep 3: Once crispy, place the potato masala in the center, fold it, and serve with coconut chutney.",
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500"
    },
    {
        id: "rec-5",
        title: " Special Chole",
        ingredients: "Chole, red chilly, salt, onion, garlic-ginger, yogurt, spices, onion",
        instructions: "Step 1: Soak chickpeas overnight and cook with rich Indian spices till tender.\nStep 2: Make a soft dough of chole, yogurt, and a pinch of baking soda. Let it rest for 2 hours.\nStep 3:  deep fry in smoking hot oil until fully puffed, and serve with hot chole and pickles.",
        image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=500"
    }, 
    {
   id:  "rec-6",
   title: "Noodles",
   ingredients: " Noodles,chili flakes, 1 tbsp finely minced garlic, green onions,cooking oil",
   instructions: "Step 1: Boil Noodles: Cook the noodles in boiling water. \n Step 2 :While the noodles cook, add the chili flakes, minced garlic, and green onions into a bowl.\n Step 3:2 tbsp of oil in a small pan until it is smoking hot.\n Step 4: Carefully pour the hot oil directly over the garlic and chili flakees.",
   image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=500"
   },
     {
     id: "rec-7",
   title: " White Sauce pasta",
   ingredients: "pasta, tomato, garlic, salt, peppar, chilly flakes.",
   instructions: " Step 1: Cook pasta in  boiling water according to package instructions.\n Step 2: While pasta cooks, heat olive oil in a pan over medium heat. \n Step 3: garlic and chili flakes for 1 minute until fragrant.\n Step:4 Add the crushed tomatoes, salt, and pepper. Simmer for 5 minutes.",
   image: "https://images.unsplash.com/photo-1573821201069-dbf297ca410a?w=500"
   },
       { id:  "rec-8",
   title: "Paneer Cheese Pizza",
   ingredients: "1 cup self-rising flour, 1 cup Greek yogurt,cup pizza sauce, 1 cup shredded mozzarella, pepperoni (optional, 1 tbsp olive oil, cheese",
   instructions: "Step 1: Mix flour and yogurt until a dough forms. Heat olive oil in a skillet over medium-high heat. Press dough into the pan.\n Step 2: Cook 3–4 minutes until the bottom is golden, Turn off heat.\n Step 3:Flip the crust, then quickly add sauce, cheese, and toppings, Place the skillet under the oven broiler for 3–4 minutes until bubbling.",
  
   image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop"
   },
       { id:  "rec-9",
   title: " Veg Burger",
   ingredients: " Burger bun, butter, cheese, tomato , burger sauce.",
   instructions: " Step 1: Season both sides generously with salt and pepper,Toast Buns: Melt butter in a skillet over medium heat. \n Step 2: Toast the split buns face-down until golden, Turn the heat up to high.\n Step 3: Cook the patty for 3 minutes without moving it to get a good crust. \n Step 4: Flip the patty, immediately place the cheese slice on top, and cook for another 2–3 minutes, Spread burger sauce on the bottom bun, layer with lettuce, tomato, the cheesy patty, and the top bun. Serve hot.",
   image: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?w=500"
   },
      { id:  "rec-10",
   title: "Restaurant Style Shahi Paneer",
   ingredients: " paneer, butter, oil, onion, ginger-garlic, red chilli, cashew, fresh cream.",
   instructions: " Step 1: Heat butter and oil in a pan. add the chopped onions and ginger-garlic paste. \n Step 2:until the onions turn golden brown. Pour in the tomato puree. \nStep 3:Add the turmeric, chili powder, garam masala, and salt to taste. \n Step 4:Cook for 5 minutes until the oil starts to separate from the sides. Turn the heat to low. Stir in the cashew paste and cook for 1 minute.",
    image: "https://images.unsplash.com/photo-1690401767645-595de0e0e5f8?w=500" 
      },
     {         
   id:  "rec-11",
   title: "Dal Makhni",
   ingredients: "urad dal, rajma, tomato, red chilli, garam masala,fresh cream, butter, kasuri methi.",
   instructions: " Step 1: Cook them in a pressure cooker  with 4 cups of water and 1 tsp of salt for about 7–8 whistles.\n Step 2: Heat 2 tbsp butter and 1 tbsp oil in a deep pan.then add onions and ginger-garlic paste. Fry until golden brown.Stir in the tomato puree, red chili powder, and garam masala. \nStep 3: Cook for 4–5 minutes until the oil begins to separate from the paste. Add the cooked lentils along with their water to the pan.\nStep 4: Use the back of your ladle to lightly mash some of the lentils against the side of the pan. Simmer on low heat for 10–12 minutes.",
   image: "https://images.unsplash.com/photo-1736680056444-02b10f16a245?q=80&w=500"
   },
    {
   id:  "rec-12",
   title: "Chocolate Cake",
ingredients: " 4 tbsp all-purpose flour, 2 tbsp sugar, 1 tbsp cocoa powder, baking powder, 3 tbsp milk, 1 tbsp melted butter, 1 tbsp chocolate chips ",
   instructions: "Step 1:Whisk all the dry ingredients directly inside a microwave-safe mug.\nStep 2: Add the wet ingredients and stir with a fork until you get a smooth batter.\nStep 3:Add Chocolate: Drop the chocolate chips into the center of the batter.\nStep 4: Microwave: Cook on high for 60 to 70 seconds. Dou't overcook it, or it will get rubbery!", 
       image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587"
    },
    { id:  "rec-13",
   title: "Special Fruit Custard",
   ingredients: "  milk, 3 tbsp sugar, 2 tbsp custard powder, fruits (banana, apple, pomegranate, etc.)",
   instructions: "Step 1:cold milk from the total amount and mix it thoroughly with the 2 tbsp of custard powder in a small bowl until smooth and lump-free. \nStep 2:Boil the Milk: Pour the remaining milk and the sugar into a pan. Bring it to a boil over medium heat. \nStep 3:Slowly pour the custard slurry into the boiling milk while whisking continuously to prevent lumps.\nStep 4: Simmer and stir for 2–3 minutes until the mixture thickens and coats the back of your spoon.",
    image: "https://plus.unsplash.com/premium_photo-1664392008694-9533ca88aada?q=80&w=500"
   
   } ,
      { id:  "rec-14",
   title: "Donut",
   ingredients: " self-rising flour, Greek yogurt,melted butter, sugar mixed with 1 tsp cinnamon, Vegetable oil ",
   instructions: "Step 1:Mix the self-rising flour and Greek yogurt in a bowl until a soft dough forms. \nStep 2:Fry: Heat the oil over medium heat.\nStep 3: Drop the dough balls in batches and fry for about 2–3 minutes, rolling them around until they are evenly golden brown. \nStep 4:Remove with a slotted spoon and drain on paper towels.",
   image: " https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500"
   }, 
     { id:  "rec-15",
   title: "Chocolate Banana Bites",
   ingredients: "Banana, Peanut Butter,  bread, chocolate",
   instructions: "Step 1:  Cut a banana into rounds.Spread peanut butter  on one slice and top with another to make mini sandwiches.\nStep 2: Dip them halfway into chocolate syrup or melted chocolate, place on a plate, and freeze for 15 minutes.",
   image: "https://images.unsplash.com/photo-1626221106973-808b0af018c2?w=500"
   }
];

// LOCAL STORAGE LOGIC
let recipes = JSON.parse(localStorage.getItem('rh_recipes')) || [...defaultRecipes]; 
let favorites = JSON.parse(localStorage.getItem('rh_favorites')) || [];
let currentUser = JSON.parse(localStorage.getItem('rh_user')) || null;

//  2. DOM ELEMENTS 
const welcomePage = document.getElementById('welcome-page');
const getStartedBtn = document.getElementById('get-started-btn');

const authPage = document.getElementById('auth-page');
const appWrapper = document.getElementById('app-wrapper');
const signupForm = document.getElementById('signup-form');
const userDisplayName = document.getElementById('user-display-name');
const menuToggleBtn = document.getElementById('menu-toggle-btn');

const sidebar = document.getElementById('sidebar');
const closeSidebarBtn = document.getElementById('close-sidebar-btn');
const navLinks = document.querySelectorAll('.nav-link');

const recipesGrid = document.getElementById('recipes-grid');
const searchBar = document.getElementById('search-bar');
const openAddModalBtn = document.getElementById('open-add-modal-btn');
const addRecipeModal = document.getElementById('add-recipe-modal');
const addRecipeForm = document.getElementById('add-recipe-form');
const closeAddModalBtns = document.querySelectorAll('#close-add-modal-btn');

const detailsModal = document.getElementById('details-modal');
const closeDetailsBtn = document.getElementById('close-details-btn');
const modalBodyContent = document.getElementById('modal-body-content');

const dashTotalRecipes = document.getElementById('dash-total-recipes');
const dashFavRecipes = document.getElementById('dash-fav-recipes');

//  3. AUTHENTICATION LOGIC 
   // sign up wala
function checkAuth() {
    if (currentUser) {
        if (welcomePage) welcomePage.classList.add('hidden'); // login h to welcome page hide 
        if (authPage) authPage.classList.add('hidden');
        if (appWrapper) appWrapper.classList.remove('hidden');
        if (menuToggleBtn) menuToggleBtn.classList.remove('hidden'); 
        if (userDisplayName) userDisplayName.innerText = `Welcome, ${currentUser.name}`;
        renderRecipes(recipes);
        updateDashboard();
    } else {
        // agr login nhi h to welcome page show and sb hide
        if (welcomePage) welcomePage.classList.remove('hidden');
        if (authPage) authPage.classList.add('hidden');
        if (appWrapper) appWrapper.classList.add('hidden');
        if (menuToggleBtn) menuToggleBtn.classList.add('hidden');
        if (userDisplayName) userDisplayName.innerText = "Welcome, Guest";
    }
}


if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        
        currentUser = { name, email };
        localStorage.setItem('rh_user', JSON.stringify(currentUser));
        
        checkAuth();
    });
}

//  4. SIDEBAR SYSTEM 
if (menuToggleBtn) menuToggleBtn.addEventListener('click', () => sidebar.classList.add('open'));
if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', () => sidebar.classList.remove('open'));

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        if (sidebar) sidebar.classList.remove('open'); 
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        const targetSectionId = link.getAttribute('data-target');
        document.querySelectorAll('.app-section').forEach(section => {
            section.classList.add('hidden');
        });
        
        const targetSection = document.getElementById(targetSectionId);
        if (targetSection) targetSection.classList.remove('hidden');

        if(targetSectionId === 'dashboard-section') {
            updateDashboard();
        }
    });
});

//  5. RECIPE RENDER SYSTEM 
function renderRecipes(recipesToRender) {
    if (!recipesGrid) return;
    recipesGrid.innerHTML = "";
    if(recipesToRender.length === 0) {
        recipesGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px 0;">No recipes found.</p>`;
        return;
    }
    recipesToRender.forEach(recipe => {
        const isFav = favorites.includes(recipe.id) ? 'active' : '';
        const card = document.createElement('div');
        card.className = 'recipe-card';
        const imgUrl = recipe.image || "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500";

        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${imgUrl}" alt="${recipe.title}">
                <button class="fav-btn ${isFav}" onclick="toggleFavorite('${recipe.id}')">
                    <i class="fa-solid fa-heart"></i>
                </button>
            </div>
            <div class="card-body">
                <h3>${recipe.title}</h3>
                <p class="card-ingredients"><strong>Ingredients:</strong> ${recipe.ingredients}</p>
                <div class="card-footer">
                    <button class="btn" onclick="viewDetails('${recipe.id}')">View Details</button>
                    <button class="delete-btn" onclick="deleteRecipe('${recipe.id}')">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>
        `;
        recipesGrid.appendChild(card);
    });
}

//  6. SEARCH FILTERS 
if (searchBar) {
    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredRecipes = recipes.filter(recipe => {
            return recipe.title.toLowerCase().includes(searchTerm) || recipe.ingredients.toLowerCase().includes(searchTerm);
        });
        renderRecipes(filteredRecipes);
    });
}

//  7. MODALS LOGIC 
window.viewDetails = function(id) {
    const recipe = recipes.find(r => r.id === id);
    if(!recipe || !modalBodyContent || !detailsModal) return;
    const imgUrl = recipe.image || "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500";
    modalBodyContent.innerHTML = `
        <img src="${imgUrl}" alt="${recipe.title}" class="modal-img">
        <h2>${recipe.title}</h2>
        <h4>Ingredients:</h4>
        <p>${recipe.ingredients}</p>
        <h4>Instructions:</h4>
        <p style="white-space: pre-line; margin-top: 5px;">${recipe.instructions}</p>
    `;
    detailsModal.classList.remove('hidden');
}

if (closeDetailsBtn) {
    closeDetailsBtn.addEventListener('click', () => {
        if (detailsModal) detailsModal.classList.add('hidden');
    });
}

if (openAddModalBtn) {
    openAddModalBtn.addEventListener('click', () => {
        if (addRecipeModal) addRecipeModal.classList.remove('hidden');
    });
}

closeAddModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (addRecipeModal) addRecipeModal.classList.add('hidden');
    });
});

if (addRecipeForm) {
    addRecipeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newRecipe = {
            id: "rec-" + Date.now(), 
            title: document.getElementById('recipe-title').value,
            ingredients: document.getElementById('recipe-ingredients').value,
            instructions: document.getElementById('recipe-instructions').value,
            image: document.getElementById('recipe-image').value
        };
        recipes.push(newRecipe);
        localStorage.setItem('rh_recipes', JSON.stringify(recipes));
        
        renderRecipes(recipes);
        updateDashboard();
        addRecipeForm.reset();
        if (addRecipeModal) addRecipeModal.classList.add('hidden');
    });
}

window.deleteRecipe = function(id) {
    if(confirm("Are you sure you want to delete this recipe?")) {
        recipes = recipes.filter(r => r.id !== id);
        favorites = favorites.filter(favId => favId !== id);
        
        localStorage.setItem('rh_recipes', JSON.stringify(recipes));
        localStorage.setItem('rh_favorites', JSON.stringify(favorites));
        
        renderRecipes(recipes);
        updateDashboard();
    }
}

window.toggleFavorite = function(id) {
    if(favorites.includes(id)) {
        favorites = favorites.filter(favId => favId !== id);
    } else {
        favorites.push(id);
    }
    
    localStorage.setItem('rh_favorites', JSON.stringify(favorites));
    
    const searchTerm = searchBar ? searchBar.value.toLowerCase() : "";
    const currentList = recipes.filter(recipe => {
        return recipe.title.toLowerCase().includes(searchTerm) || recipe.ingredients.toLowerCase().includes(searchTerm);
    });
    renderRecipes(currentList);
    updateDashboard();
}

function updateDashboard() {
    if (dashTotalRecipes) dashTotalRecipes.innerText = recipes.length;
    if (dashFavRecipes) dashFavRecipes.innerText = favorites.length;
}
 

   
// app shuru illu
checkAuth();


 // get started wala
if (getStartedBtn) {
    getStartedBtn.addEventListener('click', () => {
        if (welcomePage) welcomePage.classList.add('hidden'); // welcome hide
        if (authPage) authPage.classList.remove('hidden');   // sign up page sow
    });
}
