## TECHNICAL TEST FULL STACK DEV

### CASE A

1. Urutkan data di atas berdasarkan tanggal pembuatan sertifikat (createdAt).
   `Endpoint : http://localhost:3000/certificate?sortBy=createdAt&order=asc | http://localhost:3000/certificate?sortBy=createdAt&order=desc`
2. Kelompokkan data di atas berdasarkan tahun dikeluarkannya sertifikat tersebut.
   `Endpoint : http://localhost:3000/certificate?sortBy=publishYear`
3. Hitunglah, berapa total point yang didapatkan Serti di masing-masing publisher?
   `Endpoint : http://localhost:3000/certificate?sortBy=totalPoin`
4. Apa yang salah dari data di atas? Bagaimana cara memperbaikinya?

`Data di atas Sebenar nya sudah benar, akan tetapi ada beberapa property yang memiliki type data tidak sesuai dengan interface yang telah di buat. Seperti createdAt yang mana harus nya type data Date dan di tulis menggunakan string, dan untuk type jika data tersebut memiliki type tetap akan lebih baik menggunakan enum.
 Berikut contoh data yang saya rasa sesuai.`

```
enum CertificateType {
Competition = "kejuaraan",
Attendance = "kehadiran",
}

const certificates: ICertificate[] = [
{
id: 1,
name: "Finalis Lomba Coding",
type: CertificateType.Competition,
publisherId: "P001",
publisherName: "EO Hack & Coding",
point: 10,
createdAt: new Date("2014-10-05T14:48:00.000Z"),
},
{
id: 2,
name: "Finalis Lomba Makan Kerupuk",
type: CertificateType.Competition,
publisherId: "P002",
publisherName: "Panitia 17an Desa Juara",
point: 20,
createdAt: new Date("2010-10-05T14:48:00.000Z"),
},
{
id: 3,
name: "Juara 1 Lomba Panjat Pinang",
type: CertificateType.Competition,
publisherId: "P002",
publisherName: "Panitia 17an Desa Jawara",
point: 30,
createdAt: new Date("2022-10-05T14:48:00.000Z"),
},
{
id: 4,
name: "Digital Marketing Sesi 1",
type: CertificateType.Attendance,
publisherId: "P003",
publisherName: "EO Pelatihan",
point: 5,
createdAt: new Date("2014-10-05T14:48:00.000Z"),
},
];

```
