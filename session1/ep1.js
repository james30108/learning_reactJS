// การประกาศตัวแปร

// let สามารถเปลี่ยนค่าได้ และทำงานแค่ภายใน block scope เท่านั้น
let x = "ทดสอบ1"

// const คือค่าคงที่ จะไม่สามารถเปลี่ยนแปลงค่าได้
const y = "ทดสอบ2"

// --------------------------------------
// Arrow Function (การประกาศฟังก์ชั่นแบบลดรูป)

// แบบเดิม
function name(fname, lname) {
    return fname + lname
}

// แบบลดรูป
name = (fname, lname) => fname + lname

// --------------------------------------
// การทำงานกับ Object
const customer = {
    name : "james",
    age  : 27 
}

// กรณีที่ชื่อ properties กับ ชื่อตัวแปรที่ผูกกับ properties เหมือนกัน
const name = "james"
const age = 27

const customer2 = {name, age} // เป็น Object เหมือนกัน

// กรณีที่สร้าง Method ใน Object
const customer3 = {
    name, 
    age,
    showData () {
        console.log ("แสดงข้อมูล")
    }
}

// --------------------------------------
// String แบบ Interpolation
const a1 = "John"
const a2 = `ชื่อลูกค้า ${a1}`

// --------------------------------------
// Sperad Operator การกระจายสมาชิกใน Array ** ใช้เครื่องหมายจุดสามจุด (...)
const a3 = [10,20,30]
const a4 = [4,50, ...a3]

// --------------------------------------
// Rest Parameter การส่งค่า Parameter เข้าไปทำงานใน Function โดยไม่จำกัดจำนวน (...)
summation = (...numberArr) => {
    return 
}

// --------------------------------------
// Destructuring (การสลายโครงสร้าง) หรือการกำหนดตัวแปรให้กับค่า Array หรือ Object
const color1 = ["เขียว","แดง","เหลือง"]
const [green, red, yellow] = color1 
// กรณีที่ต้องการกำหนดแค่สีเหลืองอย่างเดียว
const [, , yellow] = color1 

// แบบ Object
const product = {
    name : "คอมพิวเตอร์",
    price: 15000
}
const { name:n, price:p } = product

// --------------------------------------
// Default Parameter ค่าเริ่มต้นของ Function
getData1 = (name, address) => {
    // กำหนดค่าเริ่มต้น
    if (!address) {
        address = "กรุงเทพ"
    }
}
