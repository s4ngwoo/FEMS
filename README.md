# FEMS 다소비 홍보 페이지 제작

# How to install
1. install docker at your computer
2. clone this repo
3. build docker image based on `dockerfile` of this repo 
	-> If don't know how to build docker container, 
4. run docker container based on the image that you've made.

# How to load javascipt file in html?
Put `{$ load static %}` on the first line of your html file.
And load it like this
`<script src="{% static 'test.js' %}"></script>`

If you load `test.js`, it will load `static/test.js` file.
If you load `data/test.js`, it will load `static/data/test.js` file.
If you load `data/2-(1)/2-(1-1)/test.js`, it will load `data/2-(1)/2-(1-1)/test.js` file.

# How to load css in html?
Same method to load css as js file does. 
Put `{$ load static %}` on the first line of your html file.
And load it like this
`<lik rel="stylesheet" type="text/css" href="{% static 'css/styles.css' %}">`

# How to load data in javascript?
Same method to load
Let's look at this example.
```javascript
fetch("{% static 'data/2-(1)/2-(1-1)/data.json' %}")
    .then(response => response.text()) // Convert response to text
    .then(data => {
        // Insert data into HTML element
    })
    .catch(error => {
        // Handle errors
        console.error('Error fetching data:', error);
    });
```
This is `test.js` file in the js directory. 

## Sitemap

## Docker
### Build Docker Image	
```docker
docker build -t fems .
```
Build image on the same directory of dockerfile with tag name `FEMS`.
This command should be executed on the same directory of dockerfile.


### Run Docker Container
```docker
docker run \
  -it \
  --rm \
  -p 8000:8000 \
  -v $(pwd)/core:/app/FEMS/FEMS/ \
  -v $(pwd)/templates:/app/FEMS/templates/ \
  -v $(pwd)/static:/app/FEMS/static/ \
  -v $(pwd)/FEMS_app:/app/FEMS/FEMS_app/ \
  --name FEMS \
  fems
```
Run container based on the Docker Image above.
- `-it` interactive, tty option
- `--rm` remove container when the container exited
- `-p 8000:8000` let contanier opens port 8000 in and out
- `-v $(pwd)/core:/app/FEMS/FEMS/` bind mount core files
- `-v $(pwd)/templates:/app/FEMS/templates/` bind mount html files.
	contains html files only.
- `-v $(pwd)/static:/app/FEMS/static/` bind mount js, cs, data files.
	There are three directories for js, css, data.

- `-v $(pwd)/FEMS_app:/app/FEMS/FEMS_app/` bind mount app
	Contains settings about the web page features
- `FEMS` name of the base image 

**Run on browser**
`localhost:8000` on url while docker container is running
> To check is docker container running
> `docker ps -a`
> if you followed the instructions, there will be a container named "fems".
## Data


## Poetry

## settings.py

## views.py

## models.py

## urls.py
