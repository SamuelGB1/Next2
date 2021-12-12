import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect, useRef, useMemo } from 'react'
import styles from '../styles/Home.module.css'

const App = () => {

  //UseRef
  const [contador, cambiarContador] = useState(0);
  const nombre = useRef('Marcos');
  const cuentaRender = useRef(0);
  const botonContadorRef = useRef();

  

  useEffect(() => {
    console.log(botonContadorRef.current);

    if(cuentaRender.current === 0){
        cuentaRender.current = cuentaRender.current + 1;
        return;
    }
    console.log(`El contador se actualizó y su nuevo valor es ${contador}`);
  }, [contador]);
 
  const cambiarNombre = () => {
    nombre.current = 'Pepe';
    console.log(`El nuevo nombre es ${nombre.current}`);
  }
  ///

  //UseMemo

  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);

  const sumarValor1 = () =>{
    setN1(n1 + 1);
  }

  const sumarValor2 = () =>{
    setN2(n2 + 1);
  }

  let total = useMemo(() => {
    return n1 + n2;
  },[n1, n2])

  useEffect(() =>{
    console.log('Se ejecuta useEffect');
  },[n1, n2])

  return(
    <div>
      <h1>UseRef</h1>
      <h2>Contador: {contador}</h2>
      <button ref={botonContadorRef} onClick={() => cambiarContador(contador + 1)}>+1</button>
      <br/>

      <h2>Nombre: {nombre.current}</h2>
      <button onClick={cambiarNombre}>Cambiar Nombre</button>
      <br/>
      <br/>

      <h1>UseMemo</h1>
      <p>Valor 1: {n1}</p>
      <p>Valor 2: {n2}</p>
      <button onClick={sumarValor1}>Sumar Valor 1</button>
      <button onClick={sumarValor2}>Sumar Valor 2</button>
      <h3>Total = {total}</h3>
    </div>
  )
}

export default App;