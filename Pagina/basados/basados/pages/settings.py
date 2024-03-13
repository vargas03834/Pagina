"""The settings page."""
import datetime

from basados.templates import template

import reflex as  rx

import psycopg2

from basados.pages.state import States

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
        rx.heading("Crear Nueva Cuenta", 
                   style ={"position": "absolute", 
                           "top": "8vh", 
                           "transform": "translatex(40%)", 
                           "fontSize": "3.2em", 
                           "marginBottom": "20px", 
                           "align": "start", 
                           "width": "100%"}),
        rx.vstack(
            rx.text("Ya se encuentra registrado?, Ingrese", 
                    style = {"position": "absolute", 
                             "top":"20vh",
                             "transform": "translatex(41%)",
                             "fontSize": "1.7em", 
                             "marginBottom": "20px", 
                             "align": "start",
                             "width": "100%"}),
        ),rx.vstack(
            rx.text("NOMBRE ", 
                    style ={"position": "fixed", 
                            "top": "25vh", 
                            "transform": "translate(44.2%)", 
                            "fontSize": "1.2em", 
                            "marginBottom": "20px", 
                            "align": "start",
                            "width": "100%"}),
            rx.hstack(
                rx.avatar(style ={"position": "absolute", 
                                  "top": "29.5vh", 
                                  "left":"41%", 
                                  "fontSize": "1.2em", 
                                  "marginBottom": "20px", 
                                  "align": "start",},
                                  size="2"),
                ),rx.hstack(rx.input(
                    placeholder="Ingrese su nombre",
                        style ={"position": "absolute", 
                                "top": "27vh", 
                                "left":"850px",
                                "fontSize": "1.2em", 
                                "marginBottom": "20px", 
                                "align": "start", 
                                "width": "350px", 
                                "height": "50px",
                                "bg":"#B8BBBE",},          
                )
            )
        ),rx.vstack(
            rx.text("CORREO ELECTRONICO " , 
                    style= {"position": "absolute", 
                            "top": "37vh", 
                            "transform": "translate(44.2%)", 
                            "fontSize": "1.2em", 
                            "marginBottom": "20px", 
                            "align": "start",
                            "width": "100%"}),
            rx.hstack(
                rx.icon(tag="moon", 
                        style ={"position": "absolute", 
                                  "top": "41vh", 
                                  "left":"41.5%", 
                                  "fontSize": "1.2em", 
                                  "marginBottom": "20px", 
                                  "align": "start",}),
                                  
                rx.input(placeholder="Ingrese su correo electrónico",
                            style ={"position": "absolute", 
                                "top": "38vh", 
                                "left":"850px",
                                "fontSize": "1.2em", 
                                "marginBottom": "20px", 
                                "align": "start", 
                                "width": "350px", 
                                "height": "50px",
                                "bg":"#B8BBBE",},
                )
            )
        ),rx.vstack(
            rx.text("CONTRASEÑA ", 
                    style= {"position": "absolute", 
                            "top": "47vh", 
                            "transform": "translate(44.2%)", 
                            "fontSize": "1.2em", 
                            "marginBottom": "20px", 
                            "align": "start",
                            "width": "100%"}),
            rx.hstack(
                rx.chakra.icon(tag="view_off", 
                               style ={"position": "fixed", 
                                       "bottom": "42.4%", 
                                       "transform": "translateY(0%)", 
                                       "left": "800px", 
                                        "fontSize": "1.2em", 
                                        "marginBottom": "20px", 
                                        "align": "start"}),
                rx.input(placeholder="Ingrese su contraseña", type_="password",
                            style ={"position": "absolute", 
                                "top": "48vh", 
                                "left":"850px",
                                "fontSize": "1.2em", 
                                "marginBottom": "20px", 
                                "align": "start", 
                                "width": "350px", 
                                "height": "50px",
                                "bg":"#B8BBBE",}),
                ),rx.text("FECHA DE NACIMIENTO ", 
                          style={"position": "fixed", 
                                 "top": "57%", 
                                 "transform": "translateY(50%)", 
                                 "left": "850px", 
                                 "fontSize": "1.2em", 
                                 "marginBottom": "20px", 
                                 "align": "start",  
                                 "width": "100%"}
                ),rx.vstack(rx.html("<input type='date' name='fecha' id='fecha', placeholder='Seleccione su fecha de nacimiento'>"), 
                                style={"position": "fixed", 
                                       "top": "62%",  
                                       "left": "850px", 
                                       "fontSize": "1.5em", 
                                       "marginBottom": "20px",
                                       "border": "2px solid lightgray", 
                                       "align": "start", 
                                       "width": "350px", 
                                       "height": "50px",})
            ),rx.link("Ingresar",href="http://localhost:3000/dashboard/",
                      style={"fontSize": "1.5em",
                                "position": "fixed", 
                                "top": "70%", 
                                "left": "900px", 
                                "width": "170px", 
                                "height": "50px",
                                "margin-top": "100px", 
                                "color": "white", 
                                "background-color": "black", 
                                "border": "none", 
                                "border-radius": "20px", 
                                "cursor": "pointer",
                                "text-align": "center"}),
                                
)
    
    


    
