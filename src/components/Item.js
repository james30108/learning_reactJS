import PropTypes from 'prop-types';

// การเรียกใช้งาน properties 
const Item = (props) => {

    // props Destructuring หรือการกำหนดตัวแรปให้กับค่าที่ส่งเข้ามา
    const {title, amount} = props
    const status = amount < 0 ? "expense" : "income" // แยกรายรับและรายจ่าย
    
    return (
        <ul className="item-list">
            <li className={status} >{title} <span>{amount} บาท</span></li>
        </ul>
    )

} // arrow function 

// การใช้งาน prop-types เพื่อตรวจสอบข้อมูลที่ถูกส่งเข้ามาผ่าน props
Item.propTypes = {
    title  : PropTypes.string.isRequired,
    amount : PropTypes.number.isRequired
}

export default Item