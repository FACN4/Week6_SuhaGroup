# Week6_SuhaGroup by Tawfik, Noor & Suha

Reference https://github.com/foundersandcoders/master-reference/blob/master/coursebook/week-6/project.md
---
Our link: http://revonsite.herokuapp.com/

# Section 1. why?
---
Our project for this week is aimed to let any visitor to our land to find some fedbacks about some tourist sites and he can add a fedback too. The user can choose a city, which will be placed into blocks of pitures about each city, and then he can choose from the search box about his prefered site among a list of suggestions, to see what reviews about this site and what he can adds.
 
 --- 
 # Section 2. What?
 ---
 The website contains:
 1. A header which has the brand name.
 2. A body which cantains the cities pictures linked the search sections of the tourist sites.
 3. A search box in the search section.
 
 ---
 # Section 3. How?
 ---
 # Reference- User's stories:
 ---
 We met the following user's stories in our app:
 - [x] The user can pick a city, in which each city have a picture linked to the search section, so the user can click on it.
 - [x] After clicking on the city the user wants, the user has a search box which contains list of suggestions about some tourist sites.
 - [x] The user can see what others had left reviews about this site, which we require from the database, how many stars the rating of it.
 - [ ] The user can add his own review, which will be stored in the database of our website.
 ---
 # Project requirements :
 ---
- [x] Simple web app with a node server and a database.
- [x] Your database comes with a schema, which should be documented in your readme (along with any other architectural decisions).
- [x] Database hosted on Heroku, or locally.
- [x] Build script for your database.
- [x] Security concerns appropriately considered (you must protect against script injections!).
- [ ] Good test coverage both server- and client-side.
- [x] Content dynamic, but DOM manipulation kept to a minimum.
- [x] Mobile-first design.
- [x] Clear user journey (even if you take one of our suggested ideas, document the user journey in your readme).
- [x] You will need to make the requests and update the DOM in response using client-side JavaScript.
- [x] serving static HTML and JS files.
- [x] server provides endpoints that return DB query results as JSON. 
- [x] quering server from the client using the XMLHttpRequest method.
- [ ] You'll need to be able to make both POSTand GET requests to your server.
 ---
 # Software architecture:
 ---<mxfile userAgent="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.75 Safari/537.36" version="9.0.2" editor="www.draw.io" type="device"><diagram id="b68766a4-4310-7faa-0303-2d5dd25370bf" name="Page-1">7Vtbc+smEP41fqxHSBa2H3uStH04nbbjh7ZPHSJhiVQWOgjf+uuLDNYN7DhjQWy3mUkGVoDEt98uy0JGwdNq9yNDRfozjXE28r14NwqeR74PYSD+VoK9FEwhkIKEkViKWoIF+QcroaekaxLjstOQU5pxUnSFEc1zHPGODDFGt91mS5p131qgBGuCRYQyXfo7iXkqpbPQa+Q/YZKkxzcDTz15RdHfCaPrXL1v5AfLw498vELHsVT7MkUx3bZEwcsoeGKUclla7Z5wVkF7hE32++HE0/q7Gc75JR182WGDsrWa+pJR0dX3vhO/WEzDh5kY6csrE6WkKv0v+bjkoGq+P9JrmxKOFwWKqvpWWJBolPJVJmpAFFFZSFIvyQ7H9QAbzDjenVQ0qOkjrBLTFeZsL5ocOxwZqixyrqrbht7+TMnSFrVrIVImldRDN7QSBcUsM8sCjWW3CMnE1zGZeAZMauE1mEw0CHAsfJCqUsZTmtAcZS+N9MvBsVTTf/a68OAd4X+0yn9WTcZhVcvFd9WPqkrz7A1zvlfOF605FaLmvV8pLVQ3+aXV551HWsyGrlmEO0rniCWYt0S6PhjOECeb7uhX8S20Aa4CVMEL2uB6rsENdXCB7wjdULNmsQwvSTLG+UbDvUG1muw7Vp5kqCwVnBFdkUiV61XSG8byJz3LFwLN8k3OcDKEL9R9nxXDt8s/qPNPejQX1m3FdXqnXadz6zagC8Ir0T10/Z4xtG81KCjJedka+ddK0DaUjp2ACWwr6r3msBt8ioJ8f6PleiIXKR4awggZay1lzBrRjLLDE/htTWXoFXgehFHUFsmobJey8Vt5HEG8Ww5yImT7kB/r+KtTTm2ICMbv6cefXeTHAni9FU4HVUYqPmB8QPCh9DG7bF0ZQh8AaBgNEvP4txP0zHS3OHe05swGZftBR+OofCzvI+brLIqaa/ogq2T8ViR3At20B51hOw5NjmIA6ICe83lGHKmUj9hp48/OltyaxDqjYsJwxAnNRV04vIoBQ7CspotiWeiFGstqI+4kfQbhmZ71+bbGjODys/V5a5J75VcAw0/k1zECdRjwqGd1zGM94gETPeS5eid4sQFPNANOUR5nWO6b7mKdBT0PaEjxAlOKdxCCQjsEnbYJ6nUJOu0QFNgnqCkR6SwR5H7L494DmACGrjyAnuoV8PE7dgDQtERZcwBzRw7AMgWvpZs5WQhm3egB9veFkvKqVw/1jyUOgZ45LDHb3DOPDRtGazwGevYjfv3rdU2y2ASgwKSoigWjEa4AeQ/E5tLEL2uekRwreVcTrqDWdk2hAWpTVDsE1MHMhss4cyzcX9EchAxzfUU7pRK7pxsh7Gla7WdOHW/020+hd7a9f7791echQM+CCURlMuexbFLbaTq1SUtxfD/KtGt2R3QGNbuLIyHv9Aqy+O3ro9G1v4QYo05rdLUSdZ5bQkaOz4HqK6FtKvuuqAxMVFYXUasU26NzGbp0vZZyfGc2+I6jIcnbz3LLvsblgpb/iQjCLY0DKzTuuOTpudueUwdO2ZCqdpWn8vVM9TXH8zFd3fvNoL7XdnkzyHBB9KrLEgyjdCFQvf/7QZpWHN4P8q1kFnrJyN5aehOnEZaOy0S1+TcduXlv/hUqePkX</diagram></mxfile>
 ---
 
 
