class customerList:
     def __init__(self, name, defPIN, defBalance, randomCustomerCard):
        self.name = name
        self.defPIN = defPIN
        self.defBalance = defBalance
        self.randomCustomerCard = randomCustomerCard



def searching(numberdata,data):
   for i, j in enumerate(numberdata):
      if j.randomCustomerCard == data:
         code = i
         return code
