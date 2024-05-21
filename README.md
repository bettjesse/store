# Petsmart

This Dog Training Manuals Platform is dedicated to dog owners, trainers, and enthusiasts seeking high-quality resources to train and care for their beloved canine companions. Whether you're looking to teach basic obedience commands, address behavioral issues, or delve into advanced training techniques, this platform offers a comprehensive collection of dog training manuals to meet your needs

## Features



1. Extensive Manual Collection: Explore a wide array of dog training manuals covering topics such as obedience training, puppy training, leash manners, agility training, behavior modification, and more.
2. Secure Purchases: Utilizing Stripe for payment processing, this platform ensures secure and hassle-free transactions for purchasing manuals.
3. Instant Access: Upon completing a purchase, users receive a secure link via email to access or download their selected manual. The link remains active for 24 hours, providing convenient access while safeguarding against unauthorized distribution.
4. Caching Mechanism: The platform incorporates a caching mechanism to improve performance, particularly on the product page. Product listings are cached and refreshed every 24 hours to ensure users have access to the latest additions to the manual collection.
  
  ## Admin Features

Administrators have access to a range of functionalities to manage the platform effectively, including:

### Product Management

Administrators can create, update, and delete dog training manuals to keep the collection current and relevant.

### Activation Control

Administrators have the ability to set manuals as active or inactive to control their availability for purchase.

### Secure Deletion

Safely remove manuals from the platform as needed.



## User Experience Enhancements

### Suspense and Fallbacks

Utilizing React Suspense and fallbacks to improve user experience during data loading. When fetching product information, a loading skeleton is displayed to provide visual feedback to the user while waiting for the content to load.

### Product Skeletons

Implemented product skeletons to enhance user experience by displaying placeholder content for products while their data is being fetched. This helps maintain engagement and reduces perceived loading times.


  ## Tech Stack

- **Next.js with TypeScript**: Developed primarily with Next.js, leveraging its hybrid nature to seamlessly integrate frontend and backend functionalities. TypeScript ensures type safety and enhances development efficiency.

- **Prisma**: Utilizing Prisma, an ORM, to manage database operations and ensure data consistency and integrity.

- **Database**: MongoDB serves as the database for storing user profiles, manual metadata, purchase history, and other relevant data.

- **Payment Processing**: Integrated with Stripe API to facilitate secure and efficient payment transactions.

- **Styling**: Tailwind CSS is employed for styling, ensuring a sleek and visually appealing interface that enhances user engagement.


## How It Works

1. **Browse Manuals**: Users can explore the extensive collection of dog training manuals categorized by training topics, skill levels, and specific breeds.

2. **Purchase**: Upon finding a desired manual, users can securely purchase it using Stripe for seamless payment processing.

3. **Access and Download**: Following a successful purchase, users receive a personalized link via email to access or download their selected manual. The link is active for 24 hours, allowing users to conveniently access the resource while maintaining security.

4. **Admin Dashboard**: Administrators can access the admin dashboard to manage manuals, including creation, updates, activation status, and deletion.

5. **Cached Product Listings**: Product listings on the platform's product page are cached and refreshed every 24 hours to ensure users have access to the latest additions to the manual collection.

6. **Enhanced User Experience**: Utilizing React Suspense, fallbacks, and product skeletons to provide a smoother and more engaging user experience during data loading.

## Contributions

Contributions to this project are highly encouraged! Whether it involves adding new manuals, enhancing existing features, optimizing performance, or addressing bugs, your contributions play a vital role in improving the platform and enriching the user experience.

## Get Started

To begin exploring the Petsmart Platform, follow these simple steps:

1. Clone the repository to your local environment.
2. Install dependencies using `npm install`.
3. Configure environment variables for MongoDB connection, Stripe API keys, and other essential settings:

  ```js
   DATABASE_URL=""
   ADMIN_USERNAME=
   ADMIN_PASSWORD=
   STRIPE_SECRET_KEY=
   NEXT_PUBLIC_STRIPE_PUBLIC_KEY=
   NEXT_PUBLIC_APP_URL=
   STRIPE_WEBHOOK_SECRET=
   RESEND_API_KEY=
   SENDER_EMAIL=

```
