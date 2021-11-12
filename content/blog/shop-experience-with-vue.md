---
description: ''
created: '2021-09-07'
author: 'robert-schleinhege'
tags:
  - guide
  - vue
  - ecommerce
---

# Building API-first eCommerce dashboards with Vue.js and Deploy Now

A modern eCommerce system should be tailored to both the needs of the visitor and the needs of the person maintaining the shop. A good UX for visitors alone isn't enough to make a shop project successful if managing shipping processes or customer requests is inconvenient for shop owners. [IONOS Agency Partner](https://www.ionos.com/agency-partner) Fruchtec specializes in building state-of-the-art eCommerce experiences. [Fruchtec](https://www.fruchtec.de/) combines a set of specialized services for a shop experience that feels smooth for their clients and their clients' clients. All these services talk to Vue.js client dashboards via API. 

## Defining a good shopping experience

> "Buying an item or service online has to feel like visiting a good restaurant. You enter and want to be greeted nicely. The offer is presented to you and you are guided through the location. You see and understand the products, but nothing is forced upon you. No artificial scarcity, no time pressure. And of course the service doesn't end with the order. You have a good feeling that the deliveries will arrive on time. You know who to contact for questions and if you don't like a product that's no problem." — Jonas, Co-founder of Fruchtec

Fruchtec view themselves as the construction company and the restaurant fitter, while their clients have to maintain and run the location. The objective is to make a buyer feel comfortable throughout the entire customer journey. This means that all processes that surround the buyer's customer journey, especially those involving action from the shop's staff, need to be well organized and supported by the right tools and technologies. 

## Merging the digital and physical world

For a good shopping experience, a holistic toolchain is required that accompanies both buyer-side and staff-side processes. These processes can be entirely digital — or involve physical activities. Most shop owners have to manage a warehouse. They need to track and refill their inventory, send out packages and manage returns. Many clients combine online and local stores. Customers can view items physically before buying or reserving them online and picking them up in store. Fruchtec's goal is not to replace human activities with tech. Instead they want to minimize human errors that cause bad customer experiences.

## Managing shop processes with API-first dashboards

Fruchtec's key approach is to outsource different parts of the eCommerce experience to specialized services. All these services are connected to dashboards that are designed around different use cases for the shop's staff. By doing this, Fruchtec follows an API-first approach. 

> "The API-first approach refers to a strategy in software development where an application programming interface (API) is created before any code is written. An API, of course, is a type of software that lets an application obtain data from another one. It allows various applications to communicate with one another." — Techslang.com

API-first allows a complete decoupling of frontend and backend. Backend applications can be reused and connected to different client dashboards. The requirements of a dashboard in the warehouse that eases the shipping process differs from a dashboard for a stakeholder that manages marketing campaigns or customer requests. A decoupled approach makes it possible to assemble the right information for the right use case. Another big advantage is that sources of error are separated and easier to identify. Even if a single backend component fails, the frontend can still run and can display information about the problem. Different technologies can be used for different services and single services can be easily replaced as long as the API doesn't change.

## Fruchtec's recommendations for a powerful eCommerce setup 

<picture>
  <source media="(max-width: 999px)" srcset="/fruchtec-architecture-sm.png">
  <img src="/fruchtec-architecture-lg.png" alt="vue js ecommerce dashboard">
</picture>

### Vue.js for customer dashboards

Fruchtec recommends Vue.js for building dashboards frontend. [Vue](https://vuejs.org/) is an open-source JavaScript framework for building single page applications and user interfaces. Fruchtec likes the fact that many of the positive aspects that can be found in React and Angular individually are merged into a single framework. They enjoy working with Vue-based UI libraries like [Vuetify](https://vuetifyjs.com/en/) and [BootstrapVue](https://bootstrap-vue.org/). Thanks to its adoptability and scalability, Vue is equally suitable for beginners and large enterprises. The framework makes it easy to follow clean code rules and comes with a large community that can help with learning best practices. Fruchtec develops and deploys their Vue frontends with Deploy Now. The staging functionality allows them to work on new dashboard components without affecting their clients' current business operations. 

### Shopify for the online shop system

The shop logic and frontends are built with [Shopify](https://www.shopify.com/). Shopify has a broad offering ranging from affordable packages for small businesses to large, cloud-based shop systems with Shopify Plus. A large app store allows users to easily connect marketing, accounting, buying and delivery processes to their shops. Fruchtec especially enjoys working with Liquid, an open-source templating language that can be used for building shop logics. The biggest advantage of Shopify is their sophisticated [API](https://shopify.dev/api), which is used by Fruchtec to talk to various dashboards and services. An Admin API provides access to product, order and customer data whereas a separate Storefront API can be used to bring shop functionalities to any touchpoint. As Shopify also offers GitHub integration, combining Deploy Now and Shopify allows Fruchtec to manage a majority of their code in the same place. Developers can push changes to shop themes and can instantly preview changes including the shop's live data.

### Sendcloud for the shipping process

Shipping orders is often the most manual eCommerce process. Fruchtec uses [Sendcloud](https://www.sendcloud.com/) to simplify this process. Sendcloud specializes in label creation, delivery tracking, picking and packing, as well as managing returns. The platform allows easy integration with Shopify and any dashboard via API.

### Zendesk for customer service

Customer service touchpoints have a large impact on the satisfaction of shop visitors, but also play a large role in the satisfaction of Fruchtec's clients. With the help of [Zendesk](https://www.zendesk.com/), Fruchtec installs a ticket queue in which product-specific questions are forwarded to the shop owners, whereas technical issues are directly forwarded to Fruchtec. If a visitor has a technical issue with creating an account for example, the issue is instantly forwarded to a developer. This way, issues can be fixed immediately — and shop owners can focus on their business. 

### Placetel for managing phone calls

Even though a lot of communication happens via digital channels, many shoppers like to speak to someone in person. Fruchtec recommends [Placetel](https://www.placetel.com/gb) for managing phone communication. Placetel describes itself as a cloud phone system, which means that the solution is entirely software based, hosted in the cloud and operates calls via Voice over IP. Placetel easily integrates with any software where client information is managed.

## Tips for getting started with Vue.js and API-first eCommerce systems

### 1. Learn the basic concepts of Vue
Fruchtec highly recommends [Vue Mastery](https://www.vuemastery.com/) for learning the fundamentals of Vue. Vue Mastery offers free and paid courses as well as team discounts.
### 2. Learn how to use APIs
The next step is to understand the concept and handling of APIs in general. How do I open connections? What are asynchronous calls? A fun way to do this is playing around with [chucknorris.io](https://api.chucknorris.io/), a free API that provides facts about Chuck Norris.
### 3. Experiment with the Shopify API
Once the API concept is understood, it makes sense to work with Shopify's specific API. All information needed to get started can be found in the [documentation](https://shopify.dev/api). 
### 4. Host a frontend on Deploy Now and start with the first integrations
Deploy your Vue frontend instantly from your GitHub account to IONOS' in-house engineered infrastructure. Push new code to your repository and your website code is updated instantly. A step-by-step guide to setting up your deployment can be found [here](https://docs.ionos.space/docs/). 

