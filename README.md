![](http://solvex.com.do/signature/SignatureDominicana.png)

## Solvex-Feedback

> This is a directive type plugin for angular which allows giving feedback on the frontend of the applications that develops solvex.

### Included out of the box:

* [Angular 1.4.8](https://github.com/angular/code.angularjs.org/tree/master/1.4.8) is what HTML would have been, had it been designed for building web-apps. Declarative templates with data-binding, MVW, MVVM, MVC...
* [JQuery](https://github.com/nippur72/PolymerTS) is a fast, small, and feature-rich JavaScript library.
* [Microsoft Grahp](https://www.polymer-project.org/) is a back-end tool in the Microsoft Office 365 Suite that facilitates search across integrated applications and applies machine learning to organizational interactions and content use.
* [Active Directory Authentication Library (ADAL) for JavaScript](https://github.com/AzureAD/azure-activedirectory-library-for-js) helps you to use Azure AD for handling authentication in your single page applications. This library is optimized for working together with AngularJS.
 
### Demo
See latest Solvex-Feedback with Angular 1.x demo [Here!](http://solvex-feedback.azurewebsites.net/).
 
**To install dependencies:**

1)  Check your Node.js version.

```sh
node --version
```

The version should be at or above 0.12.x.

2)  If you don't have Node.js installed, or you have a lower version, go to [nodejs.org](https://nodejs.org) and click on the big green Install button.

3)  Install `grunt` and `bower` globally.

```sh
npm install -g grunt bower
```

This lets you run `grunt` and `bower` from the command line.

4)  Install the starter kit's local `npm` and `bower` dependencies.

```sh
cd  solvex-feedback && npm install && bower install
```
 
### Development workflow

#### Build "dist" folder

```sh
grunt build
```
#### How to use solvex-feedback
 
### Files

1. ***solvex-feedback.css*** - include all styles that the plugin uses.
2. ***solvex-feedback.js*** - include all logic that the plugin uses to implement the feedback.
3. ***solvex-feedback.less*** - include all styles type less that the plugin uses.
4. ***solvex-feedback.min.css*** - include all styles in minimization that the plugin uses.


#### Install "solvex-feedback"

```sh
bower install https://github.com/diogenespolanco/solvex-feedback.git
```

  ```JavaScript
var app = angular.module("MyApp", ['solvex-feedback']);

app.controller("MainController", function($scope) {
    var self = this;
    self.options = {
        feedbackMail: "diogenes.polanco@solvex.com.do",
        feedbackSubject: "Este es un nuevo subject para los feedback"
    };
});
  ```

  ```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>My App</title>
        <link href="/bower_components/solvex-feedback/dist/solvex-feedback.css" rel="stylesheet" type="text/css" >
        <script src="/bower_components/jquery/dist/jquery.min.js" type="text/javascript"></script>
        <script src="/bower_components/angular/angular.min.js" type="text/javascript"></script>
        <script src="/bower_components/msgraph-sdk-javascript/lib/graph-js-sdk-web.js" type="text/javascript"></script>
        <script src="/bower_components/solvex-feedback/dist/solvex-feedback.js" type="text/javascript"></script> 
         <script src="controllers/mainController.js" type="text/javascript"></script>
    </head>
    <body>  
        <div ng-app="MyApp">
            <div ng-controller="MainController as main">
                <solvex-feedback options="main.options"></solvex-feedback>
            </div>
        </div>
    </body>
</html>
  ``` 
 