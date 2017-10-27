/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

//allFeeds should have a URL and be defined

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        it('has a URL', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        //allFeeds should have a name defined as well
        it('name is defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });

    //Writing a new test suite named "The menu"
    describe('The menu', function() {

      //Writing a test that states "The menu" is hidden by default
      it('is hidden', function() {
          expect($('body').hasClass('menu-hidden')).toBe(true);
      });

      //Ensuring that "The menu" is visible when menu icon is clicked
      it('visible when clicked', function() {
          //Expect menu to not be hidden
          $('.menu-icon-link').trigger('click');
          expect($('body').hasClass('menu-hidden')).toBe(false);
          //Expect menu to be hidden
          $('.menu-icon-link').trigger('click');
          expect($('body').hasClass('menu-hidden')).toBe(true);
      });
  });

    //Testing "Initial Entries"
    describe('Initial Entries', function() {

      beforeEach(function(done) {
          loadFeed(0, done);
      });

      it('has at least one entry', function(done) {
          var feedEntry = $('.feed .entry');
          expect(feedEntry.length).toBeGreaterThan(0);
          done();
      });
  });

    //Writing a new test suite named "New Feed Selection"
    describe('New Feed Selection', function() {

      //Set two variables to oldFeed and newFeed to test the differences
      var $oldFeed,
          $newFeed;

      beforeEach(function(done) {
          loadFeed(0, function() {
              $oldFeed = $('.feed').html();
              loadFeed(1, function() {
                  $newFeed = $('.feed').html();
                  done();
              });
          });
      });
      //When new feed loads, I expect it not to be the same as old feed
      it('changes content when new feed loads', function(done) {
          expect($oldFeed).not.toBe($newFeed);
          done();
      });
    });
  });
