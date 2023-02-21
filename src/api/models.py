from flask_sqlalchemy import SQLAlchemy
from datetime import date

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(100) , nullable=False)
    nombre = db.Column(db.String(100) , nullable=False)
    apellido = db.Column(db.String(100) , nullable=False)
    email = db.Column(db.String(250), unique= True, nullable=False)
    password = db.Column(db.String(100) , nullable=False)
    role = db.Column(db.String(120), default='user')
    address = db.relationship('Address', backref='user', lazy=True)
    
    def __repr__(self):
        return '<User %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_name": self.user_name,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "email": self.email,
            
        }


class Menues(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    tipo_menu = db.Column(db.String, nullable=False)
    title = db.Column(db.String(100) , nullable=False)
    description = db.Column(db.String(1000) , nullable=False)
    price = db.Column(db.Integer, nullable=False)
    url = db.Column(db.String(250), nullable=False)
    

    
    def __repr__(self):
        return '<Menues %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "url": self.url,
            "tipo_menu": self.tipo_menu,
            "title": self.title,
            "description": self.description,
            "price": self.price,
        }



class Compras(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    items = db.Column(db.String(255))
    total_price = db.Column(db.Float)
    username = db.Column(db.String(50))
    
    def __repr__(self):
        return '<Compras %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "items": self.items,
            "total_price": self.total_price,
            "username": self.username,
        }
    

class Address(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    calle = db.Column(db.String(100), nullable=False)
    ciudad = db.Column(db.String(100) , nullable=False)
    departamento = db.Column(db.String(100) , nullable=False)
    door_number = db.Column(db.Integer, nullable=False)
    zip_code = db.Column(db.Integer, nullable=False)
    
    def __repr__(self):
        return '<Address %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "calle": self.calle,
            "ciudad": self.ciudad,
            "departamento": self.departamento,
            "door_number": self.door_number,
            "zip_code": self.zip_code,
        }


class Reviews(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False)
    puntos = db.Column(db.Integer, nullable=False)
    comentario = db.Column(db.String(400) , nullable=False)

    
    def __repr__(self):
        return '<Reviews %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "puntos": self.puntos,
            "comentario": self.comentario,
        }


class Recomendaciones(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100) , nullable=False)
    description = db.Column(db.String(1000) , nullable=False)
    
    def __repr__(self):
        return '<Recomendaciones %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
        }
