Backend should be Laravel 8.0 + PHP version should be 7.4._ or 8.0._. postgresq 13.

We will deploy the backend via heroku. The frontend can either be combined into the backend via mix / inertia or deployed separately to heroku or cloudfront / s3 (cloudfront for https).

Use https://github.com/InfyOmLabs/laravel-generator for scaffold generating.

Will interface and re-use this view frontend:

1. Public APIs

   1. Properties Collection and detail


        ```
        $table->id();
        $table->timestamps();
        $table->string('guesty_id')->unique();
        $table->tinyInteger('bedrooms');
        $table->tinyInteger('baths');
        $table->string('address1');
        $table->string('address2');
        $table->string('zip');
        $table->string('city');
        $table->string('description');
        $table->json('amenities');
        $table->json('apiData');
        $table->decimal('rate',6,2);
        $table->decimal('rate_weekend',6,2);
        ```

    1. Auction Collection and detail


        ```
        $table->id();
        $table->timestamps();
        $table->date('booking_start_at'); // use dates instead of datetime until we have to change
        $table->date('booking_end_at');
        $table->string('status');
        $table->decimal('highest_bid',6,2);
        $table->decimal('lease_it_now',6,2);
        $table->string('views');
        ```

    1. Auction Bids


        ```
        $table->id();
        $table->timestamps();
        $table->decimal('amount',6,2);
        $table->integer('auction_id'); (foreign key to auction)
        $table->integer('user_id'); (foreign key to user)
        ```

    1.  Contact API

2. Authenticated Lessee APIs

   1. User Fields:
      Possibly use Laravel Jetpack here to get started:
      Even if not using Jetpack we want to use Laravel Fortify

      ```
      $table->string('first_name');
      $table->string('last_name');
      $table->string('address1');
      $table->string('address2');
      $table->string('postal_code');
      $table->string('city');
      $table->string('state');
      $table->string('phone'); // might should use some validator
      //notifications
      $table->boolean('notify_email');
      $table->boolean('notify_text');
      $table->boolean('notify_browser');
      ```

   1. Stripe Card association

      ```
      $table->integer('user_id'); // foreign key to user
      $table->string('card_token');

      ```


      ```

1.  Transactions Listing

    ```
    $table->id();
    $table->timestamps();
    $table->integer('user_id'); // foreign key to user
    $table->integer('card_id'); // foreign key to stripe card

    $table->decimal('amount',9,2);
    $table->string('status'); // success / failure

    ```

1.  Stays Listing (won auctions)

    ```
    $table->id();
    $table->timestamps();
    $table->integer('user_id'); // foreign key to user
    $table->integer('auction_id'); // potentially optional
    $table->integer('property_id'); // potentially optional
    $table->date('booking_start_at'); // use dates instead of datetime until we have to change
    $table->date('booking_end_at');
    ```

1.  Property Bidding Status Api (can either be added into existing property detail or can be separate, should list the bids and the current price and the next bid)
    Probably just return the highest bid along with the auction bids collection (obviously per auction)

1.  Bidding APIs

    1.  Watching
        you watch an auction

    ```
      $table->integer('user_id');
      $table->integer('auction_id');

    ```

    1.  Favorites
        you favorite a property

    ```
      $table->integer('user_id');
      $table->integer('property_id');

    ```

    1.  Bidding
    1.  Notifications

1.  Lessor APIs
    1.  Listing CRUD
    1.  Bookings
    1.  Bids
    1.  Transactions
1.  Admin APIs
    1.  Nearly identical to lessor but will show all accounts at once.
    1.  dashboard api to show summed values of likes / watching / bids
    1.  payments apis to show summaries of cards added to system
1.  Expanded search APIs
    1.  should include location search by location name and by lat , lon pair or Geohash
1.  Laravel Tasks
    1.  Guesty Integration:
        1. Should be able to sync properties with [Guesty](https://docs.guesty.com/) with a command and cron job occurring hourly
    1.  Stripe
        1. Should Immediately charge the card upon auction ending.
