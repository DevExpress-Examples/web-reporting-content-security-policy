<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/913785416/24.2.6%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T1272769)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
[![](https://img.shields.io/badge/💬_Leave_Feedback-feecdd?style=flat-square)](#does-this-example-address-your-development-requirementsobjectives)
<!-- default badges end -->
# Reporting for Web - Content Security Policy in Single-Page Applications (Angular, React, Vue)

This repository contains sample projects that activate Content Security Policy for DevExpress Reporting Components. Project for the following platforms are included: Angular, React, and Vue.


>[!Important]
>Code in this example is not production-ready. Each project serves as a playground where you can experiment with various CSP settings.

A [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP) is an additional layer of security built into most modern browsers. It allows the browser to recognize and mitigate certain types of risks, including Cross-Site Scripting (XSS) and data injection attacks. These attacks may aim to steal data, distribute malware, and direct users to spoof pages/sites.

The following code snippet shows the minimum required CSP for Reporting Components:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self';
img-src 'self' data:;
script-src 'self';
style-src 'self';
connect-src 'self' http://localhost:5000;
worker-src 'self' blob:;
frame-src 'self' blob:;" />
```

Print operations in Web Document Viewer and Web Report Designer Preview may require additional hashes. Refer to the following Chromium bug report for more information: [Chromium -- Chrome does not display PDF content if Content Security Policy (CSP) is in effect](https://issues.chromium.org/issues/40328564).

> [!IMPORTANT]
> In this example, we are using the placeholder `nonce-randomNonceGoesHere` to denote the nonce. You need to generate a cryptographically strong random value, unique for each HTTP request. 
> For more information, refer to the following article: [HTML nonce global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/nonce).

## General Recommendations

When integrating CSP in your application with DevExpress Reporting Components, consider the following:

- The application's CSP depends on the framework configuration and build tooling. If issues arise, check your browser’s CSP violation report (usually visible in DevTools) to identify the error source. This information may help you adjust your policy or build settings.
- Web Report Designer uses the Knockout.js library. This library relies on dynamic code execution and requires the `unsafe-eval` source expression in the `script-src` directive. To overcome this limitation, the workaround with the *knockout_global.js* file is used to avoid unsafe code execution.
- DevExtreme Material themes contain links to fonts hosted on Google services (`https://fonts.googleapis.com`). Do one of the following: 
    - Include font URLs in the Content Security Policy.
    - Replace links and fallbacks with local Google font files. To do this, check the "Remove external resources" option when exporting a theme in our Theme Builder.

    
        Refer to the following help article for additional information: [Theme Builder - Export the Resulting Theme](https://js.devexpress.com/jQuery/Documentation/Guide/Themes_and_Styles/ThemeBuilder/#Export_the_Resulting_Theme).
- Running the app in debug mode may require additional permissions compared to a published application. For example, during a debug session, a WebSocket connection may be established to reload your app automatically on any source code change.

## Run the Project

Run the server application. To do this, execute the following command from the *ServerApp* folder:


```cmd
dotnet run
```

To run a client application, execute the following commands from the folder with the required component (for example, *angular/viewer* or *vue/designer*):


```cmd
npm install
npm start
```

## Files to Review

### Angular

**Native Angular Viewer:**

- [index.html](/angular/viewer/src/index.html)
- [app.config.ts](/angular/viewer/src/app/app.config.ts)
- [angular.json](/angular/viewer/angular.json)

**Report Designer:**

- [index.html](/angular/designer/src/index.html)
- [app.config.ts](/angular/designer/src/app/app.config.ts)
- [angular.json](/angular/designer/angular.json)

### React

**Native React Viewer:**

- [index.html](/react/viewer/index.html)

**Report Designer:**

- [index.html](/react/designer/index.html)

### Vue

**Report Designer:**

- [index.html](/vue/designer/index.html)

## Documentation

- [Content Security Policy for DevExpress Reports (Angular)](https://docs.devexpress.com/XtraReports/404552/web-reporting/angular-reporting/content-security-policy)
- [Content Security Policy for DevExpress Reports (React)](https://docs.devexpress.com/XtraReports/404557/web-reporting/react-reporting/content-security-policy)
- [Content Security Policy for DevExpress Reports (Vue)](https://docs.devexpress.com/XtraReports/404558/web-reporting/vue-reporting/content-security-policy)
- [How to Use DevExpress Controls with Content Security Policy (CSP)](https://docs.devexpress.com/GeneralInformation/404541/security/content-security-policy)

## More Examples

- [Reporting for ASP.NET Core - Content Security Policy (CSP)](https://github.com/DevExpress-Examples/reporting-asp-net-core-content-security-policy)

<!-- feedback -->
## Does this example address your development requirements/objectives?

[<img src="https://www.devexpress.com/support/examples/i/yes-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=web-reporting-content-security-policy&~~~was_helpful=yes) [<img src="https://www.devexpress.com/support/examples/i/no-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=web-reporting-content-security-policy&~~~was_helpful=no)

(you will be redirected to DevExpress.com to submit your response)
<!-- feedback end -->

