export default function AddButton({title, onClickHandler}){
    return <button onClick={onClickHandler} type = "button" className = "add-btn">{title}</button>
}