
document.addEventListener("DOMContentLoaded", function() {
    // Sayfa yüklendiğinde loading ekranını kaldır
    document.getElementById("loading-screen").style.display = "none";
});

// Sayfa geçişini yöneten fonksiyon
function navigateAndPerform(pageUrl, func) {
    // Loading ekranını görünür hale getir
    document.getElementById("loading-screen").style.display = "flex";

    // Sayfa geçişini bekleyerek setTimeout kullanımı
    setTimeout(function() {
        // Sayfa yüklendiğinde loading ekranını kaldır
        document.getElementById("loading-screen").style.display = "none";

        // Belirtilen fonksiyonu çalıştır
        func();

        // Sayfayı değiştir veya istediğiniz işlemi yap
        window.location.href = pageUrl;
    }, 2000); // 2000 milisaniye (2 saniye) bekletme süresi
}

// Örnek bir fonksiyon
function myFunction() {
    console.log("Bu fonksiyon çalıştı!");
}
