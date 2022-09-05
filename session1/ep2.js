// การใช้งาน Array

// --------------------------------------

const data1 = [10,20,30]
const data2 = [40,50]

console.log (data1.join ())         // แปลง Array เป็น String
console.log (data1.join (" / "))    // กำหนดตัวคั่นกลาง
console.log (data1.concat(data2))   // การต่อสมาชิก Array

data1.push (500)                    // เพิ่มสมาชิก
data1.push (...[70,80])             // เพิ่มสมาชิก
data1.pop ()                        // ลบสมาชิกตัวสุดท้าย
data1.shift ()                      // ลบสมาชิกตัวแรก
data1.unshift (5)                   // เพิ่มสมาชิกตัวแรก

const data3 = [10,20,30,40,50,60]
const data4 = [10,20,30,40,50,60]
data3.splice (1,3)                  // ลบสมาชิกใน index ที่ 1 ถึง 3 (20,30,40)
data3.splice (1,3,999,555,666)      // ลบสมาชิกใน index ที่ 1 ถึง 3 และใส่ 999,555,666 ลงไปแทน
data4.slice (1,3)                   // แสดงสมาชิกใน Array (20,30)

// --------------------------------------
// For, For of, Foreach

const data5 = [10,20,30,40,50,60]

// for 
for (let i = 0; i < data5.length; i++) {
    console.log ("for ลำดับที่" + data5[i])
}

// foreach
data5.forEach(element => {
    console.log ("foreach ลำดับที่" + element)
})

// for of
for (const iterator of data5) {
    console.log ("for of ลำดับที่" + iterator)
}

// --------------------------------------
// ค้นหาข้อมูลใน Arary

const data6 = [10,20,30,40,50,60]

console.log (data6.indexOf(20))                          // แสดงค่าตำแหน่ง ถ้าไม่มีจะแสดง -1
console.log (data6.find (element => element == 50))      // ค้นหาข้อมูล ถ้าเจอแล้วจะตอบกลับมา
console.log (data6.findIndex (element => element == 50)) // ค้นหาข้อมูล ถ้าเจอแล้วจะตอบเลข Index กลับมา

// --------------------------------------
// Arary Map หรือการเปลี่ยนแปลงค่าแล้วเก็บลงใน Array ใหม่

const data7     = [10,20,30,40,50,60]
const result1   = data7.map (element => element * 2)
console.log (result1) 

// --------------------------------------
// Arary Filter การคัดกรองสมาชิกใน Array แล้วเก็บค่าลง Array ใหม่

const data8     = [10,20,30,40,50,60]
const result2   = data7.filter (element => element > 20)
console.log (result2) 

// --------------------------------------
// Arary Reduce หรือการการะทำต่อค่าที่อยู่ใน Array ให้ออกมาเป็นค่าๆหนึ่ง

// โครงสร้าง array.reduce ((ค่าที่ถูกประมวลผล, element) => {}, ค่าเริ่มต้น) ** หลักๆคือจะต้องมี ค่าที่ต้องการ (Callback Function) และค่าเริ่มต้น

const data9     = [10,20,30,40,50,60]
const result3   = data9.reduce ((value, element) => {
    const total = element + value
    return total
}, 0)
// value = 0
// total = 10 + 0 
// total = 10 + 20 
// total = 30 + 30 
// total = 30 + 40 
console.log (result3)