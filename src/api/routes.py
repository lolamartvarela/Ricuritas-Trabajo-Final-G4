"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""

from flask import Flask, request, jsonify, url_for, Blueprint, current_app
from api.models import db, User, Menues, Recomendaciones, Reviews, Address, Compras
from api.utils import generate_sitemap, APIException
from flask_mail import Message
import random
import string


# ? Acá importamos la librería de JWT y sus componentes
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager


#! Esta es la importación del Blueprint
api = Blueprint('api', __name__)

# ? Este es el endpoint que permite recuperar contraseñas
@api.route("/forgotpassword", methods=["POST"])
def forgotpassword():
    recover_email = request.json['email']
    if not recover_email:
        return jsonify({"msg": "Debe ingresar el correo"}), 401

    user = User.query.filter_by(email=recover_email).first()
    if not user:
        return jsonify({"msg": "El correo ingresado no existe en nuestros registros"}), 400

    current_password = user.password
    msg = Message("Hi", recipients=[recover_email])
    msg.html = f"""<h1>Su contraseña actual es: {current_password}</h1>"""
    current_app.mail.send(msg)
    return jsonify({"msg": "Su contraseña actual ha sido enviada al correo electrónico ingresado"}), 200


# ? Todas las funciones que vienen a continuación están creadas para trabajar con la tabla User


# * Esta función nos devuelve la lista de usuarios creados, mediante el método GET
@api.route('/user', methods=['GET'])
def get_all_users():
    all_users = User.query.all()
    if all_users:
        results = list(map(lambda one_user: one_user.serialize(), all_users))
        return jsonify(results), 200
    else:
        return jsonify({"msg": "Aún no hay ningún usuario creado"}), 404


# * Esta función nos permite eliminar a un usuario mediante su ID usando el método DELETE
@api.route('/user/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return {"msg": "El usuario seleccionado no existe"}, 404
    db.session.delete(user)
    db.session.commit()
    return {"msg": "El usuario ha sido eliminado con éxito"}, 200


# * Esta función nos permite modificar los datos de los usuarios mediante el método PUT
@api.route('/user/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({"msg": "El usuario seleccionado no ha sido encontrado"}), 404

    data = request.get_json()
    user.user_name = data.get('user_name', user.user_name)
    user.nombre = data.get('nombre', user.nombre)
    user.apellido = data.get('apellido', user.apellido)
    user.email = data.get('email', user.email)
    user.password = data.get('password', user.password)

    db.session.commit()
    return jsonify(user.serialize()), 200


# * Esta función nos permite añadir un nuevo usuario mediante el método POST
@api.route('/user', methods=['POST'])
def add_user():
    user_name = request.json.get('user_name')
    nombre = request.json.get('nombre')
    apellido = request.json.get('apellido')
    email = request.json.get('email')
    password = request.json.get('password')

    new_user = User(user_name=user_name, nombre=nombre,
                    apellido=apellido, email=email, password=password)

    try:
        db.session.add(new_user)
        db.session.commit()
        return jsonify(new_user.serialize()), 201
    except Exception as e:
        db.session.rollback()
        return str(e), 500


# ? Todas las funciones que vienen a continuación están creadas para trabajar con la tabla Menues


# * Esta función nos devuelve la lista de menues creados, mediante el método GET
@api.route('/menues', methods=['GET'])
def get_all_menues():
    all_menues = Menues.query.all()
    if all_menues:
        results = list(
            map(lambda one_menue: one_menue.serialize(), all_menues))
        return jsonify(results), 200
    else:
        return jsonify({"msg": "Aún no hay ningún menú creado"}), 404


@api.route('/menues', methods=['POST'])
def add_menu():
    tipo_menu = request.json.get('tipo_menu')
    title = request.json.get('title')
    description = request.json.get('description')
    price = request.json.get('price')
    url = request.json.get('url')

    new_menu = Menues(tipo_menu=tipo_menu, title=title,
                      description=description, price=price, url=url)

    try:
        db.session.add(new_menu)
        db.session.commit()
        return jsonify(new_menu.serialize()), 201
    except Exception as e:
        db.session.rollback()
        return str(e), 500


# * Esta función nos permite eliminar un menú mediante su ID usando el método DELETE
@api.route('/menues/<int:menu_id>', methods=['DELETE'])
def delete_menu(menu_id):
    menu = Menues.query.get(menu_id)
    if not menu:
        return {"msg": "El menú seleccionado no existe"}, 404
    db.session.delete(menu)
    db.session.commit()
    return {"msg": "El menú ha sido eliminado con éxito"}, 200


# * Esta función nos permite modificar cada menú mediante el método PUT
@api.route('/menues/<int:menu_id>', methods=['PUT'])
def update_menu(menu_id):
    menu = Menues.query.get(menu_id)
    if not menu:
        return jsonify({"msg": "El menú seleccionado no ha sido encontrado"}), 404

    data = request.get_json()
    menu.tipo_menu = data.get('tipo_menu', menu.tipo_menu)
    menu.title = data.get('title', menu.title)
    menu.description = data.get('description', menu.description)
    menu.price = data.get('price', menu.price)

    db.session.commit()
    return jsonify(menu.serialize()), 200


# ? Todas las funciones que vienen a continuación están creadas para trabajar con la tabla Recomendaciones

# * Esta función nos devuelve la lista de recomendaciones creadas, mediante el método GET
@api.route('/recomendaciones', methods=['GET'])
def get_all_recomendaciones():
    all_recomendaciones = Recomendaciones.query.all()
    if all_recomendaciones:
        results = list(
            map(lambda one_recomendacion: one_recomendacion.serialize(), all_recomendaciones))
        return jsonify(results), 200
    else:
        return jsonify({"msg": "Aún no hay ninguna recomendación creada"}), 404


# * Esta función nos permite añadir una nueva recomendación mediante el método POST
@api.route('/recomendaciones', methods=['POST'])
def add_recomendacion():
    title = request.json.get('title')
    description = request.json.get('description')

    new_recomendacion = Recomendaciones(title=title, description=description)

    try:
        db.session.add(new_recomendacion)
        db.session.commit()
        return jsonify(new_recomendacion.serialize()), 201
    except Exception as e:
        db.session.rollback()
        return str(e), 500


# * Esta función nos permite eliminar una recomendación mediante su ID usando el método DELETE
@api.route('/recomendaciones/<int:recomendacion_id>', methods=['DELETE'])
def delete_recomendacion(recomendacion_id):
    recomendacion = Recomendaciones.query.get(recomendacion_id)
    if not recomendacion:
        return {"msg": "La recomendación seleccionada no existe"}, 404
    db.session.delete(recomendacion)
    db.session.commit()
    return {"msg": "La recomendación ha sido eliminada con éxito"}, 200


# * Esta función nos permite modificar cada recomendación mediante el método PUT
@api.route('/recomendaciones/<int:recomendacion_id>', methods=['PUT'])
def update_recomendacion(recomendacion_id):
    recomendacion = Recomendaciones.query.get(recomendacion_id)
    if not recomendacion:
        return jsonify({"msg": "La recomendación seleccionada no ha sido encontrado"}), 404

    data = request.get_json()
    recomendacion.title = data.get("title", recomendacion.title)
    recomendacion.description = data.get(
        "description", recomendacion.description)

    db.session.commit()
    return jsonify(recomendacion.serialize()), 200


# ? Todas las funciones que vienen a continuación están creadas para trabajar con la tabla Reviews


# * Esta función nos devuelve la lista de reviews creadas, mediante el método GET
@api.route('/reviews', methods=['GET'])
def get_all_reviews():
    all_reviews = Reviews.query.all()
    if all_reviews:
        results = list(
            map(lambda one_review: one_review.serialize(), all_reviews))
        return jsonify(results), 200
    else:
        return jsonify({"msg": "Aún no hay ninguna review creada"}), 404


# * Esta función nos permite añadir una nueva review mediante el método POST
@api.route('/reviews', methods=['POST'])
def add_reviews():
    puntos = request.json.get('puntos')
    comentario = request.json.get('comentario')

    new_review = Reviews(puntos=puntos, comentario=comentario)

    try:
        db.session.add(new_review)
        db.session.commit()
        return jsonify(new_review.serialize()), 201
    except Exception as e:
        db.session.rollback()
        return str(e), 500


# * Esta función nos permite eliminar una review mediante su ID usando el método DELETE
@api.route('/reviews/<int:review_id>', methods=['DELETE'])
def delete_review(review_id):
    review = Reviews.query.get(review_id)
    if not review:
        return {"msg": "La review seleccionada no existe"}, 404
    db.session.delete(review)
    db.session.commit()
    return {"msg": "La review ha sido eliminada con éxito"}, 200


# ? Todas las funciones que vienen a continuación están creadas para trabajar con la tabla Address


# * Esta función nos devuelve la lista de direcciones creadas, mediante el método GET
@api.route('/direcciones', methods=['GET'])
def get_all_direcciones():
    all_direcciones = Address.query.all()
    if all_direcciones:
        results = list(
            map(lambda one_direccion: one_direccion.serialize(), all_direcciones))
        return jsonify(results), 200
    else:
        return jsonify({"msg": "Aún no hay ninguna dirección creada"}), 404


# * Esta función nos permite añadir una nueva dirección mediante el método POST
@api.route('/direcciones', methods=['POST'])
def add_direccion():
    calle = request.json.get('calle')
    ciudad = request.json.get('ciudad')
    departamento = request.json.get('departamento')
    door_number = request.json.get('door_number')
    zip_code = request.json.get('zip_code')

    new_direccion = Address(calle=calle, ciudad=ciudad,
                            departamento=departamento, door_number=door_number, zip_code=zip_code)

    try:
        db.session.add(new_direccion)
        db.session.commit()
        return jsonify(new_direccion.serialize()), 201
    except Exception as e:
        db.session.rollback()
        return str(e), 500


# * Esta función nos permite eliminar una dirección mediante su ID usando el método DELETE
@api.route('/direcciones/<int:direccion_id>', methods=['DELETE'])
def delete_direccion(direccion_id):
    direccion = Address.query.get(direccion_id)
    if not direccion:
        return {"msg": "La dirección seleccionada no existe"}, 404
    db.session.delete(direccion)
    db.session.commit()
    return {"msg": "La dirección ha sido eliminada con éxito"}, 200


# * Esta función nos permite modificar cada dirección mediante el método PUT
@api.route('/direcciones/<int:direccion_id>', methods=['PUT'])
def update_direccion(direccion_id):
    direccion = Address.query.get(direccion_id)
    if not direccion:
        return jsonify({"msg": "La dirección seleccionada no ha sido encontrado"}), 404

    data = request.get_json()
    direccion.calle = data.get("calle", direccion.calle)
    direccion.ciudad = data.get("ciudad", direccion.ciudad)
    direccion.departamento = data.get("departamento", direccion.departamento)
    direccion.door_number = data.get("door_number", direccion.door_number)
    direccion.zip_code = data.get("zip_code", direccion.zip_code)

    db.session.commit()
    return jsonify(direccion.serialize()), 200


# ? Todas las funciones que vienen a continuación están creadas para trabajar con la tabla Compras


# * Esta función nos devuelve la lista de compras creadas, mediante el método GET
@api.route('/compras', methods=['GET'])
def get_all_compras():
    all_compras = Compras.query.all()
    if all_compras:
        results = list(
            map(lambda one_compra: one_compra.serialize(), all_compras))
        return jsonify(results), 200
    else:
        return jsonify({"msg": "Aún no hay ninguna compra creada"}), 404


# * Esta función nos permite añadir una nueva compra mediante el método POST
@api.route('/compras', methods=['POST'])
def add_compra():
    monto = request.json.get('monto')
    fecha = request.json.get('fecha')
    pago = request.json.get('pago')

    new_compra = Compras(monto=monto, fecha=fecha, pago=pago)

    try:
        db.session.add(new_compra)
        db.session.commit()
        return jsonify(new_compra.serialize()), 201
    except Exception as e:
        db.session.rollback()
        return str(e), 500


# * Esta función nos permite eliminar una compra mediante su ID usando el método DELETE
@api.route('/compras/<int:compra_id>', methods=['DELETE'])
def delete_compra(compra_id):
    compra = Compras.query.get(compra_id)
    if not compra:
        return {"msg": "La compra seleccionada no existe"}, 404
    db.session.delete(compra)
    db.session.commit()
    return {"msg": "La compra ha sido eliminada con éxito"}, 200


#? Aquí creamos el sistema de Login con JWT y devuelve el nombre del user que esté logueado
@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    get_user = User.query.filter_by(email=email).first()

    if email != get_user.email or password != get_user.password:
        return jsonify({"msg": "Bad email or password"}), 401

    access_token = create_access_token(identity=email)
    is_admin = get_user.role == 'admin'
    print(get_user.nombre)
    return jsonify(access_token=access_token, is_admin=is_admin, user=get_user.nombre)

#ENDPOINT REVIEW
@api.route('/review/<int:user_id>', methods=['POST'])
def create_review(user_id):
    # Buscamos al usuario con la id especificada
    user = User.query.get_or_404(user_id)

    # Obtenemos los datos de la review desde el cuerpo de la petición
    puntos = request.json.get('puntos')
    comentario = request.json.get('comentario')

    # Creamos la nueva review y la asociamos con el usuario
    review = Reviews(user_id=user.id, puntos=puntos, comentario=comentario)
    db.session.add(review)
    db.session.commit()

    return jsonify({'mensaje': 'Review creada correctamente'}), 201

#? Esta ruta verifica si el user es admin o no lo es y autentifica el token al mismo tiempo
@api.route('/get-user-role', methods=['GET'])
@jwt_required()
def get_user_role():
    current_user = get_jwt_identity()
    if not current_user:
        return jsonify({'msg': 'Token inválido'}), 401

    user = User.query.filter_by(email=current_user).first()
    if not user:
        return jsonify({'msg': 'Usuario no encontrado'}), 404

    if user.role == "admin":
        return jsonify({'role': user.role}), 201
    else:
        return jsonify({'role': user.role, 'nombre': user.nombre}), 200
