# tce-template-vue2

Template project to quickly get started developing custom content elements.

> **:warning: DISCLAIMER**
> The project is in early prototype phase. More info will be added later.

## Description

This project is a starting point used for developing custom content elements
for [Tailor](https://github.com/ExtensionEngine/tailor).
It is intended to get you up and running quickly by bootstraping the application
structure and setting base default properties.

## Requirements

- Node & npm

## Setup

The project is already preconfigured with certain defaults,
however it is necessary to go through some properties and modify the values
for the purposes of your specific custom content element.

#### Instructions

1. Run `npx @tailor-cms/tce-vue2` and follow the instructions to setup the project

#### `content-element` folder

##### Folder structure
<ul>
  <li>index.js - contains custom element manifest</li>
  <li>display subfolder
    <ul>
      <li>index.js - main file for the display version on the content element</li>
    </ul>
  </li>
  <li>edit subfolder
    <ul>
      <li>index.js - main file for the edit version of the content element</li>
      <li>TopToolbar.js - file for top toolbar used in the edit version, optional</li>
      <li>SideToolbar.js - file for side toolbar used in the edit version, optional</li>
    </ul>
  </li>
</ul>

Add code for the edit component of your element to `edit/index.vue` file. If the element
supports them, you can also add code for top toolbar and side toolbar in the designated
files. In the same manner add code for the display component to `display/index.vue` file. 
You can choose any kind of component composition, however only root `Edit` and `Display`
components can be exposed as a part of the element's interface. 
The `initState` function can optionally be specified 
to return the initial state of that data.
Make sure to edit the relevant properties of the manifest in `index.js` file.

#### `preview` folder

The intent of the previewer is to provide a development environment outside
of Tailor CMS and other external systems. That way, you're able to get early 
feedback on the element you're building and test it in isolation.
Previewer supports sharing common properties between edit and display states if those exist.
Look for the comments and placeholders in the code to wire up the components.

#### Used technologies

The project currently uses Vue 2, Vite and Vuetify 2.
