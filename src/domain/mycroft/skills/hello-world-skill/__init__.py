from mycroft import MycroftSkill, intent_handler
import requests


class HelloWorld(MycroftSkill):
    def __init__(self):
        MycroftSkill.__init__(self)

    #

    @intent_handler("world.hello.intent")
    def handle_world_hello(self, message):
        requests.get("http://0.0.0.0:3000/")
        self.speak_dialog("world.hello")

    #


#


def create_skill():
    return HelloWorld()


#
