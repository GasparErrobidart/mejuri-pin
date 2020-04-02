# Mejuri PIN

## Lighthouse report
![Report preview](https://github.com/GasparErrobidart/mejuri-pin/blob/master/lighthouse-report.png)
You can see the full report [here](https://github.com/GasparErrobidart/mejuri-pin/blob/master/lighthouse-report.pdf)

## Starting the project
Follow these steps:
1. Run `npm install`
2. For a production build `npm run next:build`
3. then `npm run next:start`
4. For development just `npm run next:dev`

## Stack
This project uses:
- React
- Redux
- NextJS
- WorkBox
- Styled Components
- Jest
- And many other related libraries


## Feature
Some of the strategies that were implemented regarding performance and UX:
- Infinite scroll: rendering only 10 items reducing the initial page load.
- Server side rendering: this drastically reduces the time in which the page shows meaningful content. Also adds to a more accurate SEO.
- Lazy load and `srcset`: I implemented my own library [picture-perfect](https://github.com/GasparErrobidart/picture-perfect) which loads seamlessly full size images using lazy load on the `srcset` attribute. Also it determines with mathematical precision the correct `sizes` attribute for a more efficent use of this technique.
- Data transfer has been reduced as much as possible.
- Progressive Web Application (PWA): I used service workers for making most of the necessary assets required for offline rendering available.

## TODO

- Implement HTTPS and HTTP2 for performance and security.
- Add more icons and information to the PWA manifest.
- Reduce the data requested to the API to the minimum. (+compression would be fantastic)
- The filter UX can be improved by adding gestures, other interactions and better feedback.
- The infinite scroll is fine but for cases where the filter has a bunch of results it should implement pagination to not overflow the device memory with bitmaps and DOM elements in memory.
- Persistent URL filters would minimize the amount of data requested and improve the UX. (These last 2 items could not be achieved because for an initial load it always needs all the categories to render the filter, with a real API it can be done)
- The general UI can be improved further, many many details could be polished in terms of spacing, alignment and "responsiveness".


# Mejuri PIN: the challenge

First of all, thanks for your time and take this challenge, we really appreciate it!
We gonna try to make this challenge and opportunity to see your skills and also interesting for you.

## The concept
You are a front-end rockstar and Mejuri contacted you to create the next product that will change the world: Mejuri PIN.
The main idea is to create a pinterest like board, showing all the Mejuri products, and also allow the user to like them.
The user should also be able to list only the liked products and filter the content by category.

Of Course this site should look awesome in mobile! Because everybody loves browsing with their phones!

Finally, the performance is important, and you are the expert! Please let us know about the strategies used in behalf of optimization and browser performance.

## Let’s do it
We included a candidate mockup.png as a base guide, but any improvement is well received!.
You can check the complete category page [here](mejuri.com/shop/t/type).

### All the products in a single endpoint
`http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/shop_all.json`

**Examples**
- Bracelets: `http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/bracelets.json`
- Earrings: `http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/earrings.json`
- Engagement: `http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/engagement.json`
- Pendants: `http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/pendants.json`
- Rings: `http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/rings.json`
- Staking sets: `http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/stacking-sets.json`

### Your app should be able to
- Read the data from the json sources.
- Render the products by category and show the name of the products when the user places the cursor over the product image.
- Save your favorite products and list them in a separate section.
- Filter by category.

## Libraries
- Please do not use other JS frameworks, such as JQuery, Angular, etc. Full development in React/Redux is mandatory for this challenge.
- We would love to see you implement [Styled Components](https://www.styled-components.com/).
- Feel free to use other complementary libraries you consider useful for this case.

**Objectives of this coding challenge**
- We would like to see how you organize and think your solution in React/Redux.
- We would like to see how you work with json data.
- We will check how the application feels in a cellphone or tablet.
- Most importantly, we would like you to have fun doing it!
