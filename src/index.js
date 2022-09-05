import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// นำเข้าไฟล์ Component
import HelloComponentExternal from './components/HelloComponent';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(

  // App มาจากไฟล์ App.js
  <React.StrictMode>
    <App />
  </React.StrictMode>

);

// ------------------------------
/*
การสร้าง Component
1. แบบ function
2. แบบ class
3. แบบนำเข้าจากไฟล์ด้านนอก
*/

// แบบ function
function HelloComponent () {
  return <h1>ทดสอบการสร้าง Component แบบ Function</h1>
}
// นำไปแสดงผล
// root.render (<HelloComponent/>)
// ------------------------------

// แบบ class
class HelloComponentClass extends React.Component {
  render () {
    return <h1>ทดสอบการสร้าง Component แบบ Class</h1>
  }
}
// นำไปแสดงผล
//root.render (<HelloComponentClass/>)
// ------------------------------

// แบบนำเข้า (External)
//root.render (<HelloComponentExternal/>)


// ------------------------------
// ------------------------------
// * React JSX
// * สามารถเขียนได้ใน div / section, article / Flagment / <> ก็ได้

// ตัวอย่าง
function ExampleJSX1 () {
  return (
    <div>
      <h1>ตัวอย่างการทำงาน 1 แบบที่ใช้ div ครอบ</h1>
    </div>
  )
}
function ExampleJSX2 () {
  return (
    <section>
      <article>
        <h1>ตัวอย่างการทำงาน 2 แบบที่ใช้ section, article ครอบ</h1>
      </article>
    </section>
  )
}
function ExampleJSX3 () {
  return (
    <React.Fragment>
      <h1>ตัวอย่างการทำงาน 3 แบบที่ใช้ Flagment ครอบ</h1>
    </React.Fragment>
  )
}
// ------------------------------
// ------------------------------







// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
