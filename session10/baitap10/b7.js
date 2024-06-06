"use strict";
class HinhTron {
    constructor(banKinh) {
        this._banKinh = banKinh;
    }
    get banKinh() {
        return this._banKinh;
    }
    set banKinh(banKinhMoi) {
        this._banKinh = banKinhMoi;
    }
    tinhDienTich() {
        return Math.PI * this._banKinh ** 2;
    }
    tinhChuVi() {
        return 2 * Math.PI * this._banKinh;
    }
}
let hinhTron = new HinhTron(5);
console.log("Bán kính của hình tròn:", hinhTron.banKinh);
console.log("Chu vi của hình tròn:", hinhTron.tinhChuVi());
console.log("Diện tích của hình tròn:", hinhTron.tinhDienTich());
hinhTron.banKinh = 7;
console.log("\nSau khi cập nhật bán kính:");
console.log("Bán kính của hình tròn:", hinhTron.banKinh);
console.log("Chu vi của hình tròn:", hinhTron.tinhChuVi());
console.log("Diện tích của hình tròn:", hinhTron.tinhDienTich());
