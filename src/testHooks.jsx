import React, { useCallback, useMemo, useState } from 'react'

export default function TestHooks() {
  const [value, setvalue] = useState("")
  console.log("Rendered")

  const handleOnChange = useCallback((item) => {
    setvalue(item.target.value);
  }, [])

  return (
    <div>
      <input onBlur={handleOnChange}></input>
    </div>
  )
}

// useState - state handler
// useEffect - simula el ciclo de vida, y ejecuta efectos secundarios
// useReducer - state handler, tener estado inicial, una logica retulizable, podemos manejar un store, reemplazo de redux
// useContext
// useMemo - memory optimization
// useCallback - "
// useRef - mantiene una referencia constante al node del DOM