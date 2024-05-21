# Petsmart

This Dog Training Manuals Platform is dedicated to dog owners, trainers, and enthusiasts seeking high-quality resources to train and care for their beloved canine companions. Whether you're looking to teach basic obedience commands, address behavioral issues, or delve into advanced training techniques, this platform offers a comprehensive collection of dog training manuals to meet your needs

## Features

Categories: Blogs are organized into different categories such as front-end, back-end, UI/UX, system design, interview preparation, and more.


1. Extensive Manual Collection: Explore a wide array of dog training manuals covering topics such as obedience training, puppy training, leash manners, agility training, behavior modification, and more.
2. Secure Purchases: Utilizing Stripe for payment processing, this platform ensures secure and hassle-free transactions for purchasing manuals.
3. Instant Access: Upon completing a purchase, users receive a secure link via email to access or download their selected manual. The link remains active for 24 hours, providing convenient access while safeguarding against unauthorized distribution.
  ## Admin Features

Administrators have access to a range of functionalities to manage the platform effectively, including:

### Product Management

Administrators can create, update, and delete dog training manuals to keep the collection current and relevant.

### Activation Control

Administrators have the ability to set manuals as active or inactive to control their availability for purchase.

### Secure Deletion

Safely remove manuals from the platform as needed.



To start developing:

### Clone the Repository:
```shell
git clone https://github.com/bettjesse/tech-blog.git
 ```

### Install Dependencies:
```shell
 npm install 
```






## Environment Variables
This application requires certain environment variables to be set up in a .env file in the project root directory. Below are the variables and their purposes:




```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=

CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=

NEXT_PUBLIC_CLERK_SIGN_UP_URL=

NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=

NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=
UPLOADTHING_SECRET=

UPLOADTHING_APP_ID=

DATABASE_URL=
```

## Set up prisma

Add MongoDB Database

```shell
npx prisma generate
npx prisma db push

```
### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |









## Contribution

Contributions are welcome! Whether it's bug fixes, feature enhancements, or additional categories for the blog, feel free to contribute by submitting pull requests. Please adhere to the existing code style and conventions.
  
