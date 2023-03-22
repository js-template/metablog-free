document.getElementById('footer').innerHTML = `
<div class="bg-base-200 px-5 md:px-0 font-sans mt-24">
			<div class="container mx-auto">
				<div class="grid grid-cols-12 gap-5 py-16">
					<div class="col-span-12 lg:col-span-3">
						<h5 class="text-lg font-semibold text-base-content font-sans">About</h5>
						<p class="mt-3 text-base text-base-content/70 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
						<div>
							<a href="mailto:info@jstemplate.net" class="font-semibold text-base-content text-base">
								Email :
								<span class="text-base-content/70 font-normal hover:text-primary hover:duration-300 transition">info@jstemplate.net</span>
							</a>
						</div>
						<div class="mt-1">
							<a href="tel:880123456789" class="font-semibold text-base-content text-base">
								Phone :
								<span class="text-base-content/70 font-normal hover:text-primary hover:duration-300 transition">880 123 456 789</span>
							</a>
						</div>
					</div>
					<div class="flex justify-between lg:justify-center lg:gap-20 col-span-12 lg:col-span-5">
						<div>
							<h5 class="text-base-content text-lg font-semibold font-sans">Quick Link</h5>
							<div class="flex flex-col gap-y-2 mt-6">
								<a href="/" class="link link-hover text-base text-base-content/70 hover:text-primary transition hover:duration-300">Home</a>
								<a href="#" class="link link-hover text-base text-base-content/70 hover:text-primary transition hover:duration-300">About</a>
								<a href="/blog/index.html" class="link link-hover text-base text-base-content/70 hover:text-primary transition hover:duration-300">Blog</a>
								<a href="/" class="link link-hover text-base text-base-content/70 hover:text-primary transition hover:duration-300">Archived</a>
								<a href="/author/html" class="link link-hover text-base text-base-content/70 hover:text-primary transition hover:duration-300">Author</a>
								<a href="#" class="link link-hover text-base text-base-content/70 hover:text-primary transition hover:duration-300">Contact</a>
							</div>
						</div>
						<div>
							<h5 class="text-base-content text-lg font-semibold font-sans">Category</h5>
							<div class="flex flex-col gap-y-2 mt-6">
								<a href="#" class="link link-hover text-base text-base-content/70 hover:text-primary transition hover:duration-300">Life style</a>
								<a href="#" class="link link-hover text-base text-base-content/70 hover:text-primary transition hover:duration-300">Technology</a>
								<a href="#" class="link link-hover text-base text-base-content/70 hover:text-primary transition hover:duration-300">Travel</a>
								<a href="#" class="link link-hover text-base text-base-content/70 hover:text-primary transition hover:duration-300">Business</a>
								<a href="#" class="link link-hover text-base text-base-content/70 hover:text-primary transition hover:duration-300">Economy</a>
								<a href="#" class="link link-hover text-base text-base-content/70 hover:text-primary transition hover:duration-300">Sports</a>
							</div>
						</div>
					</div>
					<div class="col-span-12 lg:col-span-4">
						<div class="w-full">
							<div class="bg-base-100 py-8 px-9 rounded-xl">
								<p class="text-center text-xl font-semibold text-base-content">Weekly Newsletter</p>
								<p class="mt-2 text-base text-center text-base-content/60">Get blog articles and offers via email</p>
								<div class="relative flex items-center mt-7">
									<input placeholder="Your Email" type="email" class="px-4 py-3 border border-base-content/10 rounded-md w-full outline-none text-base-content placeholder:text-base bg-base-100" />
									<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute right-4 text-base-content">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M2.4375 1.375C1.91973 1.375 1.5 1.79473 1.5 2.3125V11.6875C1.5 12.2053 1.91973 12.625 2.4375 12.625H15.5625C16.0803 12.625 16.5 12.2053 16.5 11.6875V2.3125C16.5 1.79473 16.0803 1.375 15.5625 1.375H2.4375ZM0.25 2.3125C0.25 1.10438 1.22938 0.125 2.4375 0.125H15.5625C16.7706 0.125 17.75 1.10438 17.75 2.3125V11.6875C17.75 12.8956 16.7706 13.875 15.5625 13.875H2.4375C1.22938 13.875 0.25 12.8956 0.25 11.6875V2.3125Z"
											fill="currentColor"
										/>
										<path fillRule="evenodd" clipRule="evenodd" d="M2.88165 2.86629C3.09357 2.59382 3.48625 2.54474 3.75871 2.75665L9 6.83321L14.2413 2.75665C14.5138 2.54474 14.9064 2.59382 15.1183 2.86629C15.3303 3.13875 15.2812 3.53143 15.0087 3.74335L9.38371 8.11835C9.15802 8.29389 8.84198 8.29389 8.61629 8.11835L2.99129 3.74335C2.71882 3.53143 2.66974 3.13875 2.88165 2.86629Z" fill="currentColor" />
									</svg>
								</div>
								<button class="btn btn-primary py-3 text-center font-medium w-full rounded-md mt-2 text-white text-base">Subscribe</button>
							</div>
						</div>
					</div>
				</div>
				<div class="flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between py-8 bg-base-200 border-t border-base-content/10">
					<div class="flex items-center gap-2.5">
						<a href="/">
							<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-base-content">
								<path
									d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 29.536 1.87437 34.6342 5.0231 38.6946L10.314 18.7066C12.5156 10.0312 18.2343 5.543 27.4155 5.543H30.5814C37.038 5.543 41.78 11.6041 40.2264 17.871C39.9478 18.995 39.427 20.0446 38.7004 20.9463L36.006 24.2898C35.3146 25.1478 35.0625 26.279 35.3239 27.3494L36.1453 30.7118C36.5704 32.4521 36.4927 34.2773 35.9213 35.9752C33.9775 41.751 28.5636 45.6413 22.4695 45.6413H13.6115C16.755 47.153 20.2786 48 24 48Z"
									fill="currentColor"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M23.6 29.0123H18.9242C17.4329 29.0123 16.1291 30.018 15.7505 31.4604L13.9165 38.4472H21.1614C23.8415 38.4472 26.1845 36.6398 26.865 34.0476L27.0222 33.4487C27.611 31.2057 25.919 29.0123 23.6 29.0123ZM22.2195 31.1351H19.6787C18.8274 31.1351 18.083 31.7086 17.8658 32.5317L16.8649 36.3243H20.871C22.353 36.3243 23.6486 35.3303 24.0248 33.9045L24.1118 33.5752C24.4373 32.3415 23.5017 31.1351 22.2195 31.1351Z"
									fill="currentColor"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M19.9962 15.657C20.3748 14.2145 21.6786 13.2088 23.1699 13.2088H27.8457C30.1647 13.2088 31.8566 15.4023 31.2679 17.6452L31.1107 18.2441C30.4302 20.8364 28.0872 22.6437 25.4071 22.6437H18.1622L19.9962 15.657ZM22.1115 16.7282C22.3287 15.9052 23.0731 15.3317 23.9244 15.3317H26.4652C27.7474 15.3317 28.683 16.5381 28.3575 17.7717L28.2705 18.1011C27.8943 19.5268 26.5987 20.5209 25.1167 20.5209H21.1106L22.1115 16.7282Z"
									fill="currentColor"
								/>
							</svg>
						</a>
						<div>
							<h4 class="text-xl text-base-content font-sans">
								Meta
								<strong>Blog</strong>
							</h4>
							<p class="mt-0.5 text-base-content/70 text-base">© JS Template 2023. All Rights Reserved.</p>
						</div>
					</div>
					<div class="flex items-center gap-4 text-base-content/70">
						<a href="/" class="text-base border-r border-base-content/10 pr-4 hover:text-primary transition hover:duration-300">Terms of Use</a>
						<a href="/" class="text-base border-r border-base-content/10 pr-4 hover:text-primary transition hover:duration-300">Privacy Policy</a>
						<a href="/" class="text-base hover:text-primary transition hover:duration-300">Cookie Policy</a>
					</div>
				</div>
			</div>
		</div>
    `
