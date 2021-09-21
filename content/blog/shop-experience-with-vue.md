---
description: ''
created: '2021-09-07'
---

# Building API-first eCommerce Dashboards with Vue.js and Deploy Now

A modern eCommerce system is both tailored to the needs of the visitor and the maintainer of the shop. A good UX for visitors alone does not make a shop project successful if managing shipping processes or customer requests is too cumbersome for shop owners. [IONOS Agency Partner](https://www.ionos.com/agency-partner) Fruchtec is specialized in building state-of-the-art eCommerce experiences. [Fruchtec](https://www.fruchtec.de/) combines a set of specialized services for a shop experience that feels smooth for their clients and their client's clients. All these services talk to to a Vue.js client dashboards via API. 

## A good shop experience defined

> "Buying an item or service online has to feel like visiting a good restaurant. You enter and want to be greeted nicely. The offer is presented to you and you are guided through the location. You see and understand the products, but nothing is forced upon you. No artificial scarcity, no time pressure. And of course the service doesn't end with the order. You have a good feeling that the deliveries will arrive on time. You know who to contact for questions and if you don't like a product that's no problem." - Jonas, Co-founder Fruchtec

Fruchtec views themselves as the construction company and the fitter of the restaurant, whereas their clients have to maintain and run the location. The objective is to always make a buyer feel comfortable, along his entire customer journey. This requires that all processes that surround the buyer's customer journey, especially those that involve action by the shop's staff, are well organized and supported by the right tools and technologies. 

## Merging the digital and physical world

For a good shopping experience, a holistic toolchain is required that accompanies both buyer-side and staff-side processes. These processes can be entirely digital - or involve physical activities. Most shop owners have to manage a warehouse. They need to track and refill their inventory, send out packages and manage returns. Many clients combine online and local stores. Customers can view items physically before buying them online or reserving them online and picking them up in the store. Fruchtec's goal is not to replace human activities with tech. Instead they want to minimize human errors that cause bad customer experiences.

## Managing shop processes with API-first dashboards

Fruchtec's key approach is to outsource different parts of an eCommerce experience to specialized services. All these services are connected to dashboards that are designed around certain use cases of the shop's staff. By doing this, Fruchtec follows an API-first approach. 

> "The API-first approach refers to a strategy in software development where an application programming interface (API) is created before any code is written. An API, of course, is a type of software that lets an application obtain data from another. It allows various applications to communicate with one another." - Techslang.com

API-first allows a complete decoupling of frontend and backend. Backend applications can be reused and connected to different client dashboards. The requirements of a dashboard in the warehouse that eases the shipping process differs from a dashboard for a stakeholder that manages the marketing campaigns or customer requests. A decoupled approach allows to glue the right information together for the right use case. Another big advantage is that sources of error are separated and easier to identify. Even if a single backend component fails, the frontend can still run and can display information about the problem. Different technologies can be used for different services and single services can be easily replaced as long as the API doesn't change.

## Fruchtec's recommendations for a powerful eCommerce setup 


<img src="/fruchtec-architecture-dark.png" alt="vue js ecommerce dashboard" />

### Vue.js for customer dashboards

Fruchtec recommends Vue.js for building dashboards frontend. [Vue](https://vuejs.org/) is an open-source JavaScript framework for building single page applications and user interfaces. Fruchtec likes that many positive aspects that can be found in React and Angular individually are merged into a single framework. They enjoy working with Vue-based UI libraries like [Vuetify](https://vuetifyjs.com/en/) and [BootstrapVue](https://bootstrap-vue.org/). Thanks to its adoptability and scalability, Vue is equally suitable for beginners as well as large enterprises. The framework makes it easy to follow clean code rules and comes with a large community that can help with learning best practices. Fruchtec develops and deploys their Vue frontends with Deploy Now. The staging functionality allows them to work on new dashboard components without affecting their clients' running business. 

### Shopify for the online shop system

The shop logic and frontends are build with [Shopify](https://www.shopify.com/). Shopify has a broad offering ranging from affordable packages for small businesses to large, cloud-based shop system with Shopify Plus. A large App Store allows users to easily connect marketing, accounting, buying and delivery processes to their shops. Fruchtec especially enjoys to work with Liquid, an open-source templating language that can be used for building shop logics. The biggest advantage of Shopify is their sophisticated [API](https://shopify.dev/api), which is used by Fruchtec to talk to various dashboards and services. An Admin API provides access to product, order and customer data whereas a seperated Storefront API can be used to take shop functionalities to any touchpoint. As Shopify also offers a GitHub integration, combining Deploy Now and Shopify allows Fruchtec to manage a majority of their code in the same place. Developers can push changes to shop themes and can instantly preview changes including the shops live data.

### Sendcloud for the shipping process

The shipping of orders is oftentimes the most manual process of an eCommerce. Fruchtec uses [Sendcloud](https://www.sendcloud.com/) to simplify this process. Sendcloud is specialized on label creation, delivery tracking, picking & packing as well as managing returns. The platform allows easy integrations to Shopify and to any dashboard via API.

### Zendesk for customer service

Customer service touch points have a large impact on the satisfaction of shop visitors, but also play a large role in the satisfaction of Fruchtec's clients. With the help of [Zendesk](https://www.zendesk.com/), Fruchtec installs a ticket queue in which product specific questions are forwarded to the shop owners, whereas technical issues are directly forwarded to Fruchtec. If a visitor has a technical issue with creating an account for example, the issue is instantly forwarded to a developer. Thus, issues can be fixed immediately - and shop owners can focus on their business. 

### Placetel for managing phone calls

Even though a lot of communication happens via digital channels, many shop customers like to speak to someone in person. Fruchtec recommends [Placetel](https://www.placetel.com/gb) for managing phone communication. Placetel refers to themselves as a cloud phone system, which means that that their solution is entirely software-based, hosted in the cloud and operates calls via Voice over IP. Placetel easily integrates with any software where client information is managed.

## Tipps for getting started with Vue.js and API-first eCommerce systems

### 1. Learn the basic concepts of Vue
Fruchtec highly recommends [Vue Mastery](https://www.vuemastery.com/) to learn the fundamentals of Vue. Vue Mastery offers free and paid courses as well as team discounts.
### 2. Learn how to use APIs
The next step would be to understand the concept and handling of APIs in general. How do I open connections? What are asynchronous calls? A fun way to do this is playing around with [chucknorris.io](https://api.chucknorris.io/), a free API that provides facts about Chuck Norris.
### 3. Experiment with the Shopify API
Once the API concept is understood, it makes sense to work with Shopify's specific API. All information needed to get started can be found in the [documentation](https://shopify.dev/api). 
### 4. Host a frontend on Deploy Now and start with the first integrations
Deploy your Vue frontend instantly from your GitHub account to IONOS inhouse engineered infrastructure. Push new code to you repository and your website code is updated instantly. A step by step guide about how to set up your deployment can be found [here](https://docs.ionos.space/docs/). 

