console.log("Hello 🌎 QR Free");

// Fuente: https://davidshimjs.github.io/qrcodejs/


// Función para descargar el QR generado como imagen
function downloadQR() {
    // Buscar el elemento canvas o img dentro del div 'qrcode'
    var qrContainer = document.getElementById('qrcode');
    var qrElement = qrContainer.querySelector('canvas') || qrContainer.querySelector('img');
    
    if (!qrElement) {
        console.error('QR code element not found');
        return;
    }
    
    var url;
    if (qrElement.tagName === 'CANVAS') {
        // Si el QR está en un canvas, obtener la URL de la imagen
        url = qrElement.toDataURL('image/png');
    } else if (qrElement.tagName === 'IMG') {
        // Si el QR está en un img, simplemente usar el src
        url = qrElement.src;
    }
    
    // Crear un elemento <a> para el enlace de descarga
    var downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'QRCode.png'; // Nombre del archivo para descargar
    
    // Activar el enlace de descarga
    downloadLink.click();
}

// Asignar la función downloadQR a un botón o evento
// Ejemplo: suponiendo que tienes un botón con id 'downloadBtn'
document.getElementById('downloadBtn').addEventListener('click', downloadQR);

// Asume que ya tienes el script qrcode.min.js incluido en tu página

function updateQRCode(bgColor, pxColor) {
  // Primero, limpiar el contenido anterior del QR
  var qrcodeContainer = document.getElementById('qrcode');
  qrcodeContainer.innerHTML = ''; // Elimina hijos (canvas o img) existentes
  var elText = document.getElementById("text").value;
  // Crear una nueva instancia de QRCode con los colores seleccionados
  var qrcode = new QRCode(qrcodeContainer, {
      text: elText,
      colorDark: pxColor,
      colorLight: bgColor
  });
}

// Añadir event listeners a los selectores de color
document.getElementById('bgColor').addEventListener('input', function() {
  var bgColor = document.getElementById('bgColor').value;
  var pxColor = document.getElementById('pxColor').value;
  updateQRCode(bgColor, pxColor);
});

document.getElementById('pxColor').addEventListener('input', function() {
  var bgColor = document.getElementById('bgColor').value;
  var pxColor = document.getElementById('pxColor').value;
  updateQRCode(bgColor, pxColor);
});
document.getElementById("text").addEventListener('input', function(){
  var bgColor = document.getElementById('bgColor').value;
  var pxColor = document.getElementById('pxColor').value;
  updateQRCode(bgColor, pxColor);
})

// Llamada inicial para generar el QR inicial
updateQRCode('#ffffff', '#2800FF');
