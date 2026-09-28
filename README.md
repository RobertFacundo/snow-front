# SnowFront

A Shopify storefront built from scratch to practice modern **Shopify Theme Development** and storefront architecture.

SnowFront is a hands-on learning project focused on building a realistic e-commerce experience using Shopify's native theme capabilities, Liquid, Vanilla JavaScript, and Shopify APIs.

The project is being developed incrementally, following a production-oriented workflow with Git feature branches, development themes, pull requests, and continuous iteration.

## 🎯 Project Goals

The main goal of SnowFront is to deepen my understanding of:

* Shopify Theme Architecture
* Liquid
* Shopify APIs
* Storefront localization
* Metafields and Metaobjects
* Product discovery and merchandising
* Progressive enhancement
* Vanilla JavaScript within Shopify Themes
* Reusable and maintainable theme components

Rather than reproducing functionality from previous projects, SnowFront focuses on exploring different parts of the Shopify ecosystem.

## 🛠️ Tech Stack

* Shopify Themes
* Shopify Liquid
* Vanilla JavaScript
* HTML
* CSS
* Shopify CLI
* Shopify APIs
* Git
* GitHub

React is intentionally not used in this project. The goal is to understand Shopify's native theme architecture and its interaction with Liquid, JavaScript, and the DOM.

## 🚀 Features

The storefront will progressively implement:

* 🌎 Language selector
* 💱 Country and currency selector
* 🧩 Product metafields
* 🧱 Metaobjects
* 🔎 Advanced collection filtering and sorting
* ⚡ Quick Add
* 👀 Product Quick View
* 🎯 Product recommendations
* ❤️ Wishlist / Favorites
* 👁️ Recently viewed products
* 🛒 Asynchronous add to cart

Additional Shopify-native features may be introduced as the project evolves.

## 🏗️ Architecture

SnowFront is based on Shopify's theme architecture:

```text
Layout
  ↓
Templates
  ↓
Sections
  ↓
Blocks
  ↓
Snippets
  ↓
Assets
```

Liquid is responsible primarily for Shopify data access and server-rendered markup, while Vanilla JavaScript is used for client-side interactions and progressive enhancement.

Shopify APIs are introduced when functionality requires dynamic data or asynchronous interactions.

## 📚 Learning Approach

This project is being developed feature by feature.

For each feature, the goal is not only to make it work, but to understand:

* Why the functionality belongs in Liquid, JavaScript, or a Shopify API.
* How it fits into Shopify's theme architecture.
* How the implementation can remain reusable and maintainable.
* What trade-offs different approaches introduce.
* How the implementation would translate to a production storefront.

## 🔀 Development Workflow

Development follows a Git-based workflow:

```text
Feature Branch
      ↓
Development Theme
      ↓
Testing
      ↓
Pull Request
      ↓
Merge
      ↓
Main
      ↓
Development Theme Verification
      ↓
Live Theme
```

## 📈 Project Status

🚧 **In development**

SnowFront is being built incrementally, with new functionality added and documented throughout the development process.

## 👨‍💻 About

Built by **Facundo Robert** as part of my ongoing preparation for a professional career as a **Shopify / Frontend Developer**.

The project is intended both as a technical learning environment and as a portfolio piece demonstrating practical Shopify Theme Development skills.
