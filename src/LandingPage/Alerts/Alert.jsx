import './Alerts.css'

export const Alert = ({ message }) => {
    return ( 
        <>
            <span className="alerta">{ message }</span>
        </>
    )
}