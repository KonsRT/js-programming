# Active learning: 

# Working through a JSON example

Source: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON#active_learning_working_through_a_json_example 

We are going to load the JSON into our script, and use some nifty DOM manipulation to display it, like this:

![](json-superheroes.png)

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



