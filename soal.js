/* SOAL
Buatlah sebuah Class Student, yang memiliki atribut berikut:
● Name, *clear
● Age, *clear
● Date of Birth, *clear ===>>> ???
● Gender *clear
● Student ID (bisa berupa angka atau teks), dan *clear ==>>> ???
● Hobbies (bisa menampung lebih dari 1 hobi). *clear


Class tersebut juga bisa memanggil fungsi dengan proses sebagai berikut:
● SetName: mengubah nama student dengan mengirimkan satu parameter ke dalam fungsi berupa teks *clear
● SetAge: mengubah umur student dengan mengirimkan satu parameter ke dalam fungsi berupa angka *clear
● SetDateOfBirth: mengubah tanggal lahir student dengan mengirimkan satu parameter ke dalam fungsi berupa teks *clear
● SetGender: mengubah gender student dengan mengirimkan satu parameter ke dalam fungsi berupa teks, dan hanya
bisa menerima nilai Male atau Female *clear
● addHobby: menambah hobi dengan mengirimkan satu parameter ke dalam fungsi berupa teks *clear
● removeHobby: menghapus list hobi yang ada dengan mengirimkan satu parameter berupa teks, yang merupakan hobi
apa yang akan dihapus *clear
● getData: menampilkan seluruh data atribut murid *clear
*/


class Student{
    constructor({name, age, dateOfBirth, gender, studentID}){
        typeof(name) === "string" ? this.name = name.toLowerCase() : this.name = `input harus huruf`
        typeof(age) === "number" ? this.age = age : this.age = "masukan angka"
        this.dateOfBirth = dateOfBirth;
        if (gender.toLowerCase() === "male") {
            this.gender = "male"
            } else if(gender.toLowerCase() === "female"){
                this.gender = "female"
            } else {this.gender = "not valid"}
        // gender === "male" ? this.gender = "male" : this.gender="female"; //di form bikin hanya 2 pilihan
        this.studentID = studentID;
        this.hobbies = [];
    }

    learn(hobby){
        let foo;
        for (let i = 0; i < hobby.length; i++) {
            foo = this.hobbies.push(hobby[i])
        }
        return foo
    }

    removeHobby(rH){
        for (let index = 0; index < this.hobbies.length; index++) {
            if (this.hobbies.includes(rH)){
                if (rH === this.hobbies[index]){
                    return this.hobbies.splice(index,1)
                }
            } else{
                return `not found`
            }
        }
    }

    set nameChange(nC){
        if(/[A-Za-z]/.test(nC)){
            [this.name] = nC.toLowerCase().split(" ");
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

    set genderChange(gC){
        (gC.toLowerCase() === "male") ? this.gender="male" : this.gender = "female"
    }

    get data(){
        return `Name:${this.name}, age:${this.age}, DoB:${this.dateOfBirth}, Gender:${this.gender}, ID: ${this.studentID}, hobby: ${this.hobbies}`
    }
}


// buat percobaan
let Afgan = new Student({
    name : 1234,
    age : 30,
    dateOfBirth : "30 desember 1980",
    gender : "alien",
    studentID : "asdf2020",
})

Afgan.learn(["cooking", "singing", "running", "reading"])
Afgan.removeHobby("singing")


Afgan.nameChange = "Raisa"
Afgan.ageChange = 28
Afgan.dateOfBirthChange = "1 januari 2020"
Afgan.genderChange = "female"

console.log(Afgan)

// console.log("cek data: "+Afgan.data)