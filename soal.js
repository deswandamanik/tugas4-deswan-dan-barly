/* SOAL
Buatlah sebuah Class Student, yang memiliki atribut berikut:
● Name, *clear
● Age, *clear
● Date of Birth, *clear
● Gender *clear
● Student ID (bisa berupa angka atau teks), dan *clear
● Hobbies (bisa menampung lebih dari 1 hobi). *clear


Class tersebut juga bisa memanggil fungsi dengan proses sebagai berikut:
● SetName: mengubah nama student dengan mengirimkan satu parameter ke dalam fungsi berupa teks *clear
● SetAge: mengubah umur student dengan mengirimkan satu parameter ke dalam fungsi berupa angka *clear
● SetDateOfBirth: mengubah tanggal lahir student dengan mengirimkan satu parameter ke dalam fungsi berupa teks *clear
● SetGender: mengubah gender student dengan mengirimkan satu parameter ke dalam fungsi berupa teks, dan hanya
bisa menerima nilai Male atau Female
● addHobby: menambah hobi dengan mengirimkan satu parameter ke dalam fungsi berupa teks
● removeHobby: menghapus list hobi yang ada dengan mengirimkan satu parameter berupa teks, yang merupakan hobi
apa yang akan dihapus
● getData: menampilkan seluruh data atribut murid
*/


class Student{
    constructor({name, age, dateOfBirth, gender, studentID}){
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
        // gender === "male" ? this.gender = "male" : this.gender="female"; //di form bikin hanya 2 pilihan
        this.gender = "male" || "female";
        this.studentID = studentID;
        this.hobbies = [];
    }

    learn(hobby){
        return this.hobbies.push(hobby)
    }

    remove(index = this.hobbies[-1], jumlah=1){
        return this.hobbies.splice(index, jumlah)
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

    set dateOfBirthChange(dOBC){
        if(/[A-Za-z0-9]/.test(dOBC)){
            this.dateOfBirth = dOBC;
        } else {
            throw Error ("tidak valid")
        }
    }

    // set gender(gender){
    //     if(gender === "male"){
    //         this.gender = "male"
    //     } else{
    //         this.gender = "female"
    //     }
    //     // (gender === "male") ? this.gender = "male" : this.gender = "female";
    // }
}


// buat percobaan
let Afgan = new Student({
    name : "Afgan",
    age : 30,
    dateOfBirth : "30 desember 1980",
    gender : "female",
    studentID : "asdf2020",
})

Afgan.learn("cooking")
Afgan.learn("singing")
Afgan.learn("running")
Afgan.learn("reading")
Afgan.remove(2,2)


Afgan.nameChange = "Raisa"
Afgan.ageChange = 28
Afgan.dateOfBirthChange = "1 januari 2020"

console.log(Afgan)