import random
from customer import customerList

class atmCard:
    def __init__(self, name, defPIN, defBalance, randomCustomerCard):
        self.name = name
        self.defPIN = defPIN
        self.defBalance = defBalance
        self.randomCustomerCard = randomCustomerCard
        customerList(self.name, self.defPIN, self.defBalance, self.randomCustomerCard)


    def info(self):
        return  'Halo, Terima Kasih '+ self.name + '\nSaldo awal anda Rp. ' + str(self.defBalance) +'\n' + 'Customer Card: ' + str(self.randomCustomerCard)


