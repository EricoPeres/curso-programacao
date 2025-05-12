from flask import Flask

app = Flask(__name__)

@app.route('/')     # decoretor
def homepage():
    return 'Olá Mundo!'

@app.route('/blog')     # decoretor
def blog():
    return 'O melhor blog do mundo'

app.run()