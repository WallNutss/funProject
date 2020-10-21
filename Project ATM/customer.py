class customerList:
     def __init__(self, name, defPIN, defBalance, randomCustomerCard):
        self.name = name
        self.defPIN = defPIN
        self.defBalance = defBalance
        self.randomCustomerCard = randomCustomerCard



def searching(numberdata,dataCard, dataPIN):
   for i, j in enumerate(numberdata):
      if j.randomCustomerCard == dataCard and j.defPIN == dataPIN:
         code = i
         return code
      else:
         return None
