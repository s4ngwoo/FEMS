# FEMS 다소비 홍보 페이지 제작

# How to install
1. install docker at your computer
2. clone this repo
3. build docker image based on `dockerfile` of this repo 
	-> If don't know how to build docker image, <a href="#user-content-build-docker-image">here</a>
4. run docker container based on the image that you've made.
	-> If don't know how to run a docker container, <a href="#user-content-build-docker-image">here</a>

# How to load javascipt file in html?
Put `{$ load static %}` on the first line of your html file.<br>


And load it like this<br>


`<script src="{% static 'test.js' %}"></script>`

If you load `test.js`, it will load `static/test.js` file.<br>
If you load `data/test.js`, it will load `static/data/test.js` file.<br>
If you load `data/2-(1)/2-(1-1)/test.js`, it will load `data/2-(1)/2-(1-1)/test.js` file.

# How to load css in html?
Same method to load css as js file does. <br>
Put `{$ load static %}` on the first line of your html file.<br>
And load it like this<br>
`<lik rel="stylesheet" type="text/css" href="{% static 'css/styles.css' %}">`

# How to load data in javascript?
Same method to load<br>
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

---
---
## Data

### 업종별 에너지 현황 페이지
- 업종별 에너지 상세 현황<br><pre>
2-(1) / 2-(1-1) / data.json</pre>

- 전국 시도별 기업수<br><pre>
2-(1) / 2-(1-2) / data.json</pre>

#### 식품 업종 에너지 현황 페이지
- 구간별 에너지 소비 차트<br><pre>
2-(2)(3)(4)(5)-2) / data.json</pre>

- 설비별-에너지원별 에너지 소비 구성 차트<br><pre>
2-(2)(3)(4)(5)-3) / data.json</pre>

- 지역별 에너지 사용량 차트<br><pre>
2-(2)(3)(4)-1) / data.json</pre>

- 지역별-규모별 기업 수 차트<br><pre>
2-(2)(3)(4)(5)-4) / data.json</pre>

- 설비별-에너지원별 에너지 소비 구성 차트<br><pre></pre>
2-(2)(3)(4)(5)-4) / data.json</pre>

#### 제지 업종 에너지 현황 페이지 <br><pre>
식품 업종 에너지 현황 페이지와 동일</pre>
#### 바이오의약 업종 에너지 현황 페이지<br><pre>
식품 업종 에너지 현황 페이지와 동일</pre>
#### 용해 업종 에너지 현황 페이지<br><pre>
식품 업종 에너지 현황 페이지와 동일</pre>

---
### 업종별 산업 동향 페이지
- 제조업종 - 4대업종 분기별 생산지수 추이<br><pre>
3-(1) / 3-(1-1) / data.json</pre>

- 시도별 업종별 생산지수 비교 (2022년)<br><pre>
3-(1) / 3-(1-2) / data.json</pre>
#### 업종별 매출액, 생산액 페이지
- 업종별 매출액<br><pre>
3-(2) / 3-(2-1) / data.json</pre>

- 업종별 생산액<br><pre>
3-(2) / 3-(2-2) / data.json</pre>

#### 업종별 매출 영업이익률, 당기순이익 페이지
- 업종별 매출영업이익률<br><pre>
3-(3) / 3-(3-1) / data.json</pre>

- 업종별 당기순이익<br><pre>
3-(3) / 3-(3-2) / data.json</pre>

#### 업종별 설비투자액, 설비투자효율 페이지 
- 업종별 설비투자액<br><pre>
3-(4) / 3-(4-1) / data.json</pre>

- 업종별 연간 설비 투자효율 추이 (300인 이상 기업)<br><pre>
3-(4) / 3-(4-2) / data_over_300.json</pre>

- 업종별 연간 설비 투자효율 추이 (300인 미만 기업)<br><pre>
3-(4) / 3-(4-2) / data_under_300.json</pre>

#### 업종별 경영 투자 현황 페이지 

- 식품 업종 연간 에너지 비용, 에너지 비용 비율 추이<br><pre>
3-(5) / 3-(5-1) / food_data.json</pre>

- 제지 업종 연간 에너지 비용, 에너지 비용 비율 추이<br><pre>
3-(5) / 3-(5-1) / paper_data.json</pre>

- 바이오 의약 업종 연간 에너지 비용, 에너지 비용 비율 추이<br><pre>
3-(5) / 3-(5-1) / pharma_data.json</pre>

- 용해 업종 연간 에너지 비용, 에너지 비용 비율 추이<br><pre>
3-(5) / 3-(5-1) / solvent_data.json</pre>

 에너지비용 10% 절감시 업종별 전체 당기이익 증가액<br><pre>
3-(5) / 3-(5-2) / data.json</pre>

---
---
## Poetry

## settings.py

## views.py

## models.py

## urls.py
