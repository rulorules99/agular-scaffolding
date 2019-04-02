# AgularScaffolding

A scaffolding in angular 7 to include auth and main strucrure to start projects.

## Quick start

- For start with angular scaffolding,  we start create a repo and copy this structure to that

### Create a repository

In the current example we create from [BITBUCKET](https://bitbucket.org/)

![alt text](https://firebasestorage.googleapis.com/v0/b/files-b13c3.appspot.com/o/angular-scaffolding%2Fcreate%20step%201.png?alt=media)
 We need to create only a repo put a name and click on create repository button.
![alt text](https://firebasestorage.googleapis.com/v0/b/files-b13c3.appspot.com/o/angular-scaffolding%2Fcreate%20step%202-1.png?alt=media)
![alt text](https://firebasestorage.googleapis.com/v0/b/files-b13c3.appspot.com/o/angular-scaffolding%2Fcreate%20step%202.png?alt=media)
![alt text](https://firebasestorage.googleapis.com/v0/b/files-b13c3.appspot.com/o/angular-scaffolding%2Fcreate%20step%203.png?alt=media)

- In console we have to clone a repo and following the next commands.
```
>$ git clone https://github.com/rulorules99/angular-scaffolding.git
>$ cd angular-scaffolding
>$ ./init_repo https://rulorules99@bitbucket.org/rulorules99/example.git
>$ ./init name-of-project
```

- In the last step i used `https://rulorules99@bitbucket.org/rulorules99/example.git` that was my repo create 
you must change for you own repository.


## Scaffolding

```
src/
├── app/
│   ├── core/
│   │   ├── components/
│   │   |   └── index.ts
│   │   ├── constants/
│   │   |   └── index.ts
│   │   ├── directives/
│   │   |   └── index.ts
│   │   ├── forms/
│   │   |   └── index.ts
│   │   ├── interfaces/
│   │   |   └── index.ts
│   │   ├── modules/
│   │   |   └── index.ts
│   │   ├── pipes/
│   │   |   └── index.ts
│   │   └── services/
│   │       ├── auth/
│   │       |   ├── auth.service.ts
│   │       |   ├── auth-guard.service.ts
│   │       |   └── auth-guard-login.service.ts
│   │       ├── http/
│   │       |   └── api-http.interceptor.ts
│   │       └── index.ts
│   └── shared/
│       ├── material.module.ts
│       └── shared.module.ts
└── assets/
    ├── img/
    └── scss/
        ├── base/
        │   └── _all.scss
        ├── components/
        │   └── _all.scss
        ├── generic/
        │   └── _all.scss
        ├── settings/
        │   └── _all.scss
        ├── tools/
        │   └── _all.scss
        ├── trumps/
        │   └── _all.scss 
        └── styles.scss
```

# Document
- Now we see how folders are included and what contains 

## Core

### Components
- In components we will create a component
```
>$ ng g c core/components/name-of-component
```
or
```
>$ ng generate component core/components/name-of-component
```
Then export the component in the index folder `src/app/core/components/index.ts` add the next line for each component created

``` javascript
export * from './name-of-component/name-of-component.component';
```

### Constants
- In constants we will create a constant class you will create manually

Then export the Constant in the index folder `src/app/core/constants/index.ts` add the next line for each constant created

``` javascript
export * from './path/to/constant';
```

### Directives
- In directives we will create a directive
```
>$ ng g d core/directives/name-of-directive
```
or
```
>$ ng generate directive core/directives/name-of-directive
```
Then export the directive in the index folder `src/app/core/directives/index.ts` add the next line for each directive created

``` javascript
export * from export * from './name-of-directive.directive';
```

### Forms
- In forms we will create a form class
``` javascript
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class ExampleForm  {
    public exampleForm: FormGroup = new FormGroup({
        field: new FormControl('', Validators.required),
    });
}
```
Then export the form class in the index folder `src/app/core/forms/index.ts` add the next line for each form created

``` javascript
export * from export * from './example-form';
```
Usage in components `But remember` you nedd to add first in `module` of component.

``` javascript
import { ExampleForm } from '../../forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
})
export class ExampleComponent {
  constructor(public form: LoginForm) {}
}
```

### Interfaces
- In interfaces we will create a Interface you will create manually

Then export the Interface in the index folder `src/app/core/interfaces/index.ts` add the next line for each interface created

``` javascript
export * from './path/to/interface';
```

### Modules
- In modules we will create a module
```
>$ ng g m core/modules/name-of-module --routing
```
or
```
>$ ng generate module core/modules/name-of-module
```
Then export the module in the index folder `src/app/core/modules/index.ts` add the next line for each module created

``` javascript
export * from export * from './name-of-module.module';
```

### Pipes
- In pipes we will create a pipe
```
>$ ng g p core/pipes/name-of-pipe
```
or
```
>$ ng generate pipe core/pipes/name-of-pipe
```
Then export the pipe in the index folder `src/app/core/pipes/index.ts` add the next line for each pipe created

``` javascript
export * from export * from './name-of-pipe.pipe';
```

### Services
- In services we will create a service
```
>$ ng g s core/services/name-of-service
```
or
```
>$ ng generate service core/services/name-of-service
```
Then export the service in the index folder `src/app/core/services/index.ts` add the next line for each service created

``` javascript
export * from export * from './name-of-service.service';
```

## Generate resources
For generate componets, services .... etc etc see the next links 
[here](https://angular.io/cli/generate) 
[here](https://angular.io/guide/lazy-loading-ngmodules)
 
## Shared

- In `app/shared/material.module.ts` we going to include all of angular material for export their modules
- In `app/shared/shared.module.ts` we going to include all of own custom modules for export in complete app

## Assets

### img

- We going to include all images and icons for app

### Scss
- We going to include all styles for app

### base
- Default styling on elements without classes, such as typography (h1, h2, etc) and base elements (html, body).
- Then import the file in the file `src/assets/scss/base/_all.scss` add the next line for each created

```scss
@import "path/relative/all";
```

### components
- Defined parts of the site (navigation, header, footer, carousel) selected with classes, using BEM where appropriate.
- Then import the file in the file `src/assets/scss/components/_all.scss` add the next line for each created

```scss
@import "path/relative/all";
```

### generic
- Very far reaching selectors. CSS resets where elements are selected directly and restting non-standard form behaviours.
- Then import the file in the file `src/assets/scss/generic/_all.scss` add the next line for each created

```scss
@import "path/relative/all";
```

### settings
- Global SASS variables, maps, etc.
- Then import the file in the file `src/assets/scss/settings/_all.scss` add the next line for each created

```scss
@import "path/relative/all";
```

### tools
-  SASS functions and mixins.
- Then import the file in the file `src/assets/scss/tools/_all.scss` add the next line for each created

```scss
@import "path/relative/all";
```

### trumps
- Overrides, helpers, utilities and shame. The highest specificity and/or classes/properties that must always 'win', using the cascade to beat earlier properties.
- Then import the file in the file `src/assets/scss/trumps/_all.scss` add the next line for each created

```scss
@import "path/relative/all";
```

## Using Matherial theme 
If you want use a material theme and not your own you can comment the next lines in `src/assets/scss/styles.scss`
```scss

// @import "settings/all";

// @import "tools/all";

// @import "generic/all";

// @import "base/all";

// @import "components/all";

// @import "trumps/all";
```
and then add in the bottom the select angular material theme, example

```scss
....
@import '@angular/material/prebuilt-themes/deeppurple-amber.css';
```

For more information about custom theme of angular material [HERE](https://material.angular.io/guide/theming)

