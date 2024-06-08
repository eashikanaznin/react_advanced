import { useEffect } from "react";
export function Toast({ toasts, setToasts }) {

  function removeToast(index){
    setToasts((currentToasts) => currentToasts.filter((_, i) => i !== index));
  }

  return (
    <>
      <div className="toast-container bottom-right">
        {toasts.map((toast, index) => (
          <div key={index} className="toast" onClick={()=>removeToast(index)}>
            {toast}
          </div>
        ))}
      </div>
    </>
  );
}
