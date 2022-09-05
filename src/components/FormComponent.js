import { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';

const FormComponent = (props) => {
    
    // การใช้งาน event
    const input_title = (event) => {

        // ส่งค่าเข้าไปใน setTitle
        setTitle(event.target.value)
    }
    const input_amount = (event) => {

        // ส่งค่าเข้าไปใน setTitle
        setAmount(event.target.value)
    }
    const save_item = (event) => {

        event.preventDefault ()
        // ฟังก์ชั่นสำหรับเก็บข้อมูลใน form โดยอ้างอิงจากข้อมูลที่ถูกเก็บใน state
        const itemData = {
            id    : uuidv4(),
            title : title, 
            amount: Number(amount) // แปลงค่าเป็น number
        }
        
        // ส่งค่า itemData ไปที่หน้า App.js ผ่าน propertiy ที่ชื่อว่า onAddItem
        props.onAddItem (itemData)

        // เคลียร์ค่าใน form ให้เป้นค่าว่าง
        setTitle ("")
        setAmount(0)

    }

    // การใช้งาน useState, Statefull
    // โครงสร้างคือ [ชื่อ state, ฟังก์ชั่นที่มีการเปลี่ยนแปลงค่า] = useState(ค่าเริ่มต้น)

    const [title, setTitle] = useState("")              // ค่าเริ่มต้นคือค่าว่าง
    const [amount, setAmount] = useState(0)             // ค่าเริ่มต้นคือ 0
    const [formValid, setformValid] = useState(false)   // สถานะของปุ่มเพิ่มข้อมูล

    // การใช้งาน useEffect (useEffect จะทำงานทุกครั้งที่หน้าจอมีการเปลี่ยนแปลง)
    // โครงสร้างคือ useEffect(Callback Function, ค่าที่ต้องการนำไปผูกเมื่อมีการเปลีย่นแปลง)
    useEffect(() => {
        const checkData = title.trim().length > 0 && amount != 0
        console.log (checkData)
        setformValid(checkData)
    }, [amount])

    return (
        <div>
            <form onSubmit={save_item}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={input_title} value={title} />
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="ระบุชื่อจำนวนเงินของคุณ" onChange={input_amount} value={amount} />
                </div>
                <div>
                    <button type="submit" className="btn" disabled={!formValid}>เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    )

}


export default FormComponent