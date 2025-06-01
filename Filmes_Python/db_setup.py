import sqlite3

conn = sqlite3.connect('filmes.db')  # nomenclatura padrão pra trabalhar com a extensão
cursor = conn.cursor()  # nomenclatura padrão pra trabalhar com a extensão

# Executanto das funções SQL
cursor.execute('''
CREATE TABLE filmes(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    genero TEXT NOT NULL,
    nota INTEGER
)
''')

conn.commit()
conn.close()

