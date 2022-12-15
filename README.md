# Sneakers e-commerce.

Website URL: https://sneakers-b80b7.web.app/

## Main technologies I used in this project:

- semantic HTML5.
- reactJS.
- styled-components: RWD - responsive web design, flex and grid layouts,
- react-helmet: SEO,
- global state managment: redux toolkit with local storage ( shopping cart and wishlist ), react context api ( all products, search filters, user authentication, handling modals ),
- firebase: hosting, user authentication ( firebase hooks: sign in, log in, log out, password reset ), fireStore ( storing users shopping history ), firebase storage ( storing user profile image ),
- react-router-dom v6: routing,
- DatoCMS as headless CMS (storing products),
- axios and graphQL ( fetching data from API ),
- forms: Formik library with Yup validation ( implemented in login page ), custom forms with my custom validation ( contact form, sign in modal ),
- emailJS: sending emails from contact page,
- react-downshift: combobox components for products filters ( main page ),
- react-slideshow-image: images slider ( product page - 3 product images ),
- react-scroll: scrolling into elements view,
- intersection observer api: triggering scroll animations with intersection observers,
- animations: Gsap and styled-compoents - keyframes,
- uuid: generating random ID's,
- react-spinners: loading state spinners,
- react-payment: handling card information inputs,
- designing layouts: https://excalidraw.com/ and https://www.figma.com.

## Testing with:

- react testing library & jest
- cypress (e2e - end to end tests)

You can use test account to test the application:

email: sebastianswiecz458@gmail.com, password: test123

## Application description:

#### Navigation bar:

- hides when user scrolls page down, shows up when user scrolls page up,

- Sneakers: / (intro page),
- Home: /allProducts,
- About: /about,
- Contact: /contact,
- Wishlist svg /wishlist,
- Cart svg /cart,
- Profile svg /profile.

#### Hero Page (intro page) ( https://sneakers-b80b7.web.app/ ) :

- hero image background animation with sneakers logo in the middle:
  - animations start when image is fully loaded,
- "Discover" button triggers page transition animation to /AllProducts page (main page).

#### All Products Page ( https://sneakers-b80b7.web.app/AllProducts ) :

- 36 products queried from DatoCms by axios + graphQL:
  - every product has 3 pictures, price, category and gender,
- filters bar:
  - stays sticky to top of the screen when user scrolls down to allow constant access to filters,
  - user can filter products by gender, category (running, essentials, originals, winter) and price (ascending, descending),
- search bar:
  - user can search for product from all products or with applied filters,
- products grid:
  - wishlist button in the right corner of every product tile,
  - user can add product to wishlist if button is unfilled, otherwise product is already added to wishlist and user can delete it,
- products pagination:
  - pagination bar under the products grid with highlighted active page,
  - 12 products per page,
  - automatically adding pages when products are added to CMS.

#### Product Page:

- images swipe slider: every product has 3 images,
- product description:
  - description split to 4 sections,
  - sections titles bar stays sticky to the top of the screen,
  - user can scroll to each section,
  - active section is being highlighted,
  - fade in animations for every description section - triggered on scroll using intersection observers API,
- adding section:
  - stays sticky to the right half of the screen,
  - if device height is lower than adding section height, section scrolls automatically when user scrolls the page up and down,
  - user can add product to cart after selecting size. If size is not selected error animation and text will be displayed,
  - user can increase and decrease the amount of products by clicking on plus and minus buttons or by specifying a number inside an input,
  - after successfully adding product to cart, success modal is shown,
  - user can add product to wishlist if wishlist button is unfilled, otherwise it means that product is already in wishlist and user can remove it.

#### Cart Page ( https://sneakers-b80b7.web.app/cart ) :

- displays products added to shopping cart,
- cart products are saved in local storage and global application state - redux toolkit,
- user can edit amount of products using input or plus/minut buttons,
- user can delete product,
- user can add product to wishlist, if product is already in wishlist error modal is shown, otherwise product will be added to wishlist and success modal will be shown,
- summary:
  - user can add comment for an order,
  - user can add promo code - skeabrate (my github nick) whitch gives 20% discount,
  - checkout button opens payment modal with credit card form validation ( credit card information is not stored anywhere ),
  - after successfully submitting payment form, user can finalize an order,
  - after finalizing an order, shopping cart will be cleared and the order will be stored in profile shopping history (firestore) if the user is logged in.

#### Wishlist Page ( https://sneakers-b80b7.web.app/wishlist ) :

- displays products added to wishlist,
- wishlist products are saved in local storage and global application state - redux toolkit.

#### Contact Page ( https://sneakers-b80b7.web.app/contact ) :

- custom contact form with custom validation,
- after filling out the form correctly and clicking submit button, email is beeing sent via EmailJS and success modal is shown,
- if an error occurs during sending an email, information modal with error message will be shown.

#### About Us Page ( https://sneakers-b80b7.web.app/about ) :

- animations made using gsap library (gsap-scrollTriger),
- different hover effects using styled-components,

#### Log In Page ( https://sneakers-b80b7.web.app/login ) :

- user can register an account: register button opens register modal ( custon form with my custom validation ),
- user can login with existing account: login Formik form with Yup validation,
- displays error messages in case of entering incorrect data,
- user can reset a password:
  - an e-mail notification with a link to the page containing the form for entering a new password.

#### Profile Page ( https://sneakers-b80b7.web.app/profile ) :

- user can log out using logout button - sticky to the right bottom corner of the screen,
- profile details:
  - sticky to the left part of the screen,
  - user can set a profile image ( image is stored in firebase storage ),
  - if image weight is higher than 1mb or an error occurs during saving, error modal will be shown, otherwise new profile image will be saved and success modal will be shown,
  - user can reset a password by receiving a link to the reset password page,
- shopping history:
  - user can view every order details including: unique order id, date of purchase and ordered products information: quantity of each product, product price and selected size,
  - orders are paginated ( 8 orders per page ) and loaded when user scrolls to the bottom of the page.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_DATOCMS`

`REACT_APP_API_KEY`

`REACT_APP_AUTH_DOMAIN`

`REACT_APP_PROJECT_ID`

`REACT_APP_STORAGE_BUCKE`

`REACT_APP_MESSAGING_SENDER_ID`

`REACT_APP_APP_ID`

`REACT_APP_SERVICE_ID`

`REACT_APP_TEMPLATE_ID`

`REACT_APP_USER_ID`

## Run Locally

Clone the project

```bash
  git clone https://github.com/Skeabrate/sneakers-ecommerce.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Running Tests

To run tests, run the following commands:

- react-testing-library & jest:

```bash
  npm run test
```

- cypress:

```bash
  npm run test:e2e
```
