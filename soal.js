/* SOAL
Buatlah sebuah Class Student, yang memiliki atribut berikut:
● Name, *clear
● Age, *clear
● Date of Birth, *clear
● Gender *clear
● Student ID (bisa berupa angka atau teks), dan *clear
● Hobbies (bisa menampung lebih dari 1 hobi). *clear


Class tersebut juga bisa memanggil fungsi dengan proses sebagai berikut:
● SetName: mengubah nama student dengan mengirimkan satu parameter ke dalam fungsi berupa teks
● SetAge: mengubah umur student dengan mengirimkan satu parameter ke dalam fungsi berupa angka
● SetDateOfBirth: mengubah tanggal lahir student dengan mengirimkan satu parameter ke dalam fungsi berupa teks
● SetGender: mengubah gender student dengan mengirimkan satu parameter ke dalam fungsi berupa teks, dan hanya
bisa menerima nilai Male atau Female
● addHobby: menambah hobi dengan mengirimkan satu parameter ke dalam fungsi berupa teks
● removeHobby: menghapus list hobi yang ada dengan mengirimkan satu parameter berupa teks, yang merupakan hobi
apa yang akan dihapus
● getData: menampilkan seluruh data atribut murid
*/


class Student{
    constructor({name, age, dateOfBirth, gender, studentID, hobbies}){
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.studentID = studentID;
        this.hobbies = []
    }

    learn(hobby){
        return this.hobbies.push(hobby)
    }

    set nameChange(nC){
        if(/[A-Za-z]/.test(nC)){
            [this.name] = nC.split(" ");
        } else {
            throw Error ("salah input")
        }
    }

    set ageChange(aC){
        if(/[0-9]/.test(aC)){
            this.age = aC;
        } else {
            throw Error ("masukan hanya angka")
        }
    }


}






// buat percobaan
let Afgan = new Student({
    name : "Afgan",
    age : 30,
    dateOfBirth : "30 desember 1980",
    gender : "male",
    studentID : "asdf2020",
})

Afgan.learn("cooking")
Afgan.learn("singing")


Afgan.nameChange = "Raisa"
Afgan.ageChange = 28

console.log(Afgan)