# chatapp.py
import reflex as rx

from chatapp import styles
from chatapp.state import State


def qa(question: str, answer: str) -> rx.Component:
    return rx.box(
        rx.box(
            rx.text(question, text_align="right"),
            style=styles.question_style,
        ),
        rx.box(
            rx.text(answer, text_align="left"),
            style=styles.answer_style,
        ),
        margin_y="1em",
    )
    


def chat() -> rx.Component:
    return rx.box(
        rx.foreach(
            State.chat_history,
            lambda messages: qa(messages[0], messages[1]),
        )
    )


def action_bar() -> rx.Component:
    return rx.hstack(
        rx.input(
            value=State.question,
            placeholder="Soy SmartBot, ¿En qué puedo ayudarte?",
            on_change=State.set_question,
            style=styles.input_style,
        ),
        rx.button(
            "Preguntar",
            on_click=State.answer,
            style=styles.button_style,
        ),
    )


def index() -> rx.Component:
    return rx.container(
        chat(),
        action_bar(),
    )

app = rx.App()
app.add_page(index)
app.compile()