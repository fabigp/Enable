# utils/hate_speech_detection.py
from transformers import pipeline
from translate import Translator

pipe = pipeline("text-classification", model="unhcr/hatespeech-detection")

translator = Translator(to_lang="en", from_lang="es")


def eliminar_contenido_entre_angular_brackets(texto):
    resultado = []
    ignorar = False

    for char in texto:
        if char == "<":
            ignorar = True
        elif char == ">":
            ignorar = False
            resultado.append(" ")
        elif not ignorar:
            resultado.append(char)

    return "".join(resultado)


def detect_hate_speech(text: str) -> bool:
    cleaned_text = eliminar_contenido_entre_angular_brackets(text)
    translation = translator.translate(cleaned_text)
    result = pipe(translation)
    return result[0]["label"] == "hate"
