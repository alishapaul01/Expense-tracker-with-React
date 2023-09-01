import classes from './Premium.module.css';
import {themeActions} from '../../Store/ThemeReducer';
import { useDispatch, useSelector } from 'react-redux';
import FileSaver from 'file-saver';
import * as XLSX from "xlsx";


const Premium = (props) => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
    const fileExtension = ".xlsx";
    let expenseData = [];
    let expense = Object.values(props.expense)
    expense.map(item => {
        return(
        expenseData.push({
        'Description':item.title,
        'Catgory':item.category,
        'Amount':item.amount})
        )
    })
    const dispatch = useDispatch();

    const buttonHandler = () => {
        dispatch(themeActions.buttonClicked());

    }
    const handleDownload = () => {

        const ws = XLSX.utils.json_to_sheet(expenseData);
        const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, "Expenses" + fileExtension);
        console.log('downloaded')

    }
    const isClicked = useSelector(state => state.theme.isClicked)
    return (
    <div className={classes.premium}>
       <span><button onClick={buttonHandler}>Activate Premium</button></span> 
       <span>{(props.amount > 10000 && isClicked ) && <button onClick={handleDownload}>Download File</button>}</span> 
    </div>
    )
};

export default Premium;