"""The settings page."""
import datetime

from chatapp.templates import template

import reflex as  rx

import psycopg2

#from chs.pages.state import States

#from reflex import get_input_value

# def handle_button_click():
    
#     state_instance = States()  # Crea una instancia de la clase State
#     username = ("Ingrese su nombre")  # Reemplaza "username" con el nombre del campo de entrada
#     email = ("Ingrese su correo electronico")  # Reemplaza "email" con el nombre del campo de entrada
#     password = ("Ingrese su contraseña")  # Reemplaza "password" con el nombre del campo de entrada
#     birthdate = ('date')  # Reemplaza "birthdate" con el nombre del campo de entrada
    
    
#     state_instance.insert_user_raw(username, email, password, birthdate)
         
@template(route="/settings", title="SmartShop")
def settings() -> rx.Component:
    
    return rx.vstack(
        rx.heading("Crear Nueva Cuenta", style ={"position": "fixed", "top": "8%", "transform": "translateY(0%)", "left": "750", "fontSize": "3.2em", "marginBottom": "20px", "align": "start", "width": "100%"}),
        rx.vstack(
            rx.text("Ya se encuentra registrado?, Ingrese", style = {"position": "fixed", "top": "17%", "transform": "translateY(0%)", "left": "770", "fontSize": "1.7em", "marginBottom": "20px", "align": "start","width": "100%"}),
        ),
        rx.vstack(
            rx.text("NOMBRE ", style ={"position": "fixed", "top": "25%", "transform": "translateY(50%)", "left": "800", "fontSize": "1.2em", "marginBottom": "20px", "align": "start","width": "100%"}),
            rx.hstack(
                rx.avatar(style ={"position": "fixed", "top": "30.5%", "transform": "translateY(0%)", "left": "760", "fontSize": "1.2em", "marginBottom": "20px", "align": "start"},size="sm"),
                rx.input(
                    placeholder="Ingrese su nombre",
                    style ={"position": "fixed", "top": "30%", "transform": "translateY(0%)", "left": "790", "fontSize": "1.2em", "marginBottom": "20px", "align": "start", "width": "350px", "height": "50px"},
                )
            )
        ),
        rx.vstack(
            rx.text("CORREO ELECTRONICO " , style= {"position": "fixed", "top": "37%", "transform": "translateY(0%)", "left": "800", "fontSize": "1.2em", "marginBottom": "20px", "align": "start","width": "100%"}),
            rx.hstack(
                rx.icon(tag="email", style ={"position": "fixed", "top": "42%", "transform": "translateY(0%)", "left": "775", "fontSize": "1.2em", "marginBottom": "20px", "align": "start"}),
                rx.input(
                    placeholder="Ingrese su correo electrónico",
                    style ={"position": "fixed", "top": "40.5%", "transform": "translateY(0%)", "left": "790", "fontSize": "1.2em", "marginBottom": "20px", "align": "start", "width": "350px", "height": "50px"},
                )
            )
        ),
        rx.vstack(
            rx.text("CONTRASEÑA ", style ={"position": "fixed", "top": "48%", "transform": "translateY(0%)", "left": "800", "fontSize": "1.2em", "marginBottom": "20px", "align": "start","width": "100%"}),
            rx.hstack(
                rx.icon(tag="view_off", style ={"position": "fixed", "top": "53.5%", "transform": "translateY(0%)", "left": "775", "fontSize": "1.2em", "marginBottom": "20px", "align": "start"}),
                rx.input(
                    placeholder="Ingrese su contraseña",
                    style ={"position": "fixed", "top": "52%", "transform": "translateY(0%)", "left": "790", "fontSize": "1.2em", "marginBottom": "20px", "align": "start", "width": "350px", "height": "50px"},
                ),
                rx.text("FECHA DE NACIMIENTO ", style={"position": "fixed", "top": "57%", "transform": "translateY(50%)", "left": "800", "fontSize": "1.2em", "marginBottom": "20px", "align": "start",  "width": "100%"}
                ),rx.vstack(
            rx.html("<input type='date' name='fecha' id='fecha', placeholder='Seleccione su fecha de nacimiento'>"), style={"position": "fixed", "top": "57%", "transform": "translateY(100%)", "left": "800", "fontSize": "1.5em", "marginBottom": "20px","border": "2px solid lightgray", "align": "start", "width": "350px", "height": "50px"})
            ),rx.link("Ingresar", style={
            "position": "fixed", "top": "70%", "left": "900", "margin-top": "10px", "color": "white", "background-color": "black", "border-radius": "4px", "cursor": "pointer"}),
            
        )
    )
rx.build()
app = rx.App()
app.add_page(settings)
app.compile()
    
