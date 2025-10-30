import React from "react";
import "../components/CardBlog.css";


interface CardBlogProps {
  imagen: string;
  altImagen: string;
  autor: string;
  enlaceCategoria?: string;
  titulo: string;
}

const CardBlog: React.FC<CardBlogProps> = ({
  imagen,
  altImagen,
  autor,
  enlaceCategoria = "#",
  titulo
}) => {
  return (
        <article className="cardBlog">
            <img className="cardBlog__photo" src={imagen} alt={altImagen} />
            <a className="cardBlog__category" href={enlaceCategoria}>{autor}</a>
            <h5 className="cardBlog__titulo">{titulo}</h5>
        </article>
  );
};

export default CardBlog;
