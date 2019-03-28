# AgularScaffolding

A scaffolding in angular 7 to include auth and main strucrure to start projects.

## Quick start

- For start with angular scaffolding,  we start create a repo and copy this structure to that

### Create a repository

In the current example we create from [BITBUCKET](https://bitbucket.org/)

![alt text](https://firebasestorage.googleapis.com/v0/b/files-b13c3.appspot.com/o/angular-scaffolding%2Fcreate%20step%201.png?alt=media)

1. Then we have tow ways to do this the first is with bitbucket GUI, you must click in `import repository`

![alt text](https://firebasestorage.googleapis.com/v0/b/files-b13c3.appspot.com/o/angular-scaffolding%2Fcreate%20step%202-1.png?alt=media)

- Then you need to add `https://github.com/rulorules99/angular-scaffolding.git`to URL input and click on import repository button you and will see the next screens.
![alt text](https://firebasestorage.googleapis.com/v0/b/files-b13c3.appspot.com/o/angular-scaffolding%2Fcreate%20step%202-2.png?alt=media)
![alt text](https://firebasestorage.googleapis.com/v0/b/files-b13c3.appspot.com/o/angular-scaffolding%2Fcreate%20step%202-3.png?alt=media)
![alt text](https://firebasestorage.googleapis.com/v0/b/files-b13c3.appspot.com/o/angular-scaffolding%2Fcreate%20step%202-4.png?alt=media)

2. The second way is by console, we need to create only a repo put a name and click on create repository button.

![alt text](https://firebasestorage.googleapis.com/v0/b/files-b13c3.appspot.com/o/angular-scaffolding%2Fcreate%20step%202-1.png?alt=media)
![alt text](https://firebasestorage.googleapis.com/v0/b/files-b13c3.appspot.com/o/angular-scaffolding%2Fcreate%20step%202.png?alt=media)
![alt text](https://firebasestorage.googleapis.com/v0/b/files-b13c3.appspot.com/o/angular-scaffolding%2Fcreate%20step%203.png?alt=media)

- In console we have to clone a repo and following the next commands.
```
>$ git clone https://github.com/rulorules99/angular-scaffolding.git
>$ cd angular-scaffolding 
>$ sudo rm -r .git 
>$ git init
>$ git add -A
>$ git commit -m "first commit"
>$ git remote add origin https://rulorules99@bitbucket.org/rulorules99/example.git
>$ git push -u origin master
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

## Document
- Now we see how folders are included and what contains 

### Components
- In component we will create a components
```
>$ ng g c core/components/name-of-component
```
or
```
>$ ng generate component core/components/name-of-component
```
Then expot the component in the index folder `src/app/core/components/index.ts` add the next line for each component created

``` javascript
export * from './name-of-component/name-of-component.component';
```

### Constants
- In constants we will create a constants clases you will create manually

Then export the component in the index folder `src/app/core/constants/index.ts` add the next line for each constants created

``` javascript
export * from './path/to/constant';
```

### Directives
- In directives we will create a directives
```
>$ ng g d core/directives/name-of-directive
```
or
```
>$ ng generate directive core/directives/name-of-directive
```
Then export the component in the index folder `src/app/core/directives/index.ts` add the next line for each component created

``` javascript
export * from export * from './name-of-directive.directive';
```

### Forms
- In forms we will create a forms classes
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


