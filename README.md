# FEMS 다소비 홍보 페이지 제작

# Sitemap

# Docker
## Build Docker Image	
```docker
docker build\
	-t fems\ 
	.
```
Build image on the same directory of dockerfile with tag name `FEMS`.
This command should be executed on the same directory of dockerfile.


## Run Docker Container
```docker
docker run
	-it\
	--rm\
	-p 8000:800
	-v $(pwd)/core:/app/FEMS/FEMS/\
	--name FEMS\
	fems
```
Run container based on the Docker Image above.
- `-it` interactive, tty option
- `--rm` remove container when the container exited
- `-p 8000:8000` let contanier opens port 8000 in and out
- `FEMS` name of the base image 

# Poetry

# settings.py

# views.py

# models.py

# urls.py
