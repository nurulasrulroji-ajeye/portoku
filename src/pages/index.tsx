import { useEffect, useState } from "react";

const himpunanBilanganAsli = [
  83, 1, 78, 26, 67, 54, 49, 7, 36, 99, 26, 19, 15, 7, 21, 39, 7, 2, 8,
];
const HomePage = () => {
  //jumlah anggota Variable Himpunan Bilangan Asli
  const [hasilUrutan, setHasilurutan] = useState<string>("");
  let jumlah_anggota: number = 0;
  for (let i = 0; i < himpunanBilanganAsli.length; i++) {
    jumlah_anggota++;
  }

  //anggota terkecil dari Variable Himpunan Bilangan Asli
  let anggota_terkecil: number = himpunanBilanganAsli[0];
  for (let i = 1; i < himpunanBilanganAsli.length; i++) {
    if (himpunanBilanganAsli[i] < anggota_terkecil) {
      anggota_terkecil = himpunanBilanganAsli[i];
    }
  }

  //menghasilkan anggota terbesar dari Variable Himpunan Bilangan Asli
  let anggota_terbesar: number = himpunanBilanganAsli[0];
  for (let i = 1; i < himpunanBilanganAsli.length; i++) {
    if (himpunanBilanganAsli[i] > anggota_terbesar) {
      anggota_terbesar = himpunanBilanganAsli[i];
    }
  }

  //mencari & menghasilkan anggota dari Variable Himpunan Bilangan Asli dengan nilai angka sama dan lebih dari satu
  let anggota_duplikat: number[] = [];
  for (let i = 0; i < himpunanBilanganAsli.length; i++) {
    for (let j = i + 1; j < himpunanBilanganAsli.length; j++) {
      if (himpunanBilanganAsli[i] === himpunanBilanganAsli[j]) {
        anggota_duplikat.push(himpunanBilanganAsli[i]);
        break;
      }
    }
  }

  //ke 5
  for (let i = 0; i < himpunanBilanganAsli.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < himpunanBilanganAsli.length; j++) {
      if (himpunanBilanganAsli[j] < himpunanBilanganAsli[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      const temp = himpunanBilanganAsli[i];
      himpunanBilanganAsli[i] = himpunanBilanganAsli[minIndex];
      himpunanBilanganAsli[minIndex] = temp;
    }
  }

  const HandleHasil = () => {
    for (let i = 0; i < anggota_duplikat.length; i++) {
      setHasilurutan(
        `${anggota_duplikat[i]} berada di urutan ke-${
          himpunanBilanganAsli.indexOf(anggota_duplikat[i]) + 1
        }`
      );
    }
  };

  // 6. ganjil genap
  let ganjil: number = 0;
  let genap: number = 0;
  for (let i = 0; i < himpunanBilanganAsli.length; i++) {
    if (himpunanBilanganAsli[i] % 2 === 0) {
      genap++;
    } else {
      ganjil++;
    }
  }

  //7. mengkelompokkan dan menampilkan anggota Variable Himpunan Bilangan Asli dalam kelompok bilangan ganjil dan bilangan genap
  let genapArr: number[] = [];
  let ganjilArr: number[] = [];
  for (let i = 0; i < himpunanBilanganAsli.length; i++) {
    if (himpunanBilanganAsli[i] % 2 === 0) {
      genapArr.push(himpunanBilanganAsli[i]);
    } else {
      ganjilArr.push(himpunanBilanganAsli[i]);
    }
  }

  useEffect(() => {
    HandleHasil();
  }, [HandleHasil]);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="text-center font-bold">
        <p>jumlah anggota Variable Himpunan Bilangan Asli: {jumlah_anggota}</p>
        <p>
          Anggota terkecil dari Variable Himpunan Bilangan Asli:{" "}
          {anggota_terkecil}
        </p>
        <p className="flex gap-3 w-full text-center justify-center items-center">
          Menghasilkan anggota terbesar dari Variable Himpunan Bilangan Asli:{" "}
          {anggota_duplikat.map((items) => {
            return <p className="flex items-center">{items}</p>;
          })}
        </p>
        <p>
          diurutkan anggota himpunan bilangan asli dari kecil ke besar, untuk
          anggota yang memiliki nilai angka yang sama dan lebih dari satu pada
          soal nomor 4 berada diurutan ke berapakah di Variable Himpunan
          Bilangan Asli: {hasilUrutan}
        </p>
        <p>
          menghitung jumlah bilangan ganjil dan bilangan genap ada berapa
          jumlahnya masing-masing: <span>ganjil: {ganjil}</span>{" "}
          <span>genap: {genap}</span>
        </p>
        <p>
          mengkelompokkan dan menampilkan anggota Variable Himpunan Bilangan
          Asli dalam kelompok bilangan ganjil dan bilangan genap:{" "}
          <span>ganjil: {ganjilArr.join(",")}</span>{" "}
          <span>genap: {genapArr.join(",")}</span>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
