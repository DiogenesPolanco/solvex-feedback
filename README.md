![](http://solvex.com.do/signature/SignatureDominicana.png)

## Solvex-Feedback

> This is a directive type plugin for angular which allows giving feedback on the frontend of the applications that develops solvex.

### Included out of the box:

* [Angular 1.4.8](https://github.com/angular/code.angularjs.org/tree/master/1.4.8) is what HTML would have been, had it been designed for building web-apps. Declarative templates with data-binding, MVW, MVVM, MVC...
* [Microsoft Grahp](https://graph.microsoft.io/en-us/) is a back-end tool in the Microsoft Office 365 Suite that facilitates search across integrated applications and applies machine learning to organizational interactions and content use.
* [Active Directory Authentication Library (ADAL) for JavaScript](https://github.com/AzureAD/azure-activedirectory-library-for-js) helps you to use Azure AD for handling authentication in your single page applications. This library is optimized for working together with AngularJS.
* [Visual Studio Sevices Auth Library (VSSAL) for JavaScript](https://github.com/DiogenesPolanco/Visual-Studio-Sevices-Auth-Library-Js) It is an angular module for: Using the RESTful API library, authenticate with visual studio online and create service hooks to be notified of important events, Add new workitems, bugs, build tasks, dashboard widgets, and more from Visual Studio Team.
 
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
npm install -g gulp bower
```

This lets you run `gulp` and `bower` from the command line.

4)  Install the starter kit's local `npm` and `bower` dependencies.

```sh
cd  solvex-feedback && npm install && bower install
```
 
### Development workflow

#### Build "dist" folder

```sh
gulp build
```
#### How to use solvex-feedback
 
### Files

1. ***solvex-feedback.css*** - include all styles that the plugin uses.
2. ***solvex-feedback.js*** - include all logic that the plugin uses to implement the feedback.
3. ***solvex-feedback.less*** - include all styles type less that the plugin uses.
4. ***solvex-feedback.min.css*** - include all styles in minimization that the plugin uses.


#### Install "solvex-feedback"

```sh
bower install solvex-feedback
```
#### You can use: [Visual Studio Sevices Auth Library (VSSAL) for JavaScript](https://github.com/DiogenesPolanco/Visual-Studio-Sevices-Auth-Library-Js) 
  ```JavaScript
var app = angular.module("demo", ['solvex.feedback']); //You can add: 'vssalAngular','ngRoute'

app.controller("MainController", function($scope){//vssalAuthenticationService,vssalVisualStudioService 
    $scope.sxConfig = {
        useVSSAL: false,
        LoginVSSAL: function() {
            //vssalAuthenticationService.login();
        },
        callback: function(feedback) {
            console.log(feedback);
            return true;
        },
        feedbackMail: "diogenes.polanco@solvex.com.do",
        feedbackSubject: "Este es un nuevo subject para los feedback"
    };
});
  ```

  ```HTML
<!doctype html>
<html ng-app="demo">
<head>
    <meta charset="utf-8">
    <title>AngularJS solvex-feedback demo</title> 
<link href="/bower_components/solvex-feedback/dist/solvex-feedback.css" rel="stylesheet" type="text/css">
</head>
<body>
    <div class="container">
        <h1 class="text-muted">Demo solvex-feedback</h1> 
        <div class="usage row" ng-controller="MainController">
            <h4>Simple usage</h4>
            <p>This is a simple usage of the solvex-feedback</p>
            <pre>&lt;solvex-feedback&gt;&lt;/solvex-feedback&gt;</pre>
            <solvex-feedback></solvex-feedback>
        </div>
    </div> 
    <script src="/bower_components/angular/angular.min.js"></script> 
    <script src="/bower_components/solvex-feedback/dist/solvex-feedback.js"></script>
    <script src="controllers/mainController.js"></script>
</body> 
</html>
``` 
 
