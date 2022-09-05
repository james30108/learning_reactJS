import { createContext, useContext } from "react"
import DataContext from "../data/DataContext"

function ReportComponent () {

    // ตัวอย่างการใช้งาน useContext ที่ใช้ในการดึงข้อมูลมาจาก Provider
    const {name, income, expense} = useContext(DataContext)
    return (
        <div>
            {
                /* ตัวอย่างการดึงข้อมูลมาใช้งานแบบ Consumer
                <DataContext.Consumer>
                {context => <p> รายรับ : {context.income} รายจ่าย : {context.expense} </p>}
                </DataContext.Consumer>
                */
            }
            {
                // ตัวอย่างการดึงข้อมูลมาใช้งานแบบ useContext
            }
            <h4>ยอดเงินคงเหลือ (บาท)</h4>
            <h1> {income-expense} </h1>
            <div className="report-container">
                <div>
                    <h4>รายได้ทั้งหมด</h4>
                    <p className="report report-income"> {income} </p>
                </div>
                <div>
                    <h4>รายจ่ายทั้งหมด</h4>
                    <p className="report report-expense"> {expense} </p>
                </div>
            </div>
        </div>
    )
}

export default ReportComponent