'use client'
import { NextPage } from 'next';
import { ReactNode, useCallback, useState } from 'react'

const SwitchButtons:NextPage = ():ReactNode => {
    const [switchButtons, setSwitchButtons] = useState<boolean>(false);

    const useChangeStateSwitch = useCallback((state:boolean)=>{
        setSwitchButtons(state)
    },[switchButtons]);

  return (
    <button className="switch_activate" onClick={()=>useChangeStateSwitch(!switchButtons)}>
        <span className={"light_switch " + (switchButtons ? "active" : "")} ></span>
        <span 
            className={"button_switch_item " + (switchButtons ? "" : "active")} 
        >
            Навыки
        </span>
        <span
            className={"button_switch_item " + (switchButtons ? "active" : "")} 
        >
            Разработки
        </span>
    </button>
  );
};

export default SwitchButtons;