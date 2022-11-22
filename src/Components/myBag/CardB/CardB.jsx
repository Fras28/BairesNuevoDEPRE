import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { asyncCancelFav, asyncfavProducts } from "../../redux/slice";
import "./CardB.css";

export const CardBag = ({producto}) => {

  
    const dispatch = useDispatch()
    const [articles, setArticles] = useState({
        name:[],
    });

   let cancelFav = function cancelBagArticle(e){
        setArticles({
            ...articles,
            name: producto.name,
            price:producto.price
        })
        dispatch(asyncCancelFav(producto))
        Swal.fire({
          position: 'bottom-end',
          icon: '',
          title: 'Eliminado',
          showConfirmButton: false,
          timer: 350
        })
    }

  return (
    <div className="contCardBag">
      <div className="leftInfo">
        <h2 className="nameProd">{producto.name}</h2>
        <p className="detProd">{producto.detail}</p>
      </div>
      <div className="rightInfo">
      <p className="priceProd">${producto.price}</p>
      <div className="divBtnProd">
        <button className="btnPlus" onClick={cancelFav} >
        <svg width="30" height="30" viewBox="0 0 846 747" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className="efCancel" fill-rule="evenodd" clip-rule="evenodd" d="M547.055 609.79C547.055 534.186 608.336 472.91 683.948 472.91C759.552 472.91 820.842 534.186 820.842 609.79C820.842 685.394 759.56 746.683 683.948 746.683C608.344 746.683 547.055 685.407 547.055 609.79V609.79ZM659.055 584.905H621.722C614.857 584.905 609.29 590.42 609.29 597.462V622.118C609.29 629.055 614.868 634.681 621.722 634.681H659.055V672.014C659.055 678.884 664.576 684.451 671.618 684.451H696.274C703.211 684.451 708.836 678.868 708.836 672.014V634.681H746.169C753.034 634.681 758.602 629.165 758.602 622.118V597.462C758.602 590.525 753.024 584.905 746.169 584.905H708.836V547.561C708.836 540.691 703.315 535.123 696.274 535.123H671.618C664.68 535.123 659.055 540.707 659.055 547.561V584.905ZM735.691 443.385C719.347 438.307 701.967 435.572 683.946 435.572C587.716 435.572 509.719 513.567 509.719 609.785C509.719 627.807 512.454 645.187 517.532 661.535L440.209 738.857C430.49 748.576 414.73 748.576 405.012 738.857L69.2517 403.097C-22.9257 310.92 -23.087 161.551 68.7881 69.2041C161.528 -23.0666 310.948 -22.9319 403.121 69.2301L422.611 88.7195L442.1 69.2301C534.261 -22.9312 683.687 -23.0672 775.993 68.7666C868.305 161.553 868.144 310.913 775.967 403.1L735.691 443.385Z" fill="black"/>
<path className="efCancel" fill-rule="evenodd" clip-rule="evenodd" d="M547.055 609.79C547.055 534.186 608.336 472.91 683.948 472.91C759.552 472.91 820.842 534.186 820.842 609.79C820.842 685.394 759.56 746.683 683.948 746.683C608.344 746.683 547.055 685.407 547.055 609.79V609.79ZM659.055 584.905H621.722C614.857 584.905 609.29 590.42 609.29 597.462V622.118C609.29 629.055 614.868 634.681 621.722 634.681H659.055V672.014C659.055 678.884 664.576 684.451 671.618 684.451H696.274C703.211 684.451 708.836 678.868 708.836 672.014V634.681H746.169C753.034 634.681 758.602 629.165 758.602 622.118V597.462C758.602 590.525 753.024 584.905 746.169 584.905H708.836V547.561C708.836 540.691 703.315 535.123 696.274 535.123H671.618C664.68 535.123 659.055 540.707 659.055 547.561V584.905ZM735.691 443.385C719.347 438.307 701.967 435.572 683.946 435.572C587.716 435.572 509.719 513.567 509.719 609.785C509.719 627.807 512.454 645.187 517.532 661.535L440.209 738.857C430.49 748.576 414.73 748.576 405.012 738.857L69.2517 403.097C-22.9257 310.92 -23.087 161.551 68.7881 69.2041C161.528 -23.0666 310.948 -22.9319 403.121 69.2301L422.611 88.7195L442.1 69.2301C534.261 -22.9312 683.687 -23.0672 775.993 68.7666C868.305 161.553 868.144 310.913 775.967 403.1L735.691 443.385Z" fill="black"/>
<path className="efCancel" d="M631.194 634.733H739.194V707.733H631.194V634.733Z" fill="black"/>
<path className="efCancel" d="M628 512H736V585H628V512Z" fill="black"/>
</svg>

</button>
      </div>
      </div>
    </div>
  );
};
