''' 
Animal - Bird - Parrot
    |
    --- Cat - House Cat
        |
        Tiger
'''

# rewrite js example with animals classes in python 

class Animal:
    def __init__(self, color = 'yellow', energy = 100):
        self.color = color
        self.energy = energy
    
    def is_active(self):
        if self.energy > 0:
            self.energy -= 20
            print("Energy is decreasing, currently at: ", self.energy)
        else:
            self.sleep()
    
    def sleep(self):
        self.energy += 20
        print('Energy is increasing, currently at:', self.energy)

    def get_color(self):
        print('Color: ', self.color)    

class Cat(Animal):
    def __init__(self, sound = 'purr', can_jump_high = True, can_climb_trees = True):
        super().__init__()
        self.can_jump_high = can_jump_high
        self.can_climb_trees = can_climb_trees
        self.sound = sound
    
    def make_sound(self):
        print(self.sound)

class HouseCat(Cat):
    def __init__(self, house_cat_sound = 'meow'):
        super().__init__()
        self.house_cat_sound = house_cat_sound
    
    def make_sound(self, option):
        if option:
            super().make_sound()
        print(self.house_cat_sound)

class Tiger(Cat):
    def __init__(self, tiger_sound = 'roar!'):
        super().__init__()
        self.tiger_sound = tiger_sound
    
    def make_sound(self, option):
        if option:
            super().make_sound()
        print(self.tiger_sound)

class Bird(Animal):
    def __init__(self, can_fly = True, sound='chirp'):
        super().__init__()
        self.sound = sound
        self.can_fly = can_fly
    
    def make_sound(self):
        print(self.sound)

class Parrot(Bird):
    def __init__(self, can_talk = True):
        super().__init__()
        self.can_talk = can_talk
    
    def make_sound(self, option):
        if option:
            super().make_sound()
        if self.can_talk:
            print("I'm talking parrot")

polly = Parrot(can_talk=True)
fiji = Parrot(can_talk=False)

print("Parrot Polly: ")
polly.color = 'red'
polly.get_color()
polly.make_sound(True)


print("Parrot Fiji: ")
fiji.make_sound(False)

penguin = Bird(False, 'shriek')
penguin.color = 'black and white'
penguin.energy = 200
print(penguin)