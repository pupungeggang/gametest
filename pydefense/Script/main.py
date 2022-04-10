import sys
import pygame

import var

import title

pygame.init()

clock = pygame.time.Clock()

def init():
    var.screen = pygame.display.set_mode((1280, 720))
    pygame.display.set_caption('Dessert Defense')

def loop():
    while 1:
        clock.tick(var.FPS)
        input_handle()
        scene_loop()

def input_handle():
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            sys.exit()

        elif event.type == pygame.MOUSEBUTTONUP:
            mouse = pygame.mouse.get_pos()
            print(mouse)

def scene_loop():
    if var.scene == 'title':
        title.loop()

init()
loop()