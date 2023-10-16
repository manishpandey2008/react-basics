import "./Button.css"

function Button({color,text,parentCallback}){

    const changeBgColor=(currentColor)=>{
        parentCallback(currentColor);
        event.preventDefault();
    }
    return (
       <button className={'btn '+color} onClick={()=> changeBgColor(color)} >{text}</button>
    )
}

export default Button;