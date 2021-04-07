1. Public APIs
   1. Property listings
      1. should include date search from start
   1. Property detail
   1. Contact API
2. Authenticated Lessee APIs

   1. we must have a published site with terms and privacy pages to enable google / facebook auth / cognito might help around this but probably still required.
   1. cognito, should give us a role to let us know what menu items to show
   1. User Profile APIs (edit retrieve)
   1. User Notification Preference APIs
   1. Payment association
   1. Transactions Listing
   1. Stays Listing (won auctions)
   1. Property Bidding Status Api (can either be added into existing property detail or can be separate, should list the bids and the current price and the next bid)

3. Bidding APIs
   1. Watching
   1. Favorites
   1. Bidding
   1. Notifications
4. Lessor APIs
   1. Listing CRUD
   1. Bookings
   1. Bids
   1. Transactions
5. Admin APIs
   1. Nearly identical to lessor but will show all accounts at once.
   1. dashboard api to show summed values of likes / watching / bids
   1. payments apis to show summaries of cards added to system
6. Expanded search APIs
   1. should include location search by location name and by lat , lon pair or Geohash
