let namaDatabase = 'stok_barang';

alasql(/*sql*/ `
create localStorage database if not exists ${namaDatabase};
attach localStorage database ${namaDatabase};
use ${namaDatabase};

create table if not exists stok_barang (
    id integer auto_increment,
    nama_barang text,
    jenis_barang text,
    ukuran text,
    harga_beli number,
    harga_jual number,
    datangnya_kapan date
);


`);