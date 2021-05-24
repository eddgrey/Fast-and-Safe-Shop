import smartTv from "../img/smartTv.jpg";
import laptop from "../img/laptop.jpg";
import pocoX3 from "../img/Xiaomi_PocoX3.png";
import powerBank from "../img/powerBank.jpg";
import tablet from "../img/tabletSamsung.jpg";
import Producto from "./Producto";

const Home = () => {
  return (
    <main className="w-screen h-full ">
      <h2 className="text-blueGray-900 text-3xl px-10 pt-10">Ofertas</h2>
      <section className="flex flex-row justify-around pt-6">
        <Producto
          name="Smart TV Hisense 43H6500G LED 4K 43' 120V"
          precio="7,599"
          img={smartTv}
        />

        <Producto
          name="Laptop Lenovo V-Series V14-IIL, 8GB de RAM 1TB HDD"
          precio="12,499"
          img={laptop}
        />

        <Producto
          name="Xiaomi Poco X3 NFC Dual SIM 128 GB"
          precio="5,240"
          img={pocoX3}
        />

        <Producto
          name="Power Bank Brillo Metálico Batería Portátil 10000mah 2.1a"
          precio="199"
          img={powerBank}
        />

        <Producto
          name="Tablet Samsung Galaxy Tab A 2019 2GB de memoria RAM"
          precio="2,825"
          img={tablet}
        />
      </section>
    </main>
  );
};

export default Home;
