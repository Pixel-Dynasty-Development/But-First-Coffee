(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();const p=`<section class="py-20">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-4xl font-extrabold text-primary">Our Story</h2>
			<p class="mt-4 text-xl text-text-muted">
				Keeping it Jefferson City, TN, y'all!
			</p>
		</div>
		<div
			class="max-w-4xl mx-auto text-lg text-text-muted space-y-6 text-center">
			<p>
				But First, Coffee started as a dream to bring great coffee to our
				community. We are proud to support <b>local roasters</b> and other
				<b>local businesses</b> right here in Jefferson City.
			</p>
			<p>
				Whether you're stopping by for your morning "coffee before talkie,"
				using our speedy drive-through, or joining us for Ugly Mug Saturday,
				we're delighted to have you.
			</p>
		</div>
	</div>
</section>

<section class="py-20 bg-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-extrabold text-primary">
				Our Promise To You
			</h2>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
			<div class="text-center md:text-left">
				<h3 class="text-2xl font-bold text-primary mb-4">
					Quality Ingredients
				</h3>
				<p class="text-text-muted text-lg leading-relaxed">
					We're serious about flavor. From our rich, locally-roasted espresso
					beans to our fresh fruits for smoothies and daily-baked pastries, we
					believe in quality you can taste.
				</p>
			</div>
			<div class="text-center md:text-left">
				<h3 class="text-2xl font-bold text-primary mb-4">
					Convenience You Need
				</h3>
				<p class="text-text-muted text-lg leading-relaxed">
					We know you're busy. That's why our friendly team works hard to serve
					you quickly, whether you're stopping in or using our speedy
					drive-through to get a head start on your day.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="py-20">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h2 class="text-3xl md:text-4xl font-extrabold text-primary">
			Find Your New Favorite
		</h2>
		<p class="text-lg md:text-xl text-text-muted my-6 max-w-2xl mx-auto">
			From a classic Drip Coffee to a refreshing Energy Smoothie, our menu has
			something for everyone.
		</p>
		<a
			href="#menu"
			class="bg-secondary text-white font-bold py-3 px-8 rounded-full text-lg hover:opacity-90 transition duration-300"
			>Explore The Menu</a
		>
	</div>
</section>
`,u=`<section class="py-20">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-4xl font-extrabold text-primary">Find Us</h2>
			<p class="mt-4 text-xl text-text-muted">
				We're here to serve you, whether you're dining in or on the go!
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
			<div
				class="bg-white p-8 rounded-lg shadow-md text-text-muted text-center md:text-left">
				<div class="space-y-6">
					<div>
						<h3 class="text-xl font-bold text-primary mb-1">Our Address</h3>
						<p class="text-lg">
							661 E Broadway Blvd, Ste F, Jefferson City, TN 37760
						</p>
					</div>
					<div>
						<h3 class="text-xl font-bold text-primary mb-1">Phone</h3>
						<p class="text-lg">(123) 456-7890</p>
					</div>
					<div>
						<h3 class="text-xl font-bold text-primary mb-1">Hours</h3>
						<p class="text-lg">
							<span class="font-semibold">Mon - Fri:</span> 6:00 AM - 6:00 PM
						</p>
						<p class="text-lg">
							<span class="font-semibold">Sat - Sun:</span> 7:00 AM - 5:00 PM
						</p>
					</div>
					<!-- <div>
						<h3 class="text-xl font-bold text-primary mb-2">Follow Us</h3>
						<div class="flex justify-center md:justify-start space-x-4">
							<a
								href="#"
								class="text-text-muted hover:text-primary transition-colors"
								aria-label="Facebook">
								<svg
									class="w-8 h-8"
									fill="currentColor"
									viewBox="0 0 24 24">
									<path
										fill-rule="evenodd"
										d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
										clip-rule="evenodd" />
								</svg>
							</a>
							<a
								href="#"
								class="text-text-muted hover:text-primary transition-colors"
								aria-label="Instagram">
								<svg
									class="w-8 h-8"
									fill="currentColor"
									viewBox="0 0 24 24">
									<path
										fill-rule="evenodd"
										d="M12.315 2.066c-4.144 0-4.643.018-6.264.091-1.62.073-2.734.364-3.692 1.322-.96.958-1.25 2.072-1.322 3.692C.94 8.73.92 9.23.92 13.374s.02 4.643.09 6.264c.074 1.62.364 2.734 1.322 3.692.958.96 2.072 1.25 3.692 1.322 1.62.073 2.12.09 6.264.09s4.643-.018 6.264-.09c1.62-.074 2.734-.364 3.692-1.322.96-.958 1.25-2.072 1.322-3.692.073-1.62.09-2.12.09-6.264s-.018-4.643-.09-6.264c-.074-1.62-.364-2.734-1.322-3.692-.958-.96-2.072-1.25-3.692-1.322C16.958 2.084 16.458 2.066 12.315 2.066zM12 8.118c-2.788 0-5.045 2.257-5.045 5.045s2.257 5.045 5.045 5.045 5.045-2.257 5.045-5.045-2.257-5.045-5.045-5.045zm0 8.318c-1.808 0-3.273-1.465-3.273-3.273s1.465-3.273 3.273-3.273 3.273 1.465 3.273 3.273-1.465 3.273-3.273 3.273zm4.908-8.528c-.75 0-1.358.608-1.358 1.358s.608 1.358 1.358 1.358 1.358-.608 1.358-1.358-.608-1.358-1.358-1.358z"
										clip-rule="evenodd" />
								</svg>
							</a>
						</div>
					</div> -->
				</div>
			</div>

			<div class="bg-white p-8 rounded-lg shadow-md">
				<h3
					class="text-xl font-bold text-primary mb-4 text-center md:text-left">
					Our Location
				</h3>
				<div class="rounded-lg h-80 w-full flex items-center justify-center">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.5441063277217!2d-83.46785285733064!3d36.128963034441334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885b8d9039de8d9d%3A0x5f135d5c54c9243b!2sBut%20First%2C%20Coffee!5e0!3m2!1sen!2sus!4v1762391275790!5m2!1sen!2sus"
						width="400"
						height="300"
						style="border: 0; border-radius: 0.5rem"
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"></iframe>
				</div>
			</div>
		</div>
	</div>
</section>
`,h=`<section class="relative h-[75vh] flex items-center">
	<div class="absolute inset-0 z-0">
		<img
			src="/images/hero-img.jpg"
			alt="Cozy coffee shop interior"
			class="w-full h-full object-cover opacity-40" />
	</div>

	<div
		class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
		<h1
			class="text-4xl md:text-6xl font-extrabold text-primary leading-tight mb-4">
			Fuel Your Day. Fast.
		</h1>
		<p class="text-lg md:text-xl text-text-muted mb-4 max-w-2xl mx-auto">
			Welcome to But First Coffee, the
			<span class="font-semibold text-accent"
				>home of "coffee before talkie!"</span
			>
		</p>
		<p class="text-lg md:text-xl text-text-muted mb-8 max-w-2xl mx-auto">
			Your local spot for artisan coffee, fresh pastries, and a speedy
			drive-through to keep you moving.
		</p>
		<a
			href="#menu"
			class="bg-secondary text-white font-bold py-3 px-8 rounded-full text-lg hover:opacity-90 transition duration-300"
			>View Our Menu</a
		>
	</div>
</section>

<section class="py-20 bg-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-extrabold text-primary">
				Today's Features
			</h2>
			<p class="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
				A few of our favorites we think you'll love.
			</p>
		</div>
		<div
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
			<div
				class="bg-background p-6 rounded-lg shadow-md text-center flex flex-col justify-between">
				<div>
					<h3 class="text-2xl font-bold text-primary mb-2">Caramel Machiato</h3>
					<p class="text-text-muted mb-4">
						Espresso, Milk, Vanilla Syrup, Caramel Sauce.
					</p>
				</div>
				<p class="text-lg font-semibold text-accent">
					$5.75 <span class="text-text-muted text-sm">/ 16oz</span> | $6.25
					<span class="text-text-muted text-sm">/ 20oz</span>
				</p>
			</div>
			<div
				class="bg-background p-6 rounded-lg shadow-md text-center flex flex-col justify-between">
				<div>
					<h3 class="text-2xl font-bold text-primary mb-2">Iced Chai Latte</h3>
					<p class="text-text-muted mb-4">Chai Tea, Milk.</p>
				</div>
				<p class="text-lg font-semibold text-accent">
					$5.00 <span class="text-text-muted text-sm">/ 20oz</span> | $5.50
					<span class="text-text-muted text-sm">/ 24oz</span>
				</p>
			</div>
			<div
				class="bg-background p-6 rounded-lg shadow-md text-center flex flex-col justify-between">
				<div>
					<h3 class="text-2xl font-bold text-primary mb-2">Cinnamon Rolls</h3>
					<p class="text-text-muted mb-4">
						A warm, gooey classic. Perfect with a Drip Coffee.
					</p>
				</div>
				<p class="text-lg font-semibold text-accent">$3.75</p>
			</div>
			<div
				class="bg-background p-6 rounded-lg shadow-md text-center flex flex-col justify-between">
				<div>
					<h3 class="text-2xl font-bold text-primary mb-2">
						Sausage Croissant
					</h3>
					<p class="text-text-muted mb-4">
						A Pilsbury Southern Croissant with a savory Sausage Patty. Add
						cheese for $.25!
					</p>
				</div>
				<p class="text-lg font-semibold text-accent">$3.75</p>
			</div>
		</div>
	</div>
</section>

<section class="py-20">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-extrabold text-primary">
				Proudly Supporting Our Community
			</h2>
		</div>
		<div
			class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-center">
			<div class="bg-white p-8 rounded-lg shadow-md">
				<h3 class="text-2xl font-bold text-accent mb-4">Discounts Available</h3>
				<p class="text-text-muted text-lg">
					We proudly honor <b>Veterans</b>, <b>First Responders</b>, and
					<b>Students</b>
					(with ID). Thank you for all you do!
				</p>
			</div>
			<div class="bg-white p-8 rounded-lg shadow-md">
				<h3 class="text-2xl font-bold text-accent mb-4">Ugly Mug Saturday!</h3>
				<p class="text-text-muted text-lg">
					Bring in your weirdest, wackiest, or just plain ugliest mug every
					Saturday for a special discount!
				</p>
			</div>
		</div>
	</div>
</section>

<section class="py-20 bg-background">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-extrabold text-primary">
				Your Daily Stop for a Reason
			</h2>
		</div>
		<div
			class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
			<div class="p-6">
				<svg
					class="w-16 h-16 mx-auto mb-4 text-accent"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
				<h3 class="text-2xl font-bold text-primary mb-2">
					Speedy Drive-Through
				</h3>
				<p class="text-text-muted">
					In a rush? Our fast and friendly drive-through will get you your
					favorite drink without the wait.
				</p>
			</div>
			<div class="p-6">
				<svg
					class="w-16 h-16 mx-auto mb-4 text-accent"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />
				</svg>
				<h3 class="text-2xl font-bold text-primary mb-2">Local Roasters</h3>
				<p class="text-text-muted">
					We partner with <b>local roasters</b> to bring you the freshest,
					highest-quality beans.
				</p>
			</div>
			<div class="p-6">
				<svg
					class="w-16 h-16 mx-auto mb-4 text-accent"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
				</svg>
				<h3 class="text-2xl font-bold text-primary mb-2">Local Business</h3>
				<p class="text-text-muted">
					We're proud to be keeping it in <b>Jefferson City, TN</b>. Supporting
					local is what we do!
				</p>
			</div>
		</div>
	</div>
</section>
`,v=`<section class="py-20">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-4xl font-extrabold text-primary">Our Menu</h2>
			<p class="mt-4 text-xl text-text-muted">
				Freshly brewed coffee, espresso, smoothies, and pastries.
			</p>
		</div>

		<div class="max-w-4xl mx-auto">
			<div class="mb-12">
				<h3 class="text-3xl font-bold text-accent mb-8 text-center">
					Hot Beverages
				</h3>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
					<div>
						<div class="flex justify-between items-baseline">
							<h4 class="text-xl font-semibold text-primary">Mocha</h4>
							<p
								class="text-lg font-semibold text-primary whitespace-nowrap ml-4">
								$4.75 | $5.25
							</p>
						</div>
						<p class="text-text-muted text-sm">
							Espresso, Chocolate, Steamed Milk
						</p>
					</div>
					<div>
						<div class="flex justify-between items-baseline">
							<h4 class="text-xl font-semibold text-primary">White Mocha</h4>
							<p
								class="text-lg font-semibold text-primary whitespace-nowrap ml-4">
								$5.00 | $5.50
							</p>
						</div>
						<p class="text-text-muted text-sm">
							Espresso, White Chocolate, Steamed Milk
						</p>
					</div>
					<div>
						<div class="flex justify-between items-baseline">
							<h4 class="text-xl font-semibold text-primary">Latte</h4>
							<p
								class="text-lg font-semibold text-primary whitespace-nowrap ml-4">
								$4.75 | $5.25
							</p>
						</div>
						<p class="text-text-muted text-sm">
							Espresso, Steamed Milk, Optional Flavor
						</p>
					</div>
					<div>
						<div class="flex justify-between items-baseline">
							<h4 class="text-xl font-semibold text-primary">
								Caramel Machiato
							</h4>
							<p
								class="text-lg font-semibold text-primary whitespace-nowrap ml-4">
								$5.75 | $6.25
							</p>
						</div>
						<p class="text-text-muted text-sm">
							Espresso, Milk, Vanilla Syrup, Caramel Sauce
						</p>
					</div>
					<div>
						<div class="flex justify-between items-baseline">
							<h4 class="text-xl font-semibold text-primary">Chai Latte</h4>
							<p
								class="text-lg font-semibold text-primary whitespace-nowrap ml-4">
								$5.00 | $5.50
							</p>
						</div>
						<p class="text-text-muted text-sm">Chai Tea, Steamed Milk</p>
					</div>
					<div>
						<div class="flex justify-between items-baseline">
							<h4 class="text-xl font-semibold text-primary">Americano</h4>
							<p
								class="text-lg font-semibold text-primary whitespace-nowrap ml-4">
								$3.75 | $4.25
							</p>
						</div>
						<p class="text-text-muted text-sm">
							Espresso, Water, Original Flavor
						</p>
					</div>
					<div>
						<div class="flex justify-between items-baseline">
							<h4 class="text-xl font-semibold text-primary">Steamer</h4>
							<p
								class="text-lg font-semibold text-primary whitespace-nowrap ml-4">
								$3.50 | $4.00
							</p>
						</div>
						<p class="text-text-muted text-sm">Flavor, Steamed Milk</p>
					</div>
					<div>
						<div class="flex justify-between items-baseline">
							<h4 class="text-xl font-semibold text-primary">Hot Chocolate</h4>
							<p
								class="text-lg font-semibold text-primary whitespace-nowrap ml-4">
								$3.75 | $4.25
							</p>
						</div>
						<p class="text-text-muted text-sm">
							Gourmet Chocolate & Steamed Milk
						</p>
					</div>
					<div>
						<div class="flex justify-between items-baseline">
							<h4 class="text-xl font-semibold text-primary">Drip Coffee</h4>
							<p
								class="text-lg font-semibold text-primary whitespace-nowrap ml-4">
								$2 / $2.50 / $3
							</p>
						</div>
						<p class="text-text-muted text-sm">12oz | 16oz | 20oz</p>
					</div>
					<div>
						<div class="flex justify-between items-baseline">
							<h4 class="text-xl font-semibold text-primary">Cubano</h4>
							<p
								class="text-lg font-semibold text-primary whitespace-nowrap ml-4">
								$2.50
							</p>
						</div>
						<p class="text-text-muted text-sm">
							8oz - Espresso, Sugar, Milk Foam
						</p>
					</div>
				</div>
			</div>

			<div class="mb-12">
				<h3 class="text-3xl font-bold text-accent mb-8 text-center">
					Cold Beverages
				</h3>
				<p class="text-center text-text-muted text-sm -mt-6 mb-6 font-semibold">
					(20oz | 24oz)
				</p>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
					<div>
						<div class="flex justify-between items-baseline">
							<h4 class="text-xl font-semibold text-primary">Iced Latte</h4>
							<p
								class="text-lg font-semibold text-primary whitespace-nowrap ml-4">
								$4.75 | $5.25
							</p>
						</div>
						<p class="text-text-muted text-sm">
							Espresso, Milk, Optional Flavor
						</p>
					</div>
					<div>
						<div class="flex justify-between items-baseline">
							<h4 class="text-xl font-semibold text-primary">Iced Mocha</h4>
							<p
								class="text-lg font-semibold text-primary whitespace-nowrap ml-4">
								$4.75 | $5.25
							</p>
						</div>
						<p class="text-text-muted text-sm">Espresso, Chocolate, Milk</p>
					</div>
					<div>
						<div class="flex justify-between items-baseline">
							<h4 class="text-xl font-semibold text-primary">
								Iced White Mocha
							</h4>
							<p
								class="text-lg font-semibold text-primary whitespace-nowrap ml-4">
								$5.00 | $5.50
							</p>
						</div>
						<p class="text-text-muted text-sm">
							Espresso, White Chocolate, Milk
						</p>
					</div>
					<div>
						<div class="flex justify-between items-baseline">
							<h4 class="text-xl font-semibold text-primary">
								Iced Chai Latte
							</h4>
							<p
								class="text-lg font-semibold text-primary whitespace-nowrap ml-4">
								$5.00 | $5.50
							</p>
						</div>
						<p class="text-text-muted text-sm">Chai Tea, Milk</p>
					</div>
					<div>
						<div class="flex justify-between items-baseline">
							<h4 class="text-xl font-semibold text-primary">Frappe</h4>
							<p
								class="text-lg font-semibold text-primary whitespace-nowrap ml-4">
								$5.75 | $6.25
							</p>
						</div>
						<p class="text-text-muted text-sm">Espresso, Flavor, Blended</p>
					</div>
					<div>
						<div class="flex justify-between items-baseline">
							<h4 class="text-xl font-semibold text-primary">Italian Soda</h4>
							<p
								class="text-lg font-semibold text-primary whitespace-nowrap ml-4">
								$4.25 | $4.50
							</p>
						</div>
						<p class="text-text-muted text-sm">
							Seltzer Water, Flavor, Half & Half
						</p>
					</div>
					<div>
						<div class="flex justify-between items-baseline">
							<h4 class="text-xl font-semibold text-primary">Spritzers</h4>
							<p
								class="text-lg font-semibold text-primary whitespace-nowrap ml-4">
								$4.00 | $4.25
							</p>
						</div>
						<p class="text-text-muted text-sm">
							Add any flavor. Extra flavors $.75 each.
						</p>
					</div>
					<div>
						<div class="flex justify-between items-baseline">
							<h4 class="text-xl font-semibold text-primary">Tea</h4>
							<p
								class="text-lg font-semibold text-primary whitespace-nowrap ml-4">
								$4.00 | $4.50
							</p>
						</div>
						<p class="text-text-muted text-sm">With added flavor $.25 extra.</p>
					</div>
					<div>
						<div class="flex justify-between items-baseline">
							<h4 class="text-xl font-semibold text-primary">Lemonade</h4>
							<p
								class="text-lg font-semibold text-primary whitespace-nowrap ml-4">
								$4.00 | $4.50
							</p>
						</div>
						<p class="text-text-muted text-sm">With added flavor $.75 extra.</p>
					</div>
				</div>
			</div>

			<div class="mb-12">
				<h3 class="text-3xl font-bold text-accent mb-8 text-center">
					Smoothies
				</h3>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
					<div>
						<div class="flex justify-between items-baseline">
							<h4 class="text-xl font-semibold text-primary">Basics</h4>
							<p
								class="text-lg font-semibold text-primary whitespace-nowrap ml-4">
								$5.75 | $6.25
							</p>
						</div>
						<p class="text-text-muted text-sm">
							(20oz | 24oz) Strawberry, Peach Mango, Banana Strawberry, Cherry
							Berry Blend, Mixed Fruit
						</p>
					</div>
					<div>
						<div class="flex justify-between items-baseline">
							<h4 class="text-xl font-semibold text-primary">Healthy</h4>
							<p
								class="text-lg font-semibold text-primary whitespace-nowrap ml-4">
								$6.00 | $6.50
							</p>
						</div>
						<p class="text-text-muted text-sm">
							(20oz | 24oz) Immunity, Clarity, Energy, Electrolytes
						</p>
					</div>
				</div>
			</div>

			<div class="mb-12">
				<h3 class="text-3xl font-bold text-accent mb-8 text-center">
					Pastries & Food
				</h3>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
					<div>
						<div class="flex justify-between items-baseline">
							<h4 class="text-xl font-semibold text-primary">Pastries</h4>
							<p
								class="text-lg font-semibold text-primary whitespace-nowrap ml-4">
								$3.75
							</p>
						</div>
						<p class="text-text-muted text-sm">
							Peach, Strawberry, Blueberry, Cinnamon Rolls, Mixed Fruit, Maple
							Pecan
						</p>
					</div>
					<div>
						<div class="flex justify-between items-baseline">
							<h4 class="text-xl font-semibold text-primary">Muffins</h4>
							<p
								class="text-lg font-semibold text-primary whitespace-nowrap ml-4">
								$1.50 | $3.75
							</p>
						</div>
						<p class="text-text-muted text-sm">
							(2oz | 6oz) French Toast, Banana, Apple Cinnamon, Blueberry
						</p>
					</div>
					<div>
						<div class="flex justify-between items-baseline">
							<h4 class="text-xl font-semibold text-primary">Poptarts</h4>
							<p
								class="text-lg font-semibold text-primary whitespace-nowrap ml-4">
								$2.00
							</p>
						</div>
						<p class="text-text-muted text-sm">
							Strawberry, Brown Sugar Cinnamon
						</p>
					</div>
					<div>
						<div class="flex justify-between items-baseline">
							<h4 class="text-xl font-semibold text-primary">Bagels</h4>
							<p
								class="text-lg font-semibold text-primary whitespace-nowrap ml-4">
								$3.00
							</p>
						</div>
						<p class="text-text-muted text-sm">
							Plain, Blueberry, Cinnamon Raisin, French Toast
						</p>
					</div>
					<div>
						<div class="flex justify-between items-baseline">
							<h4 class="text-xl font-semibold text-primary">Scones</h4>
							<p
								class="text-lg font-semibold text-primary whitespace-nowrap ml-4">
								$3.50
							</p>
						</div>
						<p class="text-text-muted text-sm">
							Cinnamon Chip, Blueberry, Chocolate Chip
						</p>
					</div>
					<div>
						<div class="flex justify-between items-baseline">
							<h4 class="text-xl font-semibold text-primary">Toast</h4>
							<p
								class="text-lg font-semibold text-primary whitespace-nowrap ml-4">
								$2.00
							</p>
						</div>
						<p class="text-text-muted text-sm">
							Regular, Whole Wheat, Cinnamon Raisin
						</p>
					</div>
					<div class="md:col-span-2">
						<div class="flex justify-between items-baseline">
							<h4 class="text-xl font-semibold text-primary">
								Sausage Biscuits or Sausage Croissant
							</h4>
							<p
								class="text-lg font-semibold text-primary whitespace-nowrap ml-4">
								$3.75
							</p>
						</div>
						<p class="text-text-muted text-sm">
							Pilsbury Southern Croissant, Sausage Patty. Add Cheese $.25.
						</p>
					</div>
				</div>
			</div>

			<div class="mb-12 bg-white p-8 rounded-lg shadow-inner">
				<h3 class="text-3xl font-bold text-accent mb-8 text-center">
					Flavors & Add-ons
				</h3>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
					<div>
						<h4
							class="text-xl font-semibold text-primary border-b border-secondary/50 pb-2 mb-4">
							Flavors
						</h4>
						<ul
							class="grid grid-cols-2 gap-x-4 gap-y-1 text-text-muted text-sm">
							<li>Salted Caramel</li>
							<li>Vanilla</li>
							<li>Caramel</li>
							<li>Pumpkin</li>
							<li>Apple</li>
							<li>Lavender</li>
							<li>Almond</li>
							<li>Butter Pecan</li>
							<li>Pistachio</li>
							<li>Raspberry</li>
							<li>Peppermint</li>
							<li>Coconut</li>
							<li>Brown Sugar Cinnamon</li>
							<li>Toasted Marshmellow</li>
							<li>Toasted Hazelnut</li>
							<li>Bourbon Caramel</li>
							<li>White Chocolate</li>
							<li>Irish Cream</li>
							<li>French Vanilla</li>
							<li>Cinnamon</li>
							<li>Cup Cake</li>
							<li>Granadine</li>
							<li>Pineapple</li>
							<li>Peach</li>
							<li>Cherry</li>
							<li>Grape</li>
							<li>Kiwi</li>
							<li>Banana</li>
							<li>Strawberry</li>
							<li>Cherry Lime</li>
						</ul>
					</div>
					<div>
						<h4
							class="text-xl font-semibold text-primary border-b border-secondary/50 pb-2 mb-4">
							Smoothie Add-ons ($.50 each)
						</h4>
						<div class="grid grid-cols-2 gap-x-4 text-sm">
							<div>
								<h5 class="font-semibold text-primary/80 mb-1">Fruit</h5>
								<ul class="text-text-muted">
									<li>Blueberry</li>
									<li>Dragon Fruit</li>
									<li>Passion Fruit</li>
									<li>Pomegranate</li>
									<li>Coconut</li>
									<li>Jack Fruit</li>
									<li>Acai</li>
									<li>Banana</li>
									<li>Mango</li>
									<li>Peach</li>
									<li>Strawberry</li>
									<li>Cherry</li>
								</ul>
							</div>
							<div>
								<h5 class="font-semibold text-primary/80 mb-1">Veggie</h5>
								<ul class="text-text-muted mb-3">
									<li>Spinach</li>
									<li>Kale</li>
									<li>Pumpkin</li>
									<li>Cucumber</li>
									<li>Carrots</li>
								</ul>
								<h5 class="font-semibold text-primary/80 mb-1">
									Yogurt & Milk
								</h5>
								<ul class="text-text-muted">
									<li>Greek Yogurt</li>
									<li>Plain Whey</li>
									<li>Oat Milk</li>
									<li>Almond Milk</li>
									<li>Soy Milk</li>
									<li>Coconut Milk</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
`,b=`<div class="bg-primary">
	<div
		class="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-white/80">
		<p>&copy; 2025 But First Coffee. All Rights Reserved.</p>
		<p class="text-sm text-white/60 mt-2">
			Website by Pixel Dynasty Development
		</p>
	</div>
</div>`,f=`<div class="bg-primary text-white shadow-md sticky top-0 z-50">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-20">
			<div class="flex-shrink-0">
				<a
					href="#home"
					class="text-2xl font-bold tracking-wider">
					<span class="text-secondary">B</span>ut
					<span class="text-accent">F</span>irst
					<span class="text-secondary">C</span>offee
				</a>
			</div>

			<nav class="hidden md:flex space-x-8">
				<a
					href="#home"
					class="nav-link text-lg font-medium hover:text-secondary transition duration-300"
					>Home</a
				>
				<a
					href="#menu"
					class="nav-link text-lg font-medium hover:text-secondary transition duration-300"
					>Menu</a
				>
				<a
					href="#about"
					class="nav-link text-lg font-medium hover:text-secondary transition duration-300"
					>About</a
				>
				<a
					href="#contact"
					class="nav-link text-lg font-medium hover:text-secondary transition duration-300"
					>Contact</a
				>
			</nav>

			<div class="md:hidden">
				<button
					id="mobile-menu-button"
					class="text-white hover:text-secondary focus:outline-none">
					<svg
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16m-7 6h7" />
					</svg>
				</button>
			</div>
		</div>
	</div>

	<div
		id="mobile-menu"
		class="hidden md:hidden bg-primary/95 backdrop-blur-sm">
		<nav class="px-2 pt-2 pb-4 space-y-1 sm:px-3 text-center">
			<a
				href="#home"
				class="nav-link block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary transition duration-300"
				>Home</a
			>
			<a
				href="#menu"
				class="nav-link block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary transition duration-300"
				>Menu</a
			>
			<a
				href="#about"
				class="nav-link block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary transition duration-300"
				>About</a
			>
			<a
				href="#contact"
				class="nav-link block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary transition duration-300"
				>Contact</a
			>
		</nav>
	</div>
</div>`,d=Object.assign({"../pages/about.html":p,"../pages/contact.html":u,"../pages/home.html":h,"../pages/menu.html":v}),c=Object.assign({"../components/Footer.html":b,"../components/Header.html":f}),x={};for(const a in d){const o=a.split("/").pop().split(".")[0];x[o]=d[a]}document.addEventListener("DOMContentLoaded",()=>{const a=document.getElementById("page-container"),s=document.getElementById("header-container"),o=document.getElementById("footer-container");function l(i,n){i?n.innerHTML=i:n.innerHTML='<p class="text-center p-8 text-2xl font-bold">404 - Page Not Found</p>'}function t(){const i=window.location.hash.substring(1)||"home",n=x[i];l(n,a),window.scrollTo(0,0)}async function e(){l(c["../components/Header.html"],s),l(c["../components/Footer.html"],o),r(),t(),window.addEventListener("hashchange",t),window.location.hash||(window.location.hash="#home")}function r(){const i=document.getElementById("mobile-menu-button"),n=document.getElementById("mobile-menu");i&&n&&(i.addEventListener("click",()=>{n.classList.toggle("hidden")}),s.addEventListener("click",m=>{m.target.classList.contains("nav-link")&&(n.classList.contains("hidden")||n.classList.add("hidden"))}))}e()});
