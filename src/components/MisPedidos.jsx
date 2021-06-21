import { useUsuario } from "../context/TipoUsuarioContext";
import ProductoLista from "./ProductoLista";
const MisPedidos = () => {
  const { compras } = useUsuario();
  return (
    <div>
      <section className="lista-productos">
        <div className="flex flex-row justify-between">
          <h1 className="text-2xl font-medium">Mis compras</h1>
          <h2 className="text-2xl font-medium">Estado</h2>
        </div>

        {compras.length > 0 ? (
          compras.map(
            (
              { total, fechaEntrega, productos, direccion, metodoPago },
              index
            ) => (
              <ProductoLista
                key={index}
                nombre={`Pedido ${index + 1}`}
                total={total}
                fechaEntrega={fechaEntrega}
                productos={productos}
                direccion={direccion}
                metodoPago={metodoPago}
              />
            )
          )
        ) : (
          <p className="mt-10 font-medium">No ha realizado ninguna compra</p>
        )}
      </section>
    </div>
  );
};

export default MisPedidos;
