import "./style/index.css"
import 'react-toastify/dist/ReactToastify.css';
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer } from 'react-toastify'
import Router from './Router'

import { registerLocale } from "react-datepicker";
import { enUS } from "date-fns/locale";
registerLocale('enUS', enUS)

export function App() {

    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                className={"mt-[80px]"}
            />
            <Router />

        </div>
    )
}
