import logo from './logo.svg';
import Transection from './components/Transection'
import FormComponent from './components/FormComponent'
import ReportComponent from './components/ReportComponent'
import { useState, useEffect, useReducer } from "react"
import { v4 as uuidv4 } from 'uuid'
import DataContext from './data/DataContext'
import { element } from 'prop-types';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// ---------------------------------
// * การสร้าง Component ซ้อน Component
const Title = () => <h4 style={{color:"red"}}>โปรแกรมบัญชีรายรับ-รายจ่าย</h4> // arrow function 

// ---------------------------------

// การเรียกใช้งาน
function App(props) {

  /*
  - การนิยามตัวแปร
  - การนิยามและส่งค่าผ่าน properties ไปที่หน้า item

  const title = "ค่าอาหาร"
  const amount = 800
  */
  // ตัวแปรแบบ Array (ค่าเริ่มต้นของโปรแกรม)
  // const initData = [
  //     {id : uuidv4(), title : "ค่าน้ำมัน",  amount : -900},
  //     {id : uuidv4(), title : "เงินเดือน",  amount : 11000},
  // ]
  const initData = []
  // ---------------------------------

  // รับค่าจากหน้า FormComponent
  const onAddNewItem = (newItem) => {
    setItems ((prevItem) => {       // ทำให้ข้อมูลที่ถูกส่งเข้ามาแทรกเข้าไปใน index แรกสุด
      return [newItem, ...prevItem] // รีเทิร์นออกไปเป็น Array
    })
  }

  // ---------------------------------
  // * Statefull
  // ข้อมูลเริ่มต้นของการคำนวนรายรับรายจ่าย

  // กำหนดค่าเริ่มต้นผ่านการใช้งาน Statefull
  const [items, setItems] = useState(initData) 

  // State สำหรับคำนวนรายรับ
  const [reportIncome, setReportIncome] = useState(0) 

  // State สำหรับคำนวนรายจ่าย
  const [reportExpence, setReportExpence] = useState(0) 

  // ---------------------------------
  // * useEffect
  // คำนวนรายรับรายจ่ายโดยใช้งาน useEffect
  useEffect (() => {
    const amounts = items.map (items => items.amount) // เก้บข้อมูล items.amount ลงใน Array ที่ชื่อ amount
    const income  = amounts.filter (element => element > 0).reduce ((total, element) => total += element, 0) // ใช้ filter ในการกรองข้อมูลรายรับ และใช้ reduce ในการเปลี่ยนแปลงค่า
    const expense = (amounts.filter (element => element < 0).reduce ((total, element) => total += element, 0)) * -1 // คูณ -1 เพื่อนำสัญลักษณ์ลบออก  
  
    // เก็บค่าลงใน Report
    setReportIncome (income)
    setReportExpence(expense)

  }, [items, reportIncome, reportExpence])

  // --------------------------------------
  // * useReducer
  // โครงสร้าง คือ [ผลจากการเปลี่ยนแปลง state, dispatch หรือส่วนของการเรียกใช้ตัว action] = useReducer (reducer ที่เราต้องการจำทำงานด้วย , state ที่เราจะส่งเข้าไปทำงานใน reducer)
  
  /// State สำหรับเปิดปิด Report
  const [showReport, setShowReport] = useState (true)

  const reducer = (state, action) => { // state คือ state ที่ต้องการให้เกิด action, action คือรูปแบบการกระทำต่อ state
    switch (action.type) {
      case "show" :
        return setShowReport (true)
      case "hide" :
        return setShowReport (false)
    }
  }
  const [result, dispatch] = useReducer (reducer, showReport)
  // --------------------------------------
  
  // ตัวอย่างการเรียกใช้งาน Component
  return (

    /*
      Provider คือส่วนที่ทำการกระจายข้อมูลไปใน Component ต่างๆที่อยู่ภายใต้ provider 
      โดยข้อมูลที่ถูกส่งไปให้ใช้งานจะถูกกำหนดอยู่ใน value

      ตัวอย่างการส่งข้อมูลผ่าน Provider
    */
    <DataContext.Provider value={
      {
        name   : "nathasophon",
        income : reportIncome,
        expense: reportExpence
      }
    }>
      <div className="container">
        <Title/>
        
        {/* ตัวอย่างการใช้งาน router */}
        <BrowserRouter>
          <div>
            <ul className='horizontal-menu'>
              <li>
                <Link to="/">ข้อมูลบัญชี</Link>
              </li>
              <li>
                <Link to="/insert">ข้อมูลบัญชี</Link>
              </li>
            </ul>
          </div>
          <Routes>
            <Route path="/" element={ showReport && <ReportComponent /> } />
            <Route path="/insert" element={
              /* onAddItem มีไว้เพื่อรับค่าที่ถูกส่งเข้ามาในหน้านี้ */ 
              <div>
                <FormComponent onAddItem={onAddNewItem} />
                <Transection items={items} />
              </div>
            } />
          </Routes>
        </BrowserRouter>
        <button onClick={() => dispatch({type:'show'}) } >แสดง</button>
        <button onClick={() => dispatch({type:'hide'}) } >ซ่อน</button>
      </div>
    </DataContext.Provider>

  )
}

export default App;
