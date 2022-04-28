# Destination App

Pada repository ini , dibuat Front-End dari **[REST API](https://github.com/craftalpian/Destination-App)**. Projek **Destination App** ditujukan untuk tugas **[Probation ProClub](https://github.com/helloproclub/preparation-task-se-2022)** Telkom University.

**Anggota kelompok:**

1. Alfian Ananda Putra ([craftalpian](https://github.com/craftalpian))
1. Alifio Y. A. S ([Xenosians](https://github.com/Xenosians))
1. Galih Akbar Nugraha ([whoisgalih](https://github.com/whoisgalih))

---

## Tech

1. [React](https://reactjs.org/)
1. [Create React App](https://create-react-app.dev/docs/getting-started)
1. [Bootstrap 5](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
1. [React Router Dom](https://v5.reactrouter.com/)
1. [React Masonry CSS](https://github.com/paulcollett/react-masonry-css)
1. [SASS](https://sass-lang.com/)
1. [Github Pages](https://create-react-app.dev/docs/deployment/#github-pages)

## Usage

In the project directory, you can run:

### Clone Repository

`git clone https://github.com/whoisgalih/destination-app.git`

Menginstall dependencies:

`npm install`

Membuat file `.env` yang berisi:

```
REACT_APP_BASENAME=<YOUR_PATH_NAME>
REACT_APP_BACKEND_BASE=<YOUR_BACKEND_SERVER>
```

#### Try It Now

Aplikasi **front-end** yang sudah di build terdapat di [https://whoisgalih.github.io/destination-app/](https://whoisgalih.github.io/destination-app/#/). Tentu belum lengkap karena memerlukan back-end. Silahakan mengunjungi **[Destination App Back-End](https://github.com/craftalpian/Destination-App)** untuk memperloeh aplikasi back-end dan menjalankan di server local dengan alamat `localhost:3000`

### Available Scripts

`npm start`

Menjalankan aplikasi dalam mode development.\
Buka [http://localhost:4000](http://localhost:4000) untuk melihat dalam browser.

Halaman akan otomatis reload saat terdapat perubahan.\
Anda juga dapat melihat lint error di console.

`npm run build`

Build aplikasi unutk production dalam folder `build`.\
Ini akan membuat bundle dari aplikasi dalam mode production dan mengoptimasikan build unutk performa terbaik.

Build diperkecil dan nama file menyertakan hash.\
Aplikasi Anda siap di-deploy!

`npm deploy`

Mendeploy di github pages.\
`npm deploy` secara otomatis menjalankan build dan script `predeploy`
