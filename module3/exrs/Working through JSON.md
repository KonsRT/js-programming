# Active learning: 

# Working through a JSON example

Source: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON#active_learning_working_through_a_json_example 

We are going to load the JSON into our script, and use some nifty DOM manipulation to display it, like this:

![](json-superheroes.png)

## Top-level function

The top-level function looks like this:

```js
async function populate() {
  const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroes = await response.json();

  populateHeader(superHeroes);
  populateHeroes(superHeroes);
}
```

To obtain the JSON, we use an API called [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This API allows us to make network requests to retrieve resources from a server via JavaScript (e.g. images, text, JSON, even HTML snippets), meaning that we can update small sections of content without having to reload the entire page.

> **Note:** The `fetch()` API is **asynchronous**. We'll learn a lot about asynchronous functions in [the next module](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous), but for now, we'll just say that we need to add the keyword [`async`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) before the name of the function that uses the fetch API, and add the keyword [`await`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) before the calls to any asynchronous functions.



## Converting between objects and text

```js
async function populate() {

      const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
      const request = new Request(requestURL);

      const response = await fetch(request);
      const superHeroesText = await response.text();

      const superHeroes = JSON.parse(superHeroesText);
      populateHeader(superHeroes);
      populateHeroes(superHeroes);
    }
```

The above example was simple in terms of accessing the JavaScript object, because we converted the network response directly into a JavaScript object using `response.json()`.

But sometimes we aren't so lucky — sometimes we receive a raw JSON string, and we need to convert it to an object ourselves.

And when we want to send a JavaScript object across the network, we need to convert it to JSON (a string) before sending it. Luckily, these two problems are so common in web development that a built-in [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) object is available in browsers, which contains the following two methods:

- [`parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse): Accepts a JSON string as a parameter, and returns the corresponding JavaScript object.
- [`stringify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify): Accepts an object as a parameter, and returns the equivalent JSON string.

As you might guess, `stringify()` works the opposite way. Try entering the following lines into your browser's JavaScript console one by one to see it in action:

```js
let myObj = { name: "Chris", age: 38 };
myObj;
let myString = JSON.stringify(myObj);
myString;
```