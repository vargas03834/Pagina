from basados import styles
from basados.templates import template

import reflex as rx

@template(route="/", title="Menu", image="/github.svg")
def index() -> rx.Component:
    return rx.vstack(
        rx.heading("Lo mejor en ", style = {"position": "fixed", "top": "50%", "transform": "translateY(-300%)", "left": "100", "fontSize": "2em", "marginBottom": "20px", "align": "start"}),
        rx.vstack(
        rx.heading("Smartphone's", style ={"position": "fixed", "top": "50%", "transform": "translateY(-100%)", "left": "100", "fontSize": "4em", "marginBottom": "20px", "align": "start"}),
        rx.link("Explora Ahora", href="http://localhost:3000/settings/", style={"fontSize": "1.4em","position": "fixed", "top": "50%", "transform": "translateY(0%)", "left": "100", "width": "150px", "height": "40px", "margin-top": "100px", "color": "white", "background-color": "black", "border": "none", "border-radius": "20px", "cursor": "pointer"}),  
        rx.hstack(
            rx.chakra.button_group(
                rx.button("Inicio", font_size="0.7em", color = "black"),
                rx.button("Productos",font_size="0.7em", color = "black"),
                rx.button("Sobre Nosotros",font_size="0.7em", color = "black"),
                rx.button("Soporte",font_size="0.7em", color = "black"),
                variant="link",
                spacing=8,
            ), 
            style={"position": "fixed", "top": "11%", "left": "250", "transform": "translateY(-50%)", "widht": "100%", "fontSize": "2em"},
        ),
        
        rx.box(
            style={"position": "fixed", "top": "0", "right": "0", "width": "600px", "height": "100%", "background-color": "#B8BBBE"},
        ),rx.hstack(
            rx.input(placeholder="Buscar", style={"background-color": "white", "top": "11%" }),
            rx.icon(tag="search", style={"position": "fixed", "right": "2"}),
            style={"position": "fixed", "top": "11%", "right": "200", "transform": "translateY(-50%)","widht": "100%"},
        ),rx.hstack(
            rx.image(
                src="/celular.png",
                style={
                    "position": "fixed",
                    "top": "50%",
                    "transform": "translateY(-50%)",
                    "right": "200px",
                    "width": "auto",
                    "height": "auto"
    }
)

        )
    )
    )