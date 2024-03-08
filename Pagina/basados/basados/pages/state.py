import sqlalchemy

import reflex as rx

import psycopg2

class States(rx.State):
    def insert_user_raw(self, nombre, correo_electronico, contrasena, fecha_nacimiento):
        with rx.session() as session:
            session.execute(
                sqlalchemy.text(
                    "INSERT INTO usuario (nombre, correo_electronico, contrasena, fecha_nacimiento) "
                    "VALUES ((:nombre), (:correo_electronico), (:contrasena), (:fecha_nacimiento))"
                ),
                {"nombre": nombre, "correo_electronico": correo_electronico, "contrasena": contrasena, "fecha_nacimiento": fecha_nacimiento},
            )
            session.commit()


    # @rx.var
    # def raw_user_tuples(self) -> list[list]:
    #     with rx.session() as session:
    #         return [list(row) for row in session.execute("SELECT * FROM user").all()]