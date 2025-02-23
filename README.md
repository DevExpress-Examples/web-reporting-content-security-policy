<!-- default badges list -->
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T1272769)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
[![](https://img.shields.io/badge/💬_Leave_Feedback-feecdd?style=flat-square)](#does-this-example-address-your-development-requirementsobjectives)
<!-- default badges end -->
# Product/Platform - Task

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

#### Run the Project

#### Files to Review

## More Examples

- link
- link
- ...
<!-- feedback -->
## Does this example address your development requirements/objectives?

[<img src="https://www.devexpress.com/support/examples/i/yes-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=web-reporting-content-security-policy&~~~was_helpful=yes) [<img src="https://www.devexpress.com/support/examples/i/no-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=web-reporting-content-security-policy&~~~was_helpful=no)

(you will be redirected to DevExpress.com to submit your response)
<!-- feedback end -->
