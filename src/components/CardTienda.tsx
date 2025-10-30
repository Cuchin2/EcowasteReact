import "../components/CardTienda.css";

import heartIcon from "../assets/svg/iconos/heart.svg";
import cartIcon from "../assets/svg/iconos/cart.svg";

interface CardTiendaProps {
  etiqueta?: string;
  imagen: string;
  altImagen: string;
  categoria: string;
  enlaceCategoria?: string;
  titulo: string;
  precio: string;
  enlaceOferta?: string;
}

const CardTienda = ({
  etiqueta = "Oferta",
  imagen,
  altImagen,
  categoria,
  enlaceCategoria = "#",
  titulo,
  precio,
  enlaceOferta = "#"
}:CardTiendaProps) => {
  return (
    <article className="cardTienda">
      <div>
        <a className="cardTienda__etiqueta" href={enlaceOferta}>
          {etiqueta}
        </a>

        <div className="cardTienda__icon-container">
          <img
            className="cardTienda__icon--heart"
            src={heartIcon}
            alt="Agregar a wishlist"
          />
          <img
            className="cardTienda__icon--cart"
            src={cartIcon}
            alt="Agregar al carrito"
          />
        </div>

        <img className="cardTienda__photo" src={imagen} alt={altImagen} />

        <div className="cardTienda__container">
          <a
            className="cardTienda__category"
            href={enlaceCategoria}
            target="_blank"
            rel="noopener noreferrer"
          >
            {categoria}
          </a>

          <h5 className="cardTienda__titulo">{titulo}</h5>
          <p className="cardTienda__precio">{precio}</p>
        </div>
      </div>
    </article>
  );
};

export default CardTienda;
