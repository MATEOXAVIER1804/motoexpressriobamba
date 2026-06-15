document.getElementById("pedidoForm").addEventListener("submit", function(e){

    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const recogida = document.getElementById("recogida").value;
    const entrega = document.getElementById("entrega").value;
    const tipo = document.getElementById("tipo").value;
    const descripcion = document.getElementById("descripcion").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const receptor = document.getElementById("receptor").value;
    const pago = document.getElementById("pago").value;

    let mensaje = `🚚 *NUEVO PEDIDO* %0A%0A`;

    mensaje += `👤 Nombre: ${nombre}%0A`;
    mensaje += `📱 Teléfono: ${telefono}%0A`;
    mensaje += `📍 Recogida: ${recogida}%0A`;
    mensaje += `🏠 Entrega: ${entrega}%0A`;
    mensaje += `📦 Tipo: ${tipo}%0A`;
    mensaje += `📝 Descripción: ${descripcion}%0A`;
    mensaje += `📅 Fecha: ${fecha || "No especificada"}%0A`;
    mensaje += `⏰ Hora: ${hora || "No especificada"}%0A`;
    mensaje += `🙋 Recibe: ${receptor}%0A`;
    mensaje += `💵 Pago: ${pago}%0A%0A`;

    mensaje += `📸 Si adjuntó una foto, por favor enviarla en el chat.`;

    const numero = "593995494655";

    window.open(
        `https://wa.me/${numero}?text=${mensaje}`,
        "_blank"
    );

});