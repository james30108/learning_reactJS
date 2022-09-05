import { element } from "prop-types"
import { createContext, useContext } from "react"
import Item from "./Item"

const Transection = (props) => {

    // ตัวแปรสำหรับรับค่าจาก App.js
    const {items} = props

    return (
        <div>
            <p style={{color:"red", textAlign:"left"}}>ส่วนของการทดสอบการใช้งาน CSS โดย JSX จะใช้ class ส่วนถ้าจะใช้ class แบบเดิมให้ใช้คีย์เวิร์ดว่า ClassName แทน</p>
            
            {/*
                ตัวอย่างการรับค่าต่างๆ ผ่านการใช้งาน Consumer
                <DataContext.Consumer>
                    {value=><p>{value}</p>}
                </DataContext.Consumer>
            */}
            
            
            {/*
                การกระจายค่าใน Array โดยใช้ Map
                
                ในกรณีที่ชื่อ prop เหมือนกับชื่อของตัวแปร สามารถยุบรวมกันได้โดยใช้หลักการ Spread Operator (...Element)

                ควรมีการกำหนด key ทุกครั้งเพื่อให้ข้อมูลไม่ซ้ำกัน 
                หากไม่กำหนด จำมีการแสดง error ที่ console.log ของ browser
            */}
            {
                items.map ((Element) => {
                    return <Item {...Element} key={Element.id} />
                })
            }

        </div>
    )
}

export default Transection