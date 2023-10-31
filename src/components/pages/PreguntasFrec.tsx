import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface propsPreguntas {
    pregunta: string,
    respuesta: string
}


const PreguntasFrec = () => {

    const [open, setOpen] = useState(false);
    const [resultIndex, setResultIndex] = useState(0);

    const preguntas: propsPreguntas[] = [
        {pregunta: '¿Qué información puede aparecer en mi tarjeta virtual ?', respuesta: 'Puede aparecer: tu nombre, puesto o actividad que desempeñas en tu empresa o negocio, teléfonos de contacto, ubicación geográfica para que te visiten, página web, correo electrónico, redes sociales y una gran lista de los servicios que ofreces ilustrado con imágenes.'},
        {pregunta: '¿Cómo compro mis servicios o productos Tarjet?', respuesta: 'Ingresa a nuestra eShop y realiza la compra. Previamente tienes que tener un perfil Tarjet para poder ligar tus datos, ya que todos nuestros productos y servicios así lo requieren.'},
        {pregunta: '¿Qué formas de pago aceptan?', respuesta: 'Todas las tarjetas de crédito, débito, transferencias y pagos en efectivo en establecimientos aceptados.'},
        {pregunta: '¿El pago es por única vez?', respuesta: 'Crear tu perfil y tener una tarjeta básica es totalmente gratis, además existen un par de opciones de pago anual que te brindan varias ventajas para enriquecer tu perfil y que más gente te conozca.'},
        {pregunta: '¿Tiene vigencia mi tarjeta?', respuesta: 'Tu tarjeta virtual no tiene vigencia alguna, siempre estará disponible para que la gente la consulte.'},
        {pregunta: '¿Puedo cancelar mi perfil en cualquier momento?', respuesta: 'Si, en el momento que lo desees pues dar de baja tu perfil, o bien ponerlo en modo mantenimiento para que no se pueda ver.'},
        {pregunta: '¿Puedo actualizar la información de mi tarjeta Tarjet?', respuesta: 'Siempre y en todo momento podrás editar la información de tu perfil.'},
        {pregunta: '¿Modificar alguna información tiene algún costo extra?', respuesta: 'No, a menos que desees un diseño personalizado por nuestros diseñadores.'},
        {pregunta: '¿Qué tan seguros están mis datos?', respuesta: 'Tus datos, al ser un medio de publicidad para tu empresa o negocio, estarán visibles para quien desee consultar tu información. '},
        {pregunta: '¿Cómo guardo mi tarjeta en mi dispositivo?', respuesta: 'Directamente en la página tarjet.mx podrás crear tu perfil, en el cual se encuentran todas las opciones para administrar y guardar tu Tarjet.'},
        {pregunta: '¿Cómo envío mi tarjeta a mis clientes?', respuesta: 'En tu perfil tarjet, cuentas con varias opciones para compartir tu tarjeta de presentación.'},
        {pregunta: '¿Se requiere alguna aplicación para ver y compartir mi tarjeta?', respuesta: 'tarjet.mx  funciona desde el navegador de tu celular , Tablet o computadora no se necesita una App'},
        {pregunta: '¿En qué dispositivo se podrá visualizar mi tarjet?', respuesta: 'Cualquier dispositivo que cuente con un navegador de internet, dispositivos con Android, Apple, Windows, Huawei, etc.'},
        {pregunta: '¿Cómo funcionan las tarjetas físicas NFC?', respuesta: 'NFC es una tecnología inalámbrica de alta frecuencia y de corto alcance que permite conectar dispositivos para el intercambio de datos, de esta forma, cuando acerques tu tarjeta a un Smartphone compatible este podrá abrir tu perfil tarjet en segundos.'},
        {pregunta: '¿En cuánto tiempo recibiré mi tarjeta física NFC?', respuesta: 'Dependiendo de la zona de entrega, nuestros envíos en zona metropolitana van desde 1 día hasta 5 días en lugares más alejados.'}
    ]

    const propsAnimation = {
        open: { height: 'auto', opacity: 1 },
        closed: { height: 0, opacity: 0 }
    }

    const onChangeOpen = (index:number) => {
        setOpen(!open);

        setResultIndex(index);
    }

    return ( 
        <>
            <div className='container-fluid PreguntasFrecuentes tarjeta'>
                <div className='cuerpo'>
                    <h6>Preguntas frecuentes</h6>
                    <ul>
                        { preguntas.map((pregunta, index)=>(
                            <React.Fragment key={index}>
                                <li onClick={()=>onChangeOpen(index)}>
                                    {pregunta.pregunta}
                                </li>

                                <AnimatePresence>
                                    { open && (
                                        resultIndex === index &&
                                            <motion.div
                                                initial= "closed"
                                                animate= "open"
                                                transition={{duration: 0.2}}
                                                exit= "closed"
                                                variants={propsAnimation}
                                            >
                                                <p>{pregunta.respuesta}</p>
                                            </motion.div>
                                    )
                                    }
                                </AnimatePresence>
                            </React.Fragment>
                        ))
                        }
                    </ul>
                    <p>
                        Nos encantará poder ayudarte a resolver tus dudas. <br/>
                        <span>
                            Escríbenos a contacto@tarjet.mx ó llámanos si prefieres hablar con nosotros.
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default PreguntasFrec;