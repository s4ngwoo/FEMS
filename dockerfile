# 베이 스 이미지 설정
FROM python:3.10-slim

# 작업 디렉토리 설정
WORKDIR /app

# poetry 설치
RUN pip install poetry

# 프로젝트 소스 코드 복사
COPY ./pyproject.toml .

# Install dependencies using poetry
RUN poetry install

# Run Django startproject using peotry executable
RUN poetry run django-admin startproject FEMS

# Set the working directory for subsequent commands
WORKDIR /app/FEMS

# Start app
RUN poetry run django-admin startapp FEMS_app

# 개발 서버 실행
CMD ["poetry", "run", "python", "manage.py", "runserver", "0.0.0.0:8000"]
