The following schedule was made depending on backend_spec.md and current frontend functions. However, schedule didn't mention various miscellaneous modifications to be performed for completion of each functions.

No  | Function | Expected Period (days)
----| ---- | --------
1  | Integrate Vue frontend with Laravel backend using Inertia | 5
| - | remove amplify relations from frontend and integrate it with Laravel mix | 1
| - | implment sign in/up using Laravel Fortify and Inertia (including mail operations and reset password) | 3
| - | implement account settings | 1
2 | Guesty Integration | 5
| - | implement request and response of guesty api with private key | 1
| - | implement cron setting, cause fetching and update data | 2
| - | add booking on guesty post auction using the create reservation api | 2
3 | Public APIs | 3
| - | implement property listing and detail view | 2
| - | implement contact and create auction for bidding | 1
4 | Lessee APIs | 7
| - | bidding | 1
| - | watching, favorites | 1
| - | transactions | 1
| - | notification | 1
| - | auction bid | 1
| - | won auction | 1
| - | stripe integration | 1
5 | Lessor APIs | 4
| - | listings | 2
| - | bookings | 1
| - | transactions, biddings | 1
6 | Admin APIs | 3
| - | lessors and lesses | 1
| - | listings with watching, bids | 1
| - | bookings | 1
7 | Expanded Search API | 1
8 | Email functions | 4
| - | making email patterns | 1
| - | high bidder lost | 1
| - | won auction | 1
| - | pre-stay | 1
9 | Total | Approximately 6 weeks <br> Expecting feedbacks and other additional works, 8 weeks