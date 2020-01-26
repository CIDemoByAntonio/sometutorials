$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Facebook Login",
  "description": "As a facebook user, I want to enter username and pwd as a parameter",
  "id": "facebook-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "validate fb login Scenario1",
  "description": "",
  "id": "facebook-login;validate-fb-login-scenario1",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "the user is on facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "he enters \"\u003cuser\u003e\" as a user name",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "he enters \"\u003cpwd\u003e\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "check username is present in textbox",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "facebook-login;validate-fb-login-scenario1;",
  "rows": [
    {
      "cells": [
        "user",
        "pwd"
      ],
      "line": 12,
      "id": "facebook-login;validate-fb-login-scenario1;;1"
    },
    {
      "cells": [
        "aseraus@hotmail.com",
        "salsa9228"
      ],
      "line": 13,
      "id": "facebook-login;validate-fb-login-scenario1;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8797213900,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "validate fb login Scenario1",
  "description": "",
  "id": "facebook-login;validate-fb-login-scenario1;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the user is on facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "he enters \"aseraus@hotmail.com\" as a user name",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "he enters \"salsa9228\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "check username is present in textbox",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginToFacebookSteps.the_user_is_on_facebook_login_page()"
});
formatter.result({
  "duration": 3222114799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aseraus@hotmail.com",
      "offset": 11
    }
  ],
  "location": "LoginToFacebookSteps.he_enters_as_a_user_name(String)"
});
formatter.result({
  "duration": 420066700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "salsa9228",
      "offset": 11
    }
  ],
  "location": "LoginToFacebookSteps.he_enters_as_password(String)"
});
formatter.result({
  "duration": 197415101,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFacebookSteps.check_username_is_present_in_textbox()"
});
formatter.result({
  "duration": 29902818100,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d79.0.3945.130)\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9\u0027, time: \u00272017-08-21T17:29:55.15Z\u0027\nSystem info: host: \u0027NLSPLLBI0034\u0027, ip: \u002710.0.75.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d79.0.3945.36 (3582db32b33893869b8c1339e8f4d9ed1816f143-refs/branch-heads/3945@{#614}), userDataDir\u003dD:\\Users\\ANTONI~1\\AppData\\Local\\Temp\\scoped_dir4176_1866391926}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:61064}, acceptInsecureCerts\u003dfalse, browserVersion\u003d79.0.3945.130, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue}]\nSession ID: f512d1c234d8ea5d61afeb6f8bc526af\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:698)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:372)\r\n\tat com.w2a.LoginToFacebookSteps.check_username_is_present_in_textbox(LoginToFacebookSteps.java:55)\r\n\tat ✽.Then check username is present in textbox(login.feature:9)\r\n",
  "status": "failed"
});
});