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
    ratings = db.relationship('Reviews', backref='user', lazy=True)
    compras = db.relationship('Compras', backref='user', lazy=True)
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
    compras = db.relationship('Compras', backref='menues', lazy=True)

    
    def __repr__(self):
        return '<Menues %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "tipo_menu": self.tipo_menu,
            "title": self.title,
            "description": self.description,
            "price": self.price,
        }



class Compras(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    monto = db.Column(db.Integer, nullable=False)
    fecha = db.Column(db.Date, default=date.today, nullable=False)
    menu_name = db.Column(db.Integer , db.ForeignKey('menues.id'))
    
    def __repr__(self):
        return '<Compras %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "monto": self.monto,
            "fecha": self.fecha,
            "menu_name": self.menu_name,
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
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    puntos = db.Column(db.Integer, nullable=False)
    comentario = db.Column(db.String(400) , nullable=False)
    menu_name = db.Column(db.Integer, db.ForeignKey('menues.id'))
    
    def __repr__(self):
        return '<Reviews %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "puntos": self.puntos,
            "comentario": self.comentario,
            "menu_name": self.menu_name,
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
