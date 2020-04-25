FROM python:3.7

COPY ./backend /app
COPY ./requirements.txt /requirements.txt

RUN pip install -r requirements.txt

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8080"]