from basados.templates import template
import reflex as rx

@template(route="/dashboard", title="Inicio")
def dashboard() -> rx.Component:
    return  rx.vstack(
            rx.heading("Acceso", style= {"position": "fixed", "top": "10%", "transform": "translateY(0%)", "left": "880", "fontSize": "3em", "marginBottom": "20px", "align": "start","width": "100%"}),
            rx.vstack(rx.text("Inicia sesión para continuar", style= {"position": "fixed", "top": "17%", "transform": "translateY(0%)", "left": "810", "fontSize": "1.5em", "marginBottom": "20px", "align": "start", "width": "100%"}),
            style={"position": "center"}
            ),rx.vstack(
            rx.text("CORREO ELECTRONICO " , style= {"position": "fixed", "top": "23%", "transform": "translateY(0%)", "left": "810", "fontSize": "1.2em", "marginBottom": "20px", "align": "start","width": "100%"}),
            rx.hstack(
                rx.chakra.icon(tag="moon", style ={"position": "fixed", "top": "28.2%", "transform": "translateY(0%)", "left": "775", "fontSize": "1.2em", "marginBottom": "20px", "align": "start"}),
                rx.input(
                    placeholder="Ingrese su correo electrónico",
                    style ={"position": "fixed", "top": "27%", "transform": "translateY(0%)", "left": "800", "fontSize": "1.2em", "marginBottom": "20px", "align": "start", "width": "350px", "height": "50px"},
                )
            )
            ),rx.button("Regresar", style={"position": "fixed", "bottom": "10px", "right": "10px", "color": "white", "background-color": "black", "border": "none", "border-radius": "4px", "cursor": "pointer"}),
        rx.vstack(
            rx.text("CONTRASEÑA ", style ={"position": "fixed", "top": "34%", "transform": "translateY(0%)", "left": "810", "fontSize": "1.2em", "marginBottom": "20px", "align": "start","width": "100%"}),
            rx.hstack(
                rx.chakra.icon(tag="view_off", style ={"position": "fixed", "top": "39.5%", "transform": "translateY(0%)", "left": "775", "fontSize": "1.2em", "marginBottom": "20px", "align": "start"}),
                rx.input(
                    placeholder="Ingrese su contraseña",type_="password",
                    style ={"position": "fixed", "top": "38%", "transform": "translateY(0%)", "left": "800", "fontSize": "1.2em", "marginBottom": "20px", "align": "start", "width": "350px", "height": "50px"},
                )
            )
        ),rx.link(
            "Ingresar",href="http://localhost:3000/menu/",  # Puedes cambiar el texto del botón según tus necesidades
           # on_click=handle_login,  # Reemplaza 'handle_login' con la función que maneja el evento de clic
            style={"fontSize": "1.4em",
                   "position": "fixed", 
                   "top": "45%", 
                   "transform": "translateY(0%)", 
                   "left": "900",
                   "width": "170px", 
                    "height": "50px",
                    "margin-top": "100px", 
                    "color": "white", 
                    "background-color": "black", 
                    "border": "none", 
                    "border-radius": "20px", 
                    "cursor": "pointer",
                    "text-align": "center"},
        )
    )