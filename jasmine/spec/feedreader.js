/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against my application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
      let $prevfeed, $newfeed;
	// first test suite

	describe('RSS Feeds', function() {
		/* The first test
		- it tests to make sure that allFeeds variable has been defined and that it is not
		 * empty.
		 */
		it('Feeds are defined', function() {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});


		/* test that loops through each feed
		 * in the allFeeds object and ensures it has a URL defined
		 * and that the URL is not empty.
		 */
		it('URL defined and it is not empty', function() {
			allFeeds.forEach(function(feed) {
				expect(feed.url).toBeDefined();
				expect(feed.url.length).not.toBe(" ");
			});
		});

		/* test that loops through each feed
		 * in the allFeeds object and ensures it has a name defined
		 * and that the name is not empty.
		 */

		it('Name defined and its not empty', function() {
			allFeeds.forEach(function(feed) {
				expect(feed.name).toBeDefined();
				expect(feed.name).not.toBe(" ");
			});
		});

	});


	// second test suite  "The menu"
	describe('The Menu', function() {
		/*  It tests to  ensures that the menu element is
		 * hidden by default
		 */
		it('Element is hidden by default', function() {
			expect($('body').hasClass('menu-hidden')).toBe(true);
		});

		/*It tests to make sure that the menu changes
		  visibility when the menu icon is clicked*/
		it('Element changes visibility when menu clicked', function() {
			let menuicon = $('.menu-icon-link');
			menuicon.click();
			expect($('body').hasClass('menu-hidden')).toBe(false); // This tests for menu display.
			menuicon.click();
			expect($('body').hasClass('menu-hidden')).toBe(true); // This tests for menu hide.
		});
	});

	// third test suite  "Initial Entries"
	describe('Initial Entries', function() {
		/* It tests to make sure that the loadFeed function is
		 * called and completes its work,
		 */
		beforeEach(function(done) {
			loadFeed(0, function() {
				done();
			});
		});

		// tests that there is at least one entry in feed.
		it('should be called and contain at least one feed.', function() {
			expect($('.entry').length).toBeGreaterThan(0);
		});
	});

	// fourth test suite named "New Feed Selection"
	describe('New Feed Selection', function() {
		/* test that ensures when the loadFeed
		 * function is called and completes its work, there is at least
		 * a single .entry element within the .feed container.
		 */
		beforeEach(function(done) {
			loadFeed(0, function() {
				prevfeed = $('.feed').html();
				loadFeed(1, function() {
					newfeed = $('.feed').html();
					done();
				});
			});
        });
			it(' Change feed content after loading feed', function(done) {
				expect(newfeed).not.toEqual(prevfeed);
				done();
			});
		
	});

}());