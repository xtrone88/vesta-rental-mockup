Backend should be Laravel 8.0 + PHP version should be 7.4._ or 8.0._. postgresq 13.

We will deploy the backend via heroku. The frontend can either be combined into the backend via mix / inertia or deployed separately to heroku or cloudfront / s3 (cloudfront for https).


Will interface and re-use this view frontend:

1. Public APIs

   1. Properties Collection and detail


        ```
        // use SoftDeletes;
        $table->id();
        $table->timestamps();
        $table->unsignedBigInteger('team_id')->nullable();  //jetstream team foreign key
        $table->foreignId('team_id')
          ->constrained()
          ->onUpdate('cascade')
          ->onDelete('set null');
        $table->string('guesty_id')->unique();
        $table->unsignedTinyInteger('bedrooms');
        $table->unsignedTinyInteger('baths');
        $table->string('address1');
        $table->string('address2');
        $table->string('postal_code');
        $table->string('city');
        $table->double('longitude');  // maybe use point instead
        $table->double('latitude');
        $table->string('description');
        $table->json('amenities');
        $table->json('apiData');
        $table->decimal('base_price',6,2);
        $table->decimal('weekend_base_price',6,2);
        $table->decimal('weekly_price_factor',6,2);
        $table->decimal('monthly_price_factor',6,2);
        $table->unsignedTinyInteger('min_nights');
        $table->unsignedTinyInteger('turnover_days');
        ```

    1. Auction Collection and detail


        ```
        // use SoftDeletes;
        $table->id();
        $table->timestamps();
        $table->unsignedBigInteger('team_id')->nullable();  //jetstream team foreign key
        $table->foreignId('team_id')
          ->constrained()
          ->onUpdate('cascade')
          ->onDelete('set null');
        $table->unsignedBigInteger('property_id')->nullable();  //property foreign key
        $table->foreignId('property_id')
          ->constrained()
          ->onUpdate('cascade')
          ->onDelete('set null');
        $table->date('booking_start_at'); // use dates instead of datetime until we have to change
        $table->date('booking_end_at');
        $table->string('status')
        $table->unsignedBigInteger('high_bidder_user')->nullable(); // foreign key to user model this foreign key
        $table->foreignId('team_id')
          ->constrained()
          ->onUpdate('cascade')
          ->onDelete('set null');
        $table->decimal('highest_bid',6,2);
        $table->decimal('lease_it_now',6,2);
        $table->string('views');
        ```
        Needs logic to ensure that auctions don't overlap for the same property.
    1. Auction Bids


        ```
        $table->id();
        $table->timestamps();
        
        $table->unsignedBigInteger('auction_id'); // (foreign key to auction)
        $table->foreignId('auction_id')
          ->constrained()
          ->onUpdate('cascade')
          ->onDelete('set null');
        $table->unsignedBigInteger('user_id'); // (foreign key to user)
        $table->foreignId('user_id')
          ->constrained()
          ->onUpdate('cascade')
          ->onDelete('set null');
        $table->decimal('amount',6,2);


        ```

        we could do $table->unique(['user_id', 'auction_id', 'amount']); but I think not necessary.

    1.  Contact API

2. Authenticated Lessee APIs

   1. User Fields:
      Possibly use Laravel Jetstream here to get started:
      Even if not using Jetstrem we want to use Laravel Fortify

      TODO: Need to evaluate if https://jetstream.laravel.com/1.x/features/teams.html is enough to satisfy lessee / leasor / admin requirements.
      It seems like leasors might fit into teams, and maybe their guesty api key should be defined on teams. And possibly admin should just be a boolean on user account.

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
      
      $table->boolean('is_leasor');  //enables team functionality
      $table->boolean('is_admin');
      ```
      
      ```
      Team roles:
      Admin 
      Property Manager - Right now same permissions as admin, might change in future
      ```

   1. Stripe Card association

      ```
      $table->unsignedBigInteger('user_id'); // foreign key to user
      $table->foreignId('user_id')
          ->constrained()
          ->onUpdate('cascade')
          ->onDelete('set null');
      $table->string('card_token');

      ```



1.  Transactions Listing

    ```
    $table->id();
    $table->timestamps();
    $table->unsignedBigInteger('user_id'); // foreign key to user
    $table->unsignedBigInteger('card_id'); // foreign key to stripe card

    $table->decimal('amount',9,2);
    $table->string('status'); // success / failure

    ```

1.  Stays Listing (won auctions)

    ```
    $table->id();
    $table->timestamps();
    $table->unsignedBigInteger('user_id'); // foreign key to user
    $table->foreignId('user_id')
          ->constrained()
          ->onUpdate('cascade')
          ->onDelete('set null');
    $table->unsignedBigInteger('auction_id'); // potentially optional
    $table->foreignId('user_id')
          ->constrained()
          ->onUpdate('cascade')
          ->onDelete('set null');
    $table->unsignedBigInteger('property_id')->nullable(); // potentially optional
    $table->foreignId('property_id')
          ->constrained()
          ->onUpdate('cascade')
          ->onDelete('set null');
    $table->date('booking_start_at'); // use dates instead of datetime until we have to change
    $table->date('booking_end_at');
    ```

1.  Property Bidding Status Api (can either be added into existing property detail or can be separate, should list the bids and the current price and the next bid)
    Probably just return the highest bid along with the auction bids collection (obviously per auction)

1.  Bidding APIs

    1.  Watching

        // you watch an auction

    ```
      // you watch an auction
      $table->unsignedBigInteger('user_id');
      $table->foreignId('user_id')
      ->constrained()
      ->onUpdate('cascade')
      ->onDelete('cascade');
      $table->unsignedBigInteger('auction_id');
      $table->foreignId('auction_id')
      ->constrained()
      ->onUpdate('cascade')
      ->onDelete('cascade');
      $table->unique(['user_id', 'auction_id']);

    ```

    1.  Favorites

        // you favorite a property

    ```
      // you favorite a property
      $table->unsignedBigInteger('user_id');
      $table->foreignId('user_id')
      ->constrained()
      ->onUpdate('cascade')
      ->onDelete('cascade');
      $table->unsignedBigInteger('property_id');
      $table->foreignId('property_id')
      ->constrained()
      ->onUpdate('cascade')
      ->onDelete('cascade');
      $table->unique(['user_id', 'property_id']);

    ```

    1.  Bidding
    1.  Notifications

1.  Lessor APIs

    1.  Listing CRUD
    1.  Bookings
    1.  Bids
    1.  Transactions

1.  Leasor Models
    1.  TeamGuestyAPI
    
        ```
        // one to one model for team
        $table->id();
      
        $table->timestamps();
        $table->unsignedBigInteger('team_id');  //jetstream team foreign key
        $table->foreignId('team_id')
          ->constrained()
          ->onUpdate('cascade')
          ->onDelete('cascade');
        $table->string('guesty_api_key');
        $table->string('guesty_api_secret');
        ``
    1.  TeamStripe
    
        ```
        // one to one model for team
        $table->id();
        $table->timestamps();
        $table->unsignedBigInteger('team_id');  //jetstream team foreign key
        $table->foreignId('team_id')
          ->constrained()
          ->onUpdate('cascade')
          ->onDelete('cascade');
        $table->string('stripe_secret');
        $table->string('stripe_publishable_key');
        ```
3.  Admin APIs
    1.  Nearly identical to lessor but will show all accounts at once.
    1.  dashboard api to show summed values of likes / watching / bids
    1.  payments apis to show summaries of cards added to system
4.  Expanded search APIs
    1.  should include location search by location name and by lat , lon pair or Geohash
5.  Laravel Tasks

    1. Email

       1. Post signup email.
       1. High bidder lost email. (Sent when a user is no longer the high bidder, happens immediately so user can bid again)
       1. Post auction won email.
       1. Pre - Stay email (1 day before stay send at 9am CST)

    1. Guesty Integration:
       1. Should be able to sync properties with [Guesty](https://docs.guesty.com/) with a command and cron job occurring hourly. Sync may get confusing if we allow them to edit properties on our site, long term we likely will support non-guesty properties which will require additional attributes and local images.  If we allow even sorting of images locally, this will get complex.
       1. Add Booking on guesty post auction using the create reservation api https://docs.guesty.com/#create-a-reservation
    1. Stripe
       1. Should Immediately charge the card upon auction ending.
