---
description: "If you're a beginner developer, you may have heard of APIs, but you may want some clarification on what they are and how to use them. This article explains what an API is and why APIs are helpful. There's even a fun example to show you how to use APIs in your programming projects."
created: '2023-02-23'
author: 'katy-kozee'
header: '@assets/blog/api-cover.png'
teaser: '@assets/blog/api-cover.png'
tags:
    - APIs
    - beginners
    - guide
---

# A Beginner Developer's Guide to APIs (with Example Project)

If you're a beginner developer, you may have heard of APIs, but you may want some clarification on what they are and how to use them. This article explains what an API is and why APIs are helpful. There's even a fun example to show you how to use APIs in your programming projects.


## What is an API?

An API (Application Programming Interface) allows your program to communicate and retrieve information from other software. An API interprets your request, engages the other application, and delivers a response back to your code. You can use an API to retrieve data or even implement features in your project without having to code them yourself.

For example, if you're developing a stock trading app, you can use an API to retrieve the latest stock prices. Or if your project plays a video, you can use a Media Player API to control your video's display and provide all the controls, such as Pause, Fast Forward, Rewind, etc. Rather than coding all of this functionality, you can let the API handle it and move on to more critical parts of your project.

An API allows you to use tools in your software project without understanding exactly how those tools work. Instead, you only need to know how to request data from the API and what data you'll receive in return.


## Examples of APIs
You can use APIs in many different ways. For example, you can use an API to:

* Retrieve status updates from social media apps like Facebook and Twitter.
* Logging into a service with your Google account information.
* Provide directions using Google Maps.
* Displaying the weather at a specific location.
* Sending texts to customers.
* Processing credit card payments.
* Checking flight information.


## The Benefits of Using an API
There are several benefits of using an API in your code:

* **Access to remote data**. For example, a SportScore API can bring in the latest football scores.
* **Increased Functionality**. You can offer Apple Pay to your customers with the Apple Pay API.
* **Time Saving**. Using the Twilio API, you can use APIs to send text messages to your customers without additional coding.
* **Abstraction. **Using an API allows you to take advantage of powerful functions without needing to know precisely how they work. For example, if you want to offer payment options within your app, you can use the PayPal API to handle payments instead of coding your own solution. That way, you can focus on your project's functional requirements. 


## How to Find APIs
There are hundreds of APIs available for you to use in your projects. [API List](https://apilist.fun/) is a comprehensive list of publicly available APIs and links to the documentation and other important information for each API.

Many APIs require Authentication of some sort, either by using a key or login information. The API documentation will let you know what you’ll need to use the API.


## Remote APIs
An API can be local to your machine (such as functions within your coding language). However, as you can see from the previous examples, we generally think of an API as a web-based tool used to communicate with a remote server.

Remote APIs provide several benefits for your project:


* **No need to store data locally.** Instead, you can use an API to search cloud databases for the information you need.
* **Increased computational power**. Instead of using your local machine's processing power, your code can leverage the processing power of a remote device.

Remote APIs frequently follow a standard called Representational State Transfer (REST). An API that follows the REST style is called a RESTful API. Most of the APIs you'll use in your projects can be considered RESTful.


## How RESTful APIs Work
RESTful APIs provide the ability to work with objects over the Internet. An object is simply a data structure with a specified set of attributes. 

Almost any piece of information can be considered an object, such as:

* Customer Information
* Product Descriptions
* Images
* Videos
* Documents
* Weather Forecasts

RESTful APIs provide access to data via a series of endpoints. An **endpoint** is a URL the API developer provides where your program can access the information it needs. 

When you need to retrieve data from a server via an API, you send a **request** to the API via the endpoint. In turn, the API retrieves the requested information from the server and returns it to your program as a **response**.
**![how APIs work](/how-apis-work.jpeg)**
You can use a RESTful API to retrieve object information (such as retrieving a customer’s address) or to manipulate an object (like updating a customer’s data with their new address). 


## Communicating with an API

RESTful APIs communicate between your program and the server using HTTP (Hypertext Transfer Protocol), just like your browser does when it requests a specific URL. 

For instance, here's what happens when you enter a URL into your browser's address bar:

1. Your browser requests the specified URL from a server by creating an HTTP request. This request asks to GET the page from the server. The GET command indicates that the browser only receives data from the server. It won't be making any changes.
2. The server receives the request from the client, generates the requested webpage, and sends back a response to the client containing the HTML code for the requested page.
3. The browser then renders the page from the HTML code.

**![HTTP request from browser to server](/http-request.jpeg)**
Remote APIs work in much the same way.

1. Your program sends a request to the API on a Server via an HTTP request.
2. The API on the server responds with the requested data.

**![HTTP request from program to API](/http-request-api.jpeg)**
Depending on the functionality of the API, an API can support any HTTP request, such as: GET, POST, PUT, PATCH, and DELETE.


## How API Data is Structured
API response data is typically structured using JSON (JavaScript Object Notation). JSON is a straightforward, lightweight data exchange format that can be easily understood. Most programming languages support taking a JSON string and turning it into a data object you can use.

Here’s an example JSON response from the Cat API, which returns a random photo of a cat from Tumblr.

```
[{
"id":"ebv",
"url":"https://cdn2.thecatapi.com/images/ebv.jpg",
"width":176,"height":540,
"breeds":[],
"favourite":{}
}]
```

## How to Use an API (Example with Chuck Norris Facts API)

Once you’ve found an API you want to use, the API documentation tells you the requirements for using the API (such as authentication needs, etc.), how to format requests, and what response you’ll receive.

Let’s look at a fun example. Here’s a simple web page that displays a random fact about the martial artist Chuck Norris whenever the user clicks a button.
**![Chuck Norris Joke](/chucknorris.png)**
There’s an API for that! The [Chuck Norris Facts API](https://api.chucknorris.io/) can present random Chuck Norris facts. 

The documentation doesn’t mention any authentication requirements, so we can assume we don’t need any authentication to use the API. You can use this API at any time, just by issuing a request to the endpoint.

To request a random fact about Chuck Norris:

```
GET https://api.chucknorris.io/jokes/random
```

Here’s an example of the JSON format response:


```
{
"icon_url" : "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
"id" : "NhalBjqFS6COQsskeoWhOQ",
"url" : "",
"value" : "Chuck Norris can create a rock so heavy that he couldn't lift it, and then lift it."
}
```
To display a random Chuck Norris joke in our project, we need to:

1. Issue a call to the Chuck Norris Facts API
2. Wait for the JSON response
3. Extract the joke text from the response
4. Display the joke on the page

This Javascript function does just that:
```
<table>
  <tr>
   <td> &lt;script>
     // define function as async         
     const getJoke = async () => {
            // fetch a random joke from the API and assign it to the constant res
            const res = await fetch('<a href="https://api.chucknorris.io/jokes/random">https://api.chucknorris.io/jokes/random</a>')
            // once we get a response, extract the json from the response and 
            // assign it to random_joke
            const random_joke = await res.json()

            // display the joke on the screen
            document.querySelector('p#joke-text').innerText = random_joke.value
            // hide the placeholder value
            document.querySelector('small').style.display = 'none'
        }
  &lt;/script>
   </td>
  </tr>
  <tr>
   <td>
   </td>
  </tr>
</table>
```


**![Chuck Norris Joke display in website](/jokeresult.png)**


Here’s the HTML code for the webpage that displays the joke.


```
 <head>
    <!-- This will show up on the tab in your browser -->
    <title>Chuck Norris Joke of the Day</title>
    <!-- Import bootstrap framework for styling -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <style>
        body {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background-color: #efefef;
        }
        
        .jokes-container {
            padding: 25px;
            box-shadow: 0 5px 12px rgba(0,0,0,0.4);
            background-color: #fff;
            color: #333;
            border-radius: 5px;
        }
    </style>        
</head>

<body>
    <div class="container text-center">
    <h1>Here's a joke for you from Chuck Norris</h1>
        <div class="jokes-container mb-4">
             <!-- Result from the API goes in this paragraph -->
             <p id="joke-text"></p>
             <!-- Placeholder text -->
             <small class = "text-muted">The joke is going to go here.</small>
        </div>
       
    
    <button type="button"
            class="btn btn-primary" onclick="getJoke()">Give Me One
    </button>
    </div>
    
    <script>
        const getJoke = async () => {
            const res = await fetch('https://api.chucknorris.io/jokes/random')
            const random_joke = await res.json()
            document.querySelector('p#joke-text').innerText = random_joke.value
            document.querySelector('small').style.display = 'none'
        }
    </script>
</body>
```

Check out https://github.com/ionos-deploy-now/API-example-project  to see this example in action.


## Automatically Deploy Your Project with Deploy Now 

While you’re mastering integrating APIs into your code, you’ll want an easy and convenient way to deploy your projects. Deploy Now offers a convenient toolset to automate builds and deployments for static websites and dynamic PHP applications from GitHub. Deploy Now can automatically create a deployment workflow with GitHub actions and easily deploy your project to IONOS’ secure infrastructure.

Find out [how to get started with Deploy Now](https://docs.ionos.space/docs/) or [get started using a sample project](https://docs.ionos.space/docs/framework-samples/).
