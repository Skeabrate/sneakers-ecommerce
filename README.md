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

1. Hero (intro page) ( https://sneakers-b80b7.web.app/ ) :

- przedstawia logo firmy na tle tzw. hero image. Przycisk "Discover", służący jako link do strony głównej ( możliwość powrotu do tej strony poprzez kliknięcie loga firmy w pasku nawgiacji ).

2. All Products ( https://sneakers-b80b7.web.app/AllProducts ) :

- 36 produktów dodanych do CMS'a i pobieranych za pomocą axios + graphQL.
- możliwość filtrowania produktów.
- wyszukiwarka konkretnego produktu.
- możliwość dodania produktu do tzw. wishlisty ( listy życzeń ) - przycisk w prawnym górnym rogu zdjęcia każdego produktu.
- paginacja produktów, z automatycznym podziałem na podstrony. Na jedną stronę ustawione 12 produktów, więc automatycznie produkty zostały podzielone na 3 podstrony.

3. Product:

- slider ze zdjęciami ( 3 zdjęcia dla każdego produktu ). Slider przystosowany do różnej ilości zdjęć ( react-slideshow-image ).
- animacje pojawiających się kolejnych sekcji opisu wraz ze scrollowaniem ( intersection observers ).
- możliwość dodania produtku do koszyka.
- możliwość dodania produtku do listy życzeń.

4. Cart ( https://sneakers-b80b7.web.app/cart ) :

- wyświetlanie produktów wcześniej dodanych do listy.
- dodane produkty zapisywane są w pamięci lokalnej urządzenia i globalnym stanie aplikacji ( redux toolkit + local storage ).
- możliwość edycji ilości dodanych produktów.
- możliwość przeniesiania produktu do wishlist ( button - "Add to wishlist" ).
- podsumowanie ( możliwość dodania komentarza do zamówienia lub dodania kodu promocyjnego - skeabrate, wykonane przy użyciu tagów: details i summary bez JS'a ) i przejście do płatności ( button - "checkout" ).
- payment modal - walidacja karty kredytowej.
- po poprawnym wprowadzeniu danych karty kredytowej, zakupione produkty zapisywane sa w fireStore ( baza danych od firebase ) do konkretnego użytkownika. Później - wyświetlane w historii zamówień na stronie profilowej.

5. Wishlist ( https://sneakers-b80b7.web.app/wishlist ) :

- możliwość dodania produktu do tzw. listy życzeń ( wishlist )
- dodane produkty zapisywane są w pamięci lokalnej urządzenia i globalnym stanie aplikacji ( redux toolkit + local storage ).

6. Contact ( https://sneakers-b80b7.web.app/contact ) :

- formularz kontaktowy z walidacją.
- po poprawnym wprowadzeniu informacji, możliwość wysłania emaila ( emailJS ).

7. About Us ( https://sneakers-b80b7.web.app/about ) :

- strona o firmie, animacje wykonane przy użyciu biblioteki GSAP ( gsap-scrollTriger ).

7. Log In ( https://sneakers-b80b7.web.app/login ) :

- formularz logowania z walidacją ( Formik + Yup ).
- wyświetlanie stosownych komunikatów w przypadku wprowadzenia niepoprawnych danych.
- możliwość rejestracji ( custom forms + custom validation).
- resetowanie hasła, w postaci powiadomienia mailowego z linkiem do strony zawierającej formularz do wprowadzenia nowego hasła.

8. Profile ( https://sneakers-b80b7.web.app/profile ) :

- przejście do strony profilowej poprzez kliknięcie guzika w prawym górnym rogu na pasku nawigacji, bądź przekierowanie po poprawnym zalogowaniu.
- wyświetlanie calej historii zakupów i szczegółów każdego zamówienia ( numer zamówienia, data złożenia zamówienia, ilośc zakupionych produktów, cena, rozmiar, status wysyłki ).
- możliwość ustawienia zdjęcia profilowego - awatara.
- resetowanie hasła, w postaci powiadomienia mailowego z linkiem do strony zawierającej formularz do wprowadzenia nowego hasła.

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
