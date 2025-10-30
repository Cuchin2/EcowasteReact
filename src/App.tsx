/* import BtnPrimary from "./components/BtnPrimary" */
import "../src/App.css"
import BtnPrimary from "./components/BtnPrimary"
import BtnSecondary from "./components/BtnSecondary"
import CardBlog from "./components/CardBlog"
import CardTienda from "./components/CardTienda"
import IconBell from "./components/ui/icons/IconBell"
import IconBubble from "./components/ui/icons/IconBubble"
import IconCalendar from "./components/ui/icons/IconCalendar"
import IconCart from "./components/ui/icons/IconCart"
import IconCaution from "./components/ui/icons/IconCaution"
import IconChevronDown from "./components/ui/icons/IconChevronDown"
import IconChevronLeft from "./components/ui/icons/IconChevronLeft"
import IconChevronLeftCircle from "./components/ui/icons/IconChevronLeftCircle"
import IconChevronRight from "./components/ui/icons/IconChevronRight"
import IconChevronRightCircle from "./components/ui/icons/IconChevronRightCircle"
import IconChevronUp from "./components/ui/icons/IconChevronUp"
import IconCross from "./components/ui/icons/IconCross"
import IconError from "./components/ui/icons/IconError"
import IconFilter from "./components/ui/icons/IconFilter"
import IconFolder from "./components/ui/icons/IconFolder"
import IconGallery from "./components/ui/icons/IconGallery"
import IconHeart from "./components/ui/icons/IconHeart"
import IconInfo from "./components/ui/icons/IconInfo"
import IconList from "./components/ui/icons/IconList"
import IconMenu from "./components/ui/icons/IconMenu"
import IconMinus from "./components/ui/icons/IconMinus"
import IconPlus from "./components/ui/icons/IconPlus"
import IconSearch from "./components/ui/icons/IconSearch"
import IconUser from "./components/ui/icons/IconUser"

const App = () => {
interface Datos {
  id: number;
  name:string
}
const datos:Datos[] = [
  { id: 1, name:'Luis'},
  { id: 2, name:'Nubia' }
];
const action = () => { 
  alert('hola bb');
 }
  return (
    <>
        <main className="mainPrincipal">
        <section>
            <div>
                <h2>H2 - Título Principal</h2>
                <h3>H3 - Título Secundario</h3>
                <h4>H4 - Subtítulo Principal</h4>
                <h5>H5 - Subtítulo Secundario</h5>
                <h6>H6 - Subtítulo terciario</h6>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, atque ducimus maiores soluta iusto alias consequuntur consectetur. Non eligendi natus, ipsam iure pariatur, laborum dignissimos officiis aliquam possimus vel nisi?
                Placeat corrupti <b>pariatur rem architecto dolores quis repellat</b> quam aut minus ea, debitis consectetur dolore, necessitatibus reiciendis laudantium excepturi laboriosam beatae voluptates neque exercitationem iure. Ducimus culpa rerum consequatur? Consequatur.
                Aut aliquam tempora nobis quasi cupiditate soluta vitae. <a href="#">Aquí</a></p>
                <p>Tempore animi, alias nesciunt voluptatibus possimus facilis iure aperiam quod doloremque maxime accusamus vel labore ea quaerat nostrum?
                Cumque eveniet <b>perspiciatis ratione esse, eligendi laboriosam, qui sunt</b> magni temporibus quis sequi aut molestias quidem corrupti, quam ipsum nemo optio distinctio. Architecto aspernatur consequuntur est animi eligendi, labore doloremque.
                Doloribus aliquam repellendus <i>dicta accusantium commodi vel at,</i> repellat error voluptatibus incidunt impedit similique ipsa eveniet id reiciendis beatae quas! Temporibus harum enim distinctio dolorum corporis animi, nulla voluptatibus in <a href="#"> Clic aquí</a></p>

                <BtnPrimary disabled={true}>Boton primary</BtnPrimary>
                <button className="btn-primary" disabled>Boton primary</button>
                
                <BtnSecondary disabled={true}>Boton secundario</BtnSecondary>
                <button className="btn-secondary" disabled>Boton secondary</button>
                
                <ul>
                    <li>Zero Waste</li>
                    <li>Alimentación Saludable</li>
                    <li>Proveedores Sostenibles</li>
                </ul>
                <h5>Categorias secundarias:</h5>
                <ol>
                    <li><b>Zero Waste:</b><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem corporis nemo accusantium quasi commodi rem explicabo incidunt numquam vitae molestiae quae repellendus suscipit, hic culpa, molestias beatae tempora, adipisci doloremque.</p></li>
                    <li><b>Alimentación Saludable:</b><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem corporis nemo accusantium quasi commodi rem explicabo incidunt numquam vitae molestiae quae repellendus suscipit, hic culpa, molestias beatae tempora, adipisci doloremque.</p></li>
                    <li><b>Proveedores Sostenibles:</b><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem corporis nemo accusantium quasi commodi rem explicabo incidunt numquam vitae molestiae quae repellendus suscipit, hic culpa, molestias beatae tempora, adipisci doloremque.</p></li>
                </ol>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, cum assumenda quos saepe aut ut quia. Ex blanditiis consequatur reprehenderit temporibus fugiat qui amet itaque sunt, iusto porro? Libero, exercitationem?</p>
            </div>
        </section>

        <section>
            <audio src="./assets/audio.mp3" controls preload="auto"></audio>

            <audio controls preload="auto">
                <source src="./assets/audio.mp3" type="audio/mpeg" />
            </audio>
            
            <video src="https://youtu.be/vlty4Z2fBrA?si=qWgdBz9le8Wgy7Jo"controls width="600px" height="400px" poster="./assets/img/blog/2402-Las Rs del Movimiento Zero Waste.png" preload="metadata"></video>

            <video controls width="600px" height="400px" preload="auto" poster="./assets/img/blog/2401-Qué es el Movimiento Zero Waste.png">
                <source src="https://youtu.be/vlty4Z2fBrA?si=qWgdBz9le8Wgy7Jo" type="video/mp4"  />tu navegador no soporta formatos de videos
            </video>

        </section>

        <h2> Titulo 2</h2>

      <CardTienda
        etiqueta="Oferta"
        imagen="./assets/img/tienda/Producto (10).webp"
        altImagen="Frascos de vidrio para condimentos"
        categoria="Ecowaste"
        enlaceCategoria="./landingPage-campo.html"
        titulo="Frascos de vidrio para condimentos"
        precio="S/. 25.87"
      />
        <CardBlog
        imagen="./assets/img/blog/2401-Qué es el Movimiento Zero Waste.png"
        altImagen="Frascos de vidrio para condimentos"
        autor="Nubia Romero"
        enlaceCategoria="./landingPage-campo.html"
        titulo="¿Qué es el Movimiento Zero Waste?"
      />
      <div >
      <IconBell />
      <IconBubble />
      <IconCalendar />
      <IconCart/>
      <IconChevronDown/>
      <IconChevronLeft/>
      <IconChevronLeftCircle/>
      <IconChevronRight/>
      <IconChevronRightCircle/>
      <IconChevronUp/>
      <IconCross/>
      <IconError/>
      </div>
      <div>
        <IconFilter/>
        <IconFolder/>
        <IconGallery/>
        <IconHeart/>
        <IconInfo/>
        <IconList/>
        <IconMenu/>
        <IconMinus/>
        <IconPlus/>
        <IconCaution/>
        <IconSearch/>

        <IconUser size={34} color="#5F9235FF" strokeWidth={5} className="ico-hover" onClick={action}/>

      </div>
      <p>hola</p>
      <ul>
        { datos.map(dato=>(
            <li key={dato.id}>{dato.name}</li>
        ))}
      </ul>
    </main>
    </>
  )
}
export default App