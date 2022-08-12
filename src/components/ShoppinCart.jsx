import React from 'react';
import { Offcanvas } from 'react-bootstrap';

const ShoppinCart = ({show, handleClose}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPurchasesThun()) 
      
    }, [])
    



    return (
        <Offcanvas show={show} onHide={handleClose} placement= 'end' >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> My Shoppin </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         My Shoppin
         
        </Offcanvas.Body>
      </Offcanvas>
    );
};

export default ShoppinCart;