/* eslint-disable no-unused-vars */

// --- 1. GLOB IMPORTS ---
// This imports all HTML files from 'pages' and 'components'
// as raw text strings. It's "eager" so they are loaded immediately.
const pageModules = import.meta.glob("../pages/*.html", {
	eager: true,
	as: "raw",
});
const componentModules = import.meta.glob("../components/*.html", {
	eager: true,
	as: "raw",
});

// --- 2. DYNAMIC ROUTE BUILDER ---
// This automatically builds your routes object.
// If you add "src/pages/new.html", the route "#new"
// will be created automatically. ✨
const routes = {};
for (const path in pageModules) {
	// 1. Get filename from path (e.g., "../pages/home.html" -> "home.html")
	const fileName = path.split("/").pop();
	// 2. Get route name from filename (e.g., "home.html" -> "home")
	const routeName = fileName.split(".")[0];
	// 3. Assign the HTML content to the route
	routes[routeName] = pageModules[path];
}

// ---
// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", () => {
	const pageContainer = document.getElementById("page-container");
	const headerContainer = document.getElementById("header-container");
	const footerContainer = document.getElementById("footer-container");

	// --- 3. CORE FUNCTIONS (No Changes Needed) ---

	// Loads the HTML string into the container
	function loadContent(content, container) {
		if (content) {
			container.innerHTML = content;
		} else {
			// This now serves as your 404 handler
			container.innerHTML =
				'<p class="text-center p-8 text-2xl font-bold">404 - Page Not Found</p>';
		}
	}

	// Handles routing and page loading
	function handleRouteChange() {
		const hash = window.location.hash.substring(1) || "home";
		const pageContent = routes[hash]; // Find the content from our auto-built object

		loadContent(pageContent, pageContainer);
		window.scrollTo(0, 0);
	}

	// --- 4. INITIAL APP LOAD (Slightly Updated) ---

	async function initializeApp() {
		// Load persistent components from our new component object
		loadContent(componentModules["../components/Header.html"], headerContainer);
		loadContent(componentModules["../components/Footer.html"], footerContainer);

		// Add event listeners for the newly loaded header
		initializeHeaderListeners();

		// Handle the initial route
		handleRouteChange();

		// Listen for hash changes
		window.addEventListener("hashchange", handleRouteChange);

		// Ensure a default page is loaded
		if (!window.location.hash) {
			window.location.hash = "#home";
		}
	}

	// --- 5. EVENT LISTENERS (No Changes Needed) ---

	function initializeHeaderListeners() {
		const mobileMenuButton = document.getElementById("mobile-menu-button");
		const mobileMenu = document.getElementById("mobile-menu");

		if (mobileMenuButton && mobileMenu) {
			// Toggle mobile menu
			mobileMenuButton.addEventListener("click", () => {
				mobileMenu.classList.toggle("hidden");
			});

			// Close mobile menu when a nav link is clicked
			headerContainer.addEventListener("click", (e) => {
				if (e.target.classList.contains("nav-link")) {
					if (!mobileMenu.classList.contains("hidden")) {
						mobileMenu.classList.add("hidden");
					}
				}
			});
		}
	}

	// Start the application
	initializeApp();
});
