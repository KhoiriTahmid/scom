# Penjelasan
- Folder api berisi 3 route api, berupa:
  - GET /data : get comments ke DB, return Array of Object
  - GET /ml : req ke ML api, return {status}
  - GET /polling : cek apa bg task ML udah selesai. return {status}

- File service.ts berisi 3 service untuk dipake di FE:
  - processComments(video_id) : req ke GET /ml, return {status}
  - getComments() : req ke GET /data, return Array of Object
  - polling() : req ke GET /polling, return true (kalo udah selesai) atau false (klo blom selesai)
 
- Tentang DB:
  - Folder entities : berisi kek schema DB
  - folder lib : berisi konfigurasi DB
  - .env : berisi url DB

- Page.tsx : berisi cara integrasi semua hal diatas, hasilnya variable data yang berisi seluruh comments

## Cara pakai:
- clone
- npm init

keknya gitu doang
