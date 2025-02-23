<!-- default badges list -->
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T1272769)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
[![](https://img.shields.io/badge/💬_Leave_Feedback-feecdd?style=flat-square)](#does-this-example-address-your-development-requirementsobjectives)
<!-- default badges end -->
# Reporting for Web - Content Security Policy
This repository contains sample Angular, React and Vue projects with integrated Web Document Viewer and Web Report Designer components. 

## Angular 

The Native Report Viewer and Report Designer are integrated to an Angular project created with Angular CLI.
For more information on CSP in Angular framework, refer to the following documentation article: [Content Security Policy](https://angular.dev/best-practices/security#content-security-policy).

The following meta tag shows the minimum required CSP for our reporting controls:  

```html
  <meta http-equiv="Content-Security-Policy" content="default-src 'self';
  img-src data: https: http:;
  script-src 'self';
  style-src 'self' 'nonce-random_nonce_value';
  connect-src 'self' http://localhost:5000;
  worker-src 'self' blob:;
  frame-src 'self' blob:;" />
```

> [!IMPORTANT]
> We are using the placeholder random-nonce-value to denote the nonce in sample projects. You need to generate a random number, unique for each HTTP request.

### Run the Project

Run the server application. To do this, run the following command from the *ServerApp* folder:

```cmd
dotnet run
```

To run the client application, run the following commands:

```cmd
npm install
npm start
```

### Files to Review

**Viewer:**

- [index.html](/angular/viewer/src/index.html)
- [app.config.ts](/angular/viewer/src/app/app.config.ts)
- [angular.json](/angular/viewer/angular.json)

**Designer:**

- [index.html](/angular/designer/src/index.html)
- [app.config.ts](/angular/designer/src/app/app.config.ts)
- [angular.json](/angular/designer/angular.json)

### Documentation

- [Content Security Policy in Angular Apps](https://docs.devexpress.com/XtraReports/404552/web-reporting/angular-reporting/content-security-policy)


## React

### Vite

The *vite* folder contains Vue applications created with [Vite](https://vite.dev/guide/).

For more information on CSP in Vite-based apps, refer to the following article: [Content Security Policy (CSP)](https://vite.dev/guide/features#content-security-policy-csp). 

The following meta tag shows the minimum required CSP for our reporting controls:  

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self';
img-src data: https: http:;
script-src 'self';
style-src 'self' 'nonce-random_nonce_value';
connect-src 'self' http://localhost:5000;
worker-src 'self' blob:;
frame-src 'self' blob:;" />
```

> [!IMPORTANT]
> We are using the placeholder `random-nonce-value` to denote the nonce in sample projects. You need to generate a random number, unique for each HTTP request.

#### Run the Project

Run the server application. To do this, run the following command from the *ServerApp* folder:

```cmd
dotnet run
```

To run the client application, run the following commands:

```cmd
npm install
npm run dev
```

#### Files to Review

**Viewer:**

- [index.html](/react/vite/viewer/index.html)
- [vite.config.js](/react/vite/viewer/vite.config.js)

**Designer:**

- [index.html](/react/vite/designer/index.html)
- [vite.config.js](/react/vite/designer/vite.config.js)

### Next.js

The *nextjs* folder contains Vue applications created with [Next.js](https://nextjs.org/).

For more information on CSP in Next.js apps, refer to the following article: [Content Security Policy (CSP)](https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy). 

#### Run the Project

Run the server application. To do this, run the following command from the *ServerApp* folder:

```cmd
dotnet run
```

To run the client application, run the following commands:

```cmd
npm install
npm run dev
```

#### Files to Review

**Viewer:**

**Designer:**


## Vue

### Vite

The *vite* folder contains Vue applications created with [Vite](https://vite.dev/guide/).

For more information on CSP in Vite-based apps, refer to the following article: [Content Security Policy (CSP)](https://vite.dev/guide/features#content-security-policy-csp). 

The following meta tag shows the minimum required CSP for our reporting controls:  


```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self';
img-src data: https: http:;
script-src 'self';
style-src 'self' 'nonce-random_nonce_value';
connect-src 'self' http://localhost:5000;
worker-src 'self' blob:;
frame-src 'self' blob:;" />
```

> [!IMPORTANT]
> We are using the placeholder `random-nonce-value` to denote the nonce in sample projects. You need to generate a random number, unique for each HTTP request.

#### Run the Project

Run the server application. To do this, run the following command from the *ServerApp* folder:

```cmd
dotnet run
```

To run the client application, run the following commands:

```cmd
npm install
npm run dev
```

#### Files to Review

**Viewer:**

- [index.html](/vue/vite/viewer/index.html)
- [vite.config.js](/vue/vite/viewer/vite.config.js)

**Designer:**

- [index.html](/vue/vite/designer/index.html)
- [vite.config.js](/vue/vite/designer/vite.config.js)

### Vue CLI

The *vue-cli* folder contains Vue applications created with [Vue CLI](https://cli.vuejs.org/).

The following meta tag shows the minimum required CSP for our reporting controls:  

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self';
img-src data: https: http:;
script-src 'self';
style-src 'self' 'unsafe-inline';
connect-src 'self' http://localhost:5000 ws:;
worker-src 'self' blob:;
frame-src 'self' blob:;" />
```

#### Run the Project

Run the server application. To do this, run the following command from the *ServerApp* folder:

```cmd
dotnet run
```

To run the client application, run the following commands:

```cmd
npm install
npm run serve
```

#### Files to Review

**Viewer:**

- [index.html](/vue/vue-cli/viewer/public/index.html)
- [vue.config.js](/vue/vue-cli/viewer/vue.config.js)

**Designer:**

- [index.html](/vue/vue-cli/viewer/public/index.html)
- [vue.config.js](/vue/vue-cli/viewer/vue.config.js)

### Documentation

- [Content Security Policy in Vue Apps](https://docs.devexpress.com/XtraReports/404558/web-reporting/vue-reporting/content-security-policy)

## More Examples

- [Reporting for ASP.NET Core - Content Security Policy (CSP)](https://github.com/DevExpress-Examples/reporting-asp-net-core-content-security-policy)

<!-- feedback -->
## Does this example address your development requirements/objectives?

[<img src="https://www.devexpress.com/support/examples/i/yes-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=web-reporting-content-security-policy&~~~was_helpful=yes) [<img src="https://www.devexpress.com/support/examples/i/no-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=web-reporting-content-security-policy&~~~was_helpful=no)

(you will be redirected to DevExpress.com to submit your response)
<!-- feedback end -->
