from django.db import models

class CarMake(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class CarModel(models.Model):
    name = models.CharField(max_length=100)
    car_make = models.ForeignKey(CarMake, on_delete=models.CASCADE)

    def __str__(self):
        return self.name