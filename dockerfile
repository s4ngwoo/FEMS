# 베이 스 이미지 설정
FROM python:3.10

# 작업 디렉토리 설정
WORKDIR /app

# poetry 설치
RUN pip install poetry

# 프로젝트 소스 코드 복사
COPY . .

# poetry를 사용하여 의존성 설치
RUN poetry install

# 개발 환경 설정 파일 복사
#COPY .env.dev .env
# Run Django startproject using peotry executable
RUN poetry run django-admin startproject myproject

# 장고 프로젝트 생성
# RUN django-admin startproject myproject .
# Set the working directory for subsequent commands
WORKDIR /app/myproject

# 개발 서버 실행
CMD ["poetry", "run", "python", "manage.py", "runserver", "0.0.0.0:8000"]

