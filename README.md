# Fampay_backend_assignment


### This project was made as an assignment for github. It is a express server which scrap youtube data using puppeteer library and stores it and return to user when requested. It is made using Nodejs and express.
## Functionalities : 


1. GET complete list of queries required in tabulated manner.
2. Search Videos based on description and title queries.
3. Tables are updated every 10 seconds using job scheduler.
4. Puppeteer uses chromium brouser to crawl to the site in a background way and scrap the data which we choose.



## Installation 
1. Install any suitable version of Node, express
2. Install puppeteer



2. Set the parameters <b>query</b> in the <b>.env</b> file which is inside the *api* Directory
<ul>
<li>query - Any Query which is to be searched.</li>
</ul>

3. Run the express server using
```
node index.js 
```

It runs the backend server at default port 9090. As well schedules a job to fetch youtube videos and store it in the database after specific intervals. Open http://localhost:8080 to view it in the browser.
## Usage 
This API has two basic functionalities : 

1. View List of Videos in paginated format:
Send a <b>GET</b> Request to url: http://localhost:8000/getAllData
 without any params.

2. Search for Videos based on a title or description query

Send a <b>GET</b> Request to url : 
localhost:8000/details?title=Greatest&description=India


