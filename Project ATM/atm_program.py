from atm_card import atmCard
from customer import customerList
import datetime
import random
from customer import searching

customerData = []
def randoming():  #Generate Random number to ten numbers for cust. ref. numbers
    randoms = ''
    for i in range(0,10):
        n = random.randint(0,9)
        randoms = randoms + str(n)
    return int(randoms)
closed = False
def closeToMenu(closethis):
    if closethis == 5:
        closed = True
while True: #untuk cek apakah user sudah memasukkan angka yang benar, akan terus menanyakan menu yang benar jaga-jaga jika user jail
    print('------------------------------------')
    print('1. Create an account')
    print('2. Log in to account')
    print('0. Exit')
    print('------------------------------------')

    pilihan_user = int(input('Silahkan pilih menu: '))
    if pilihan_user == 1:
        nama = input('Nama anda: ')
        customer_name = nama
        pin_ser = int(input('Masukkan PIN anda: '))
        uang_setor = input('Tabungan awal : Rp.')
        randomCustomerCard = randoming()
        CustomerCard =  atmCard( nama, pin_ser, uang_setor, randomCustomerCard)
        customerData.append(CustomerCard)
        print('\n'+ CustomerCard.info())
    elif pilihan_user == 2:
        while True:
            count=0
            customer_masuk = int(input('Masukkan Customer Number anda: '))
            pin_masuk = int(input('Masukkan PIN anda: '))
            search = searching(customerData, customer_masuk, pin_masuk)
            if count == 2:
                print('\nAkun anda diblokir, karena salah memasukkan customer card dan PIN anda selama 3 kali ')
                break
            elif search == None:
                print('PIN atau customer card anda salah, mohon diulangi sekali lagi\n')
                count = count + 1
                print(count)
            elif pin_masuk == int(customerData[search].defPIN) and customer_masuk == int(customerData[search].randomCustomerCard):
                print('Helloo selamat datang kembali, ' + customerData[search].name)
                while True:
                    print('1. Cek Saldo')
                    print('2. Tambah Tabungan')
                    print('3. Tarik Tunai')
                    print('4. Ganti PIN')
                    print('5. Log Out')
                    print('------------------------------------')
                    pilihan_user_fitur = int(input('Silahkan pilih menu: '))
                    if pilihan_user_fitur == 1:
                        print('\nSaldo anda sekarang adalah Rp. ' + str(customerData[search].defBalance))
                        print('Apa yang anda perlukan lagi? \n')
                    elif pilihan_user_fitur == 2:
                        while True:
                            nominal = int(input('Mau simpan berapa? Rp. '))
                            if nominal > 0:
                                saldo = int(customerData[search].defBalance)
                                saldo = saldo + nominal
                                print('\nAnda menambah Rp. '+ str(nominal) +'\nSaldo anda sekarang Rp.' + str(saldo))
                                customerData[search].defBalance = str(saldo)
                                break
                            else:
                                print('Harap masukkan nominal angka yang benar')
                    elif pilihan_user_fitur == 3:
                        while True:
                            nominal = int(input('Mau tarik berapa? Rp. '))
                            saldo = int(customerData[search].defBalance)
                            if nominal > 0 and nominal <= saldo:
                                saldo = saldo - nominal
                                print('\nAnda menarik Rp. '+ str(nominal) +'\nSaldo anda sekarang Rp. ' + str(saldo))
                                customerData[search].defBalance = str(saldo)
                                break
                            elif nominal > saldo:
                                print('Saldo anda tidak cukup untuk menarik uang sebanyak itu')
                            else:
                                print('Harap masukkan nominal angka yang benar')
                    elif pilihan_user_fitur == 4:
                        pin_change = int(input('Pastikan PIN mudah diingat dan sulit ditebak orang lain\n'))
                        customerData[search].defPIN = pin_change
                        (print('PIN anda sukses diganti, mohon masuk ulang untuk menggunakan ATM lagi'))
                        break
                    elif pilihan_user_fitur == 5:
                        break
                break
    elif pilihan_user == 0:
        break
    else:
        print("Masukkan pilihan menu yang benar!\n") 
    

#idk, mungkin bisa lebih rapi lagi dan dipotong lagi dan dipisah lagi ke module yang lain, tapi untuk sekarang aku bisanya ini :v