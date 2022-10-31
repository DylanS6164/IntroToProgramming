class Person:
    def __init__(self, name, birthdate, num_of_cats):
        self.name = name
        self.birthdate= birthdate
        self.num_of_cats = num_of_cats
        
person1 = Person("Dylan Stritzinger", "5/21/2004", 0)

print(person1.name)
print(person1.num_of_cats)
print(person1.birthdate)

class School:
    def __init__(self, building, classrooms, teachers, students, books, notebooks, pencils, pencil_sharpeners, erasers, whiteout):
        self.building = building
        self.classrooms = classrooms
        self.teachers = teachers
        self.students = students
        self.notebooks = notebooks
        self.pencils = pencils
        self.pencil_sharpeners = pencil_sharpeners
        self.erasers = erasers
        self.whiteout = whiteout

school1 = School("YES", "YES/13", "YES/15" ,"YES/100", "NO", "YES/50", "YES/100")
