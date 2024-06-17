document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('movies-link').addEventListener('click', displayMovies);
    document.getElementById('food-menu-link').addEventListener('click', displayFoodMenu);
    document.getElementById('login-link').addEventListener('click', displayLogin);
    document.getElementById('register-link').addEventListener('click', displayRegister);
    document.getElementById('admin-link').addEventListener('click', displayAdminPanel);
});

function displayMovies() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h1>Available Movies</h1>
        <ul>
            <li><a href="#" onclick="selectSeats(1)">Movie 1</a></li>
            <li><a href="#" onclick="selectSeats(2)">Movie 2</a></li>
        </ul>
    `;
}

function selectSeats(movieId) {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h1>Select Seats for Movie ID: ${movieId}</h1>
        <div class="seat-map">
            ${generateSeats()}
        </div>
        <button onclick="bookSeats()">Book Now</button>
    `;
    addSeatSelectionLogic();
}

function generateSeats() {
    let seatsHTML = '';
    for (let i = 1; i <= 30; i++) {
        seatsHTML += `<button class="seat available" data-seat-id="${i}">${i}</button>`;
    }
    return seatsHTML;
}

function addSeatSelectionLogic() {
    document.querySelectorAll('.seat').forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('available')) {
                button.classList.toggle('selected');
            }
        });
    });
}

function bookSeats() {
    const selectedSeats = Array.from(document.querySelectorAll('.seat.selected')).map(button => button.dataset.seatId);
    alert(`Booking seats: ${selectedSeats.join(', ')}`);
}

function displayFoodMenu() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h1>Food Menu</h1>
        <ul>
            <li>Popcorn</li>
            <li>Soda</li>
        </ul>
    `;
}


function displayLogin() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="login-container">
           
            <h1>Login</h1>
             <img src="images/login.jpg" alt="Login Image">
            <input type="email" placeholder="Email" id="login-email"><br>
            <input type="password" placeholder="Password" id="login-password"><br>
            <button onclick="login()">Login</button>
        </div>
    `;
}

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    alert(`Logging in with email: ${email} and password: ${password}`);
}

function displayRegister() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h1>Register</h1>
        <input type="text" placeholder="Name" id="register-name"><br>
        <input type="email" placeholder="Email" id="register-email"><br>
        <input type="password" placeholder="Password" id="register-password"><br>
        <button onclick="register()">Register</button>
    `;
}

function register() {
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    alert(`Registering with name: ${name}, email: ${email}, password: ${password}`);
}

function displayAdminPanel() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h1>Admin Panel</h1>
        <p>Manage movies, screens, and bookings here.</p>
    `;
}
