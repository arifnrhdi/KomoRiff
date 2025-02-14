import React from "react";
import logo from "../assets/img/logo-lepkom.png";
import gwejh from "../assets/img/tes.jpg";

const AboutMe = () => {
  return (
    <div>
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-7">
        <div className="col-start-1 col-end-4 grid gap-4 text-lg font-normal md:text-[1.27rem]">
          <div>
            Halo, saya Arif Nurhadi biasa dipanggil Arif, saya lahir di
            Tangerang pada 5 Oktober 2003. Saya adalah Mahasiswa Sarjana S1
            jurusan Informatika pada Universitas Gunadarma, saya memulai kuliah
            saya pada September 2022 hingga sekarang.
          </div>
          <div>
            Saya memiliki kemampuan front-end development dan back-end
            development serta desain grafis UI UX yang saya pelajari secara
            otodidak selama kuliah.
          </div>
          <div>
            Saat menjalani sekolah menengah akhir, saya menemukan ketertarikan
            yang besar pada bidang IT. Minat ini terus tumbuh seiring
            berjalannya waktu dan mendorong saya untuk mengetahui pengetahuan
            seputar IT. Melalui kegiatan-kegiatan tersebut, saya tidak hanya
            mengembangkan pengetahuan dan keterampilan, tetapi juga belajar
            untuk bekerja sama dalam tim, menyelesaikan masalah, dan berpikir
            kritis.
          </div>
          <div>
            Dalam kehidupan sehari-hari, saya adalah pribadi yang sedikit
            pendiam. Saya senang mendengarkan musik, membaca komik, bermain
            game, dan belajar seputar full-stack development. Ada beberapa
            kekurangan yang saya miliki, salah satunya tidak suka belajar hal
            yang sangat kompleks yang membuat saya sulit untuk berkembang dengan
            cepat.
          </div>
        </div>
        <div className="col-span-3 col-end-8 mb-16 flex justify-center lg:mb-0 lg:justify-end">
          <img
            src={gwejh}
            className="h-fit w-[18rem] rounded-3xl border-5 border-slate-50 md:w-[22rem]"
          />
        </div>
      </div>
      <div className="mt-20">
        <div className="text-2xl font-bold md:text-3xl">Experience</div>
        <div className="flex flex-col gap-20 py-4">
          <div className="flex items-center gap-8 lg:items-start">
            <img
              src={logo}
              className="h-fit w-[8rem] rounded-3xl bg-gray-100 shadow-sm transition-colors"
            />
            <div className="flex w-2/3 flex-col gap-2">
              <table className="hidden w-full text-left text-lg lg:table">
                <thead className="border-b-1">
                  <tr>
                    <th>Institusion Name</th>
                    <th>Started</th>
                    <th>Finished</th>
                  </tr>
                </thead>
                <tbody className="h-10">
                  <tr>
                    <td>LepKom</td>
                    <td>October 2024</td>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>
              <div className="block lg:hidden">
                <div className="text-2xl font-bold tracking-wide md:text-3xl">
                  Lepkom
                </div>
                <div className="text-sm">October 2024 - Now</div>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-gray-50 md:gap-4 md:text-lg">
                <div className="rounded-md bg-zinc-900 p-1 md:px-2 dark:bg-slate-200 dark:text-zinc-900">
                  Assistant
                </div>
                <div className="rounded-md bg-zinc-900 p-1 md:px-2 dark:bg-slate-200 dark:text-zinc-900">
                  Problem Solving
                </div>
                <div className="rounded-md bg-zinc-900 p-1 md:px-2 dark:bg-slate-200 dark:text-zinc-900">
                  Team Work
                </div>
                <div className="rounded-md bg-zinc-900 p-1 md:px-2 dark:bg-slate-200 dark:text-zinc-900">
                  Instructor
                </div>
                <div className="rounded-md bg-zinc-900 p-1 md:px-2 dark:bg-slate-200 dark:text-zinc-900">
                  Web
                </div>
                <div className="rounded-md bg-zinc-900 p-1 md:px-2 dark:bg-slate-200 dark:text-zinc-900">
                  DBMS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
