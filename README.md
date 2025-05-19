<!-- default badges list -->
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T1272769)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
[![](https://img.shields.io/badge/💬_Leave_Feedback-feecdd?style=flat-square)](#does-this-example-address-your-development-requirementsobjectives)
<!-- default badges end -->
# Reporting for Web - Content Security Policy in SPAs

This repository contains sample Angular, React, and Vue projects with enabled Content Security Policy for DevExpress Reporting Components. 

The following three main rules are enforced at the internal design level:

1) **No dynamic code evaluation** — constructs such as `eval`, `new Function`, or string-based `setTimeout` / `setInterval` are not used.
2) **No raw injection of inline scripts or styles** — inline <script>/<style> elements and direct use of `setAttribute('style', ...)` are avoided.
3) **No reliance on external or CDN-hosted resources** — all assets are loaded from the local origin.

To learn more about what exact CSP directives and sources are required, see [Content Security Policy](https://docs.devexpress.com/GeneralInformation/404541/security/content-security-policy#reporting)

Important points:

* Since the entire document generation process occurs on the server, `connect-src` must include your back-end URL.
* Because Web Report Designer is built on top of `Knockout.js` whose origin predates CSP, a special hack (`knockout_global.js`) is required to avoid dynamic code execution.
* DevExtreme Material themes have links to fonts hosted on Google services (https://fonts.googleapis.com). You should either add those URLs to the policy, or you can replace these links and fallbacks to download local Google font files by using our Theme Builder. Set the "Remove external resources" check mark while exporting a theme for this. Please refer to the following document for additional information: [Theme Builder - Export the Resulting Theme](https://js.devexpress.com/jQuery/Documentation/Guide/Themes_and_Styles/ThemeBuilder/#Export_the_Resulting_Theme).
* Running the app in debug mode may require additional permissions compared to a published application. For example, during a debug session, a WebSocket connection may be established to automatically reload your app on any source code change.
* The final application's CSP compatibility will depend on your framework configuration and build tooling. In case of any issues, check your browser’s CSP violation report (usually visible in   DevTools) to identify what triggered the error and adjust your policy or build settings accordingly.

> [!IMPORTANT]
> This proof-of-concept demo does not illustrate best CSP practices. For simplicity, the nonce value is hardcoded and CSP directives are set via the <meta> tag, not the HTTP response header.
>

### Run the Project

Run the server application. To do this, run the following command from the *ServerApp* folder:

```cmd
dotnet run
```

To run a SPA application, run the following commands:

```cmd
npm install
npm start
```


## More Examples

- [Reporting for ASP.NET Core - Content Security Policy (CSP)](https://github.com/DevExpress-Examples/reporting-asp-net-core-content-security-policy)

<!-- feedback -->
## Does this example address your development requirements/objectives?

[<img src="https://www.devexpress.com/support/examples/i/yes-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=web-reporting-content-security-policy&~~~was_helpful=yes) [<img src="https://www.devexpress.com/support/examples/i/no-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=web-reporting-content-security-policy&~~~was_helpful=no)

(you will be redirected to DevExpress.com to submit your response)
<!-- feedback end -->
